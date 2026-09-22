/**
 * Oman outline, projected from the public-domain Natural Earth country
 * boundary (johan/world.geo.json). Equirectangular with a cos(latitude)
 * correction so it is not horizontally stretched, fitted to a
 * 1000 x 1342 viewBox. The second sub-path is the Musandam exclave.
 *
 * Shared so the homepage section and the branches page cannot drift.
 */
export const OMAN_VIEWBOX = '0 0 1000 1342';

export const OMAN_PATH =
  'M878.7,727.2L830.9,821.5L772.8,814.3L746.2,847.1L725.6,916.9L741.4,1008.9L729.3,1025.8L670.4,1025.4L590.4,1076.8L577.9,1143.9L548.6,1173.0L468.9,1171.8L418.8,1206.5L419.4,1262.1L357.5,1300.4L286.8,1287.4L201.1,1333.8L142.0,1341.6L100.2,1245.4L0.0,1018.2L384.2,880.6L469.6,605.2L410.9,507.7L414.2,452.2L451.6,395.3L451.9,339.0L509.9,311.9L487.2,292.7L497.7,203.1L563.1,202.5L620.5,296.6L692.0,346.6L786.0,364.6L861.8,389.7L919.6,468.6L954.2,514.3L1000.0,531.7L999.8,562.5L953.1,644.5L932.7,683.1L878.7,727.2Z ' +
  'M562.4,68.8L545.7,93.8L521.4,46.9L558.7,0.0L574.5,12.0L562.4,68.8Z';

/**
 * Branch positions: the real coordinates run through the same projection.
 *   Sohar   24.347 N, 56.709 E
 *   Al Hail 23.670 N, 58.190 E
 *   Ruwi    23.588 N, 58.408 E
 *   Salalah 17.020 N, 54.093 E
 */
export const OMAN_PINS: Record<string, { x: number; y: number }> = {
  sohar: { x: 603, y: 282 },
  hail: { x: 793, y: 375 },
  ruwi: { x: 821, y: 387 },
  salalah: { x: 268, y: 1291 },
};

/** Dotted routes drawn between the branches, north to south. */
export const OMAN_ROUTES: [string, string][] = [
  ['sohar', 'hail'],
  ['hail', 'ruwi'],
  ['ruwi', 'salalah'],
];
