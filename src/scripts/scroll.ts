/**
 * DANAT — the site's scroll engine.
 *
 * One rAF loop, one IntersectionObserver, shared by every section.
 * Everything here writes CSS custom properties or data attributes and
 * lets CSS do the animating — no JS-driven style thrash.
 *
 * Total cost: ~2 KB. No animation library.
 */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------
   1. REVEALS — enter once, never re-trigger on scroll-back.
   ------------------------------------------------------------------ */
export function initReveals(root: ParentNode = document) {
  const targets = root.querySelectorAll<HTMLElement>(
    '[data-rise], [data-curtain], [data-draw], [data-mask]'
  );
  if (!targets.length) return;

  if (REDUCED) {
    targets.forEach((el) => el.setAttribute('data-in', ''));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.setAttribute('data-in', '');
        // Stagger children that opt in.
        el.querySelectorAll<HTMLElement>('[data-stagger] > *').forEach((c, i) => {
          c.style.setProperty('--d', `${i * 70}ms`);
        });
        io.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
  );

  targets.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------
   2. SCROLL-LINKED — parallax, zoom, and per-section progress.
   Elements declare: data-parallax="0.18"  data-zoom="0.12"
                     data-travel     -> receives --t from 0..1, unitless,
                                        as the element crosses the screen
   Sections declare: data-progress  -> receives --p from 0..1

   --t is the one to drive 3D from: it is a plain number, so it can be
   multiplied into degrees. --py is a length and CSS cannot divide a
   length by a length to get back to a scalar.
   ------------------------------------------------------------------ */
type Linked = {
  el: HTMLElement;
  parallax: number;
  zoom: number;
  progress: boolean;
  travel: boolean;
};

export function initScrollLink(root: ParentNode = document) {
  if (REDUCED) return;

  const items: Linked[] = [
    ...root.querySelectorAll<HTMLElement>(
      '[data-parallax], [data-zoom], [data-progress], [data-travel]'
    ),
  ].map((el) => ({
    el,
    parallax: parseFloat(el.dataset.parallax ?? '0'),
    zoom: parseFloat(el.dataset.zoom ?? '0'),
    progress: el.hasAttribute('data-progress'),
    travel: el.hasAttribute('data-travel'),
  }));

  if (!items.length) return;

  let vh = window.innerHeight;
  let ticking = false;

  const frame = () => {
    for (const it of items) {
      const r = it.el.getBoundingClientRect();
      if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) continue;

      // 0 when the element's top hits the viewport bottom, 1 when its
      // bottom clears the viewport top.
      const p = (vh - r.top) / (vh + r.height);
      const clamped = Math.min(1, Math.max(0, p));

      if (it.parallax) {
        it.el.style.setProperty('--py', `${(clamped - 0.5) * it.parallax * 200}px`);
      }
      if (it.zoom) {
        it.el.style.setProperty('--z', String(1 + (1 - clamped) * it.zoom));
      }
      if (it.travel) {
        it.el.style.setProperty('--t', clamped.toFixed(4));
      }
      if (it.progress) {
        // Progress across the pinned track: 0 while entering, 1 at the end.
        const track = r.height - vh;
        const prog = track > 0 ? Math.min(1, Math.max(0, -r.top / track)) : 0;
        it.el.style.setProperty('--p', prog.toFixed(4));
        it.el.dispatchEvent(new CustomEvent('track', { detail: prog }));
      }
    }
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(frame);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener(
    'resize',
    () => {
      vh = window.innerHeight;
      onScroll();
    },
    { passive: true }
  );
  frame();
}

/* ------------------------------------------------------------------
   3. COUNTERS
   ------------------------------------------------------------------ */
export function initCounters(root: ParentNode = document) {
  const els = root.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;

  const run = (el: HTMLElement) => {
    const to = Number(el.dataset.count ?? 0);
    /* 1500ms sounds long but the old quartic ease was 94% done by 750ms,
       so the figure effectively snapped into place and there was nothing
       to watch. Longer, and with a far gentler curve. */
    const dur = 2200;
    if (REDUCED) {
      el.textContent = to.toLocaleString('en-US');
      return;
    }
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - t, 2);
      el.textContent = Math.round(to * eased).toLocaleString('en-US');
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) {
          run(el);
        } else {
          /* Armed again. It used to unobserve after the first run, so
             scrolling back past a figure showed the finished number and
             never the count — which read as the animation being gone. */
          el.textContent = '0';
        }
      }
    },
    /* Starts when the figure is properly on screen rather than as it
       clips the bottom edge — otherwise a quick scroll spends the whole
       count off-view and you arrive at the finished number. */
    { threshold: 0.4, rootMargin: '0px 0px -12% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------
   4. Boot — re-runs after Astro view transitions.
   ------------------------------------------------------------------ */
export function boot() {
  initReveals();
  initScrollLink();
  initCounters();
}
