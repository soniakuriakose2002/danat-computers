/**
 * Smooth, weighted scrolling (the "expensive" feel of Scout Motors and
 * similar sites), via Lenis. Lenis drives the real window scroll, so
 * sticky sections, IntersectionObservers and the 3D teardowns all keep
 * working unchanged.
 *
 * - Off entirely for visitors who ask for reduced motion.
 * - Paused while any dialog is open or the mobile menu has locked the
 *   page, so the drawer, modals and chat scroll on their own.
 * - Scrollable panels inside the page (chat, lists) keep native scroll.
 * - Survives <ClientRouter /> navigation: one instance for the session,
 *   jumped to the top on every page swap.
 */
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

let lenis: Lenis | null = null;

export function initSmooth() {
  if (lenis || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  lenis = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 0.9,
    anchors: { offset: -90 },
    allowNestedScroll: true,
    stopInertiaOnNavigate: true,
    prevent: (node) => !!node.closest?.('dialog, [aria-modal="true"], [data-lenis-prevent]'),
  });
  (window as any).__lenis = lenis;
  const root = document.documentElement;
  const frame = (t: number) => {
    const locked = root.style.overflow === 'hidden' || !!document.querySelector('dialog[open]');
    if (locked && !lenis!.isStopped) lenis!.stop();
    else if (!locked && lenis!.isStopped) lenis!.start();
    lenis!.raf(t);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  document.addEventListener('astro:after-swap', () => lenis?.scrollTo(0, { immediate: true, force: true }));
}
