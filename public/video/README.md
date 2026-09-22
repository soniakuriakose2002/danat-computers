# Hero 3D clip

Drop the rendered clip here as:

    hero.webm    VP9 or AV1   (preferred, served first)
    hero.mp4     H.264        (Safari / iOS fallback)

Then set `HAS_VIDEO = true` in src/components/sections/Hero3D.astro.

## Spec

| | |
|---|---|
| Aspect  | 16:9, 1920x1080 |
| Length  | 6-10 s, seamless loop (last frame must equal first) |
| Audio   | none at all — autoplay is blocked with an audio track |
| Size    | under 3 MB encoded |
| Grade   | dark, near-black ground so white type holds contrast |

No alpha channel needed; the clip sits behind a scrim.
