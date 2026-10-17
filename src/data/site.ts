/**
 * DANAT — single source of truth for business facts.
 *
 * PROVENANCE: every value below is either verified from danatcomputers.com,
 * from web search, or from the company's own Odoo ERP exports.
 * Anything unverified is marked `verified: false` and flagged TODO.
 * Do not invent values here — an unverified address on a live site is worse
 * than an absent one.
 */

export const site = {
  name: 'Danat',
  nameFull: 'Danat Computers',
  legalName: 'ASTHAR TRADING CO LLC',
  tagline: 'We go deeper.',
  description:
    'Twenty years of computer repair, CCTV, networking and IT supply across Oman. Board-level repair from three branches — Ruwi, Salalah and Sohar.',
  url: 'https://danatcomputers.com',
  locale: 'en',

  /** Verified from danatcomputers.com */
  email: 'danatruwi@danatcomputers.com',

  /**
   * Verified mobile / WhatsApp number.
   * NOTE: the current live site also lists "(+060) 444 434 444", which is not
   * a valid Oman format (Oman is +968). Deliberately omitted until confirmed.
   */
  phone: {
    display: '+968 7832 3116',
    tel: '+96878323116',
    whatsapp: '96878323116',
    verified: true,
  },

  whatsappMessage: 'Hello Danat — I need help with',

  /**
   * Agency of record. The footer copyright carries this name at the
   * client's instruction. Danat's own legal entity, ASTHAR TRADING CO
   * LLC, stays visible in the footer's description column so the
   * trading entity is still stated on the page.
   */
  builtBy: {
    name: 'Alphalize Technologies Private Limited',
    url: 'https://www.alphalize.com/en',
  },

  /**
   * The company's own film, linked from danatcomputers.com. Title:
   * "ഏറ്റവും വലിയ കമ്പ്യൂട്ടർ സൂപ്പർ മാർക്കറ്റ് ഒമാനിൽ | Biggest Computer
   * supermarket Oman DANETcomputers", on the DANETcomputers channel.
   * Verified: it is the single video URL on the current live site.
   */
  video: {
    youtube: '7VTB6scn-lk',
    /** Shan Sahib's channel, supplied by the client. */
    channel: 'https://www.youtube.com/@shanontech4849',
    title: 'Inside Danat Computers',
    verified: true,
  },

  social: {
    facebook: 'https://www.facebook.com/DanatCSOman/',
    instagram: 'https://www.instagram.com/computersupermarketruwi/',
  },

  /** ERP-derived, all verifiable from the company's own exports. */
  stats: {
    parts: 5430, // distinct SKUs in products_export
    categories: 249, // distinct product categories
    // Hail was withdrawn at the client's instruction. The ERP still
    // carries an HL journal code from when it traded.
    branches: 3, // journal codes RW / SL / SO
    since: 2003, // earliest ERP record: 2003-10-12
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Business Solutions', href: '/business' },
    { label: 'Branches', href: '/branches' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export interface Branch {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string | null;
  tel: string | null;
  hours: string[];
  /** Map position as a % of the SVG viewBox — approximate, for the stylised map only. */
  map: { x: number; y: number };
  /**
   * Real coordinates, for the OpenStreetMap embed on each branch card.
   *
   * Ruwi is the shopfront: Computer Street is a published address.
   * Sohar and Salalah are the CITY, not the shop — nobody has given us
   * their street addresses, so their maps are labelled by city and
   * their address slot stays open rather than dropping a pin on a
   * building we are guessing at.
   */
  geo: { lat: number; lon: number; precise: boolean };
  /** Address/phone confirmed against a published source. */
  verified: boolean;
  /**
   * Opening hours are NOT sourced — they are a placeholder pattern.
   * Nothing published by Danat states its trading hours. Leave false
   * until the client confirms, so the UI can flag them.
   */
  hoursVerified: boolean;
}

/**
 * Branch list. Existence of all four is confirmed from ERP journal codes
 * (INVRW / INVSL / INVSO / INVHL) and salesman groupings.
 * Only the Ruwi address is published anywhere; the other three are TODO.
 */
export const branches: Branch[] = [
  {
    slug: 'ruwi',
    name: 'Danat Ruwi',
    city: 'Ruwi, Muscat',
    address: 'Computer Street, Ruwi\nPO Box 502, Postal Code 118\nSultanate of Oman',
    phone: '+968 7832 3116',
    tel: '+96878323116',
    hours: ['Sat–Thu  09:00 – 13:00', 'Sat–Thu  16:00 – 21:00', 'Friday   Closed'],
    map: { x: 70, y: 30 },
    geo: { lat: 23.593, lon: 58.556, precise: true },
    verified: true,
    hoursVerified: false,
  },
  {
    slug: 'sohar',
    name: 'Danat Sohar',
    city: 'Sohar, Al Batinah North',
    address: 'TODO — confirm street address with client',
    phone: null,
    tel: null,
    hours: ['Sat–Thu  09:00 – 13:00', 'Sat–Thu  16:00 – 21:00', 'Friday   Closed'],
    map: { x: 55, y: 17 },
    geo: { lat: 24.347, lon: 56.709, precise: false },
    verified: false,
    hoursVerified: false,
  },
  {
    slug: 'salalah',
    name: 'Danat Salalah',
    city: 'Salalah, Dhofar',
    address: 'TODO — confirm street address with client',
    phone: null,
    tel: null,
    hours: ['Sat–Thu  09:00 – 13:00', 'Sat–Thu  16:00 – 21:00', 'Friday   Closed'],
    map: { x: 26, y: 76 },
    geo: { lat: 17.019, lon: 54.089, precise: false },
    verified: false,
    hoursVerified: false,
  },
];

/**
 * Brands carried. Extracted from product names in the company's own
 * catalogue export — not aspirational, not invented.
 */
export const brands: string[][] = [
  ['HP', 'Dell', 'Acer', 'ASUS', 'Apple', 'Lenovo', 'Canon', 'Epson'],
  ['Hikvision', 'Dahua', 'Uniview', 'EZVIZ', 'TP-Link', 'Zebra', 'AOC', 'Panasonic'],
];

/* api.whatsapp.com rather than wa.me: some networks in Oman do not
   resolve wa.me at all (DNS_PROBE_FINISHED_NXDOMAIN), while
   whatsapp.com resolves wherever WhatsApp itself works. Same chat. */
export function whatsappLink(message = site.whatsappMessage): string {
  return `https://api.whatsapp.com/send?phone=${site.phone.whatsapp}&text=${encodeURIComponent(message)}`;
}

/* Google Maps rather than openstreetmap.org: OSM's site rate-limits
   shared networks (Error 429), and Google Maps opens in the app on
   phones. Ruwi's street address is confirmed, so it gets its exact
   point; Sohar and Salalah are only known by city, so they search the
   city rather than dropping a pin on a spot we cannot vouch for. */
export function mapLink(b: { city: string; geo: { lat: number; lon: number; precise: boolean } }): string {
  const q = b.geo.precise ? `${b.geo.lat},${b.geo.lon}` : `${b.city}, Oman`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
