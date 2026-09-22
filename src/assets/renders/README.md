# Teardown renders

Six images, one per stage. Name them exactly:

    01.png   the complete system   (whole laptop, open)
    02.png   display               (screen lifting off the base)
    03.png   performance           (mainboard, CPU visible)
    04.png   storage               (SSD / M.2 stick)
    05.png   cooling               (heatpipe + fan assembly)
    06.png   connectivity          (port edge, side-on)

.jpg and .webp also work. They are picked up automatically by
Teardown.astro, converted to WebP and sized per device at build time.
A stage with no file shows a marked empty frame, never a broken one.

## For whoever makes them

- transparent PNG if possible, ~2000px wide
- the part lit against near-black, with a green edge glow
- SAME camera angle and SAME distance in all six, so they read as one
  machine coming apart rather than six unrelated product shots
- leave even margins; the layout centres them
