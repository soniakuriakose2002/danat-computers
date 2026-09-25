# Laptop model

Put the real laptop model here as:

    laptop.glb

ServiceLayers3D.astro picks it up automatically. With no file here, the
built-in code laptop is shown, so the site never breaks.

## What the model needs

- **Separate parts**: screen/lid, keyboard deck, battery, motherboard,
  RAM, SSD, fan/heatsink, bottom case. One solid mesh cannot come apart.
- **Useful part names** (e.g. `Battery`, `SSD`, `Fan`, `Motherboard`).
  Names are matched by the MODEL_PARTS rules at the top of the script in
  ServiceLayers3D.astro. Open the site with `?d3debug` at the end of the
  address and the browser console lists every mesh and the part it went
  to; adjust the rules to fit the model's names.
- **Size**: aim for under 8 MB. Textures at 2048 px or less.
- **Format**: plain .glb (not Draco-compressed).
- Any units and scale are fine; it is resized automatically.
