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
    'Twenty years of computer repair, CCTV, networking and IT supply across Oman. Board-level repair from four branches — Ruwi, Salalah, Sohar and Hail.',
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

  social: {
    facebook: 'https://www.facebook.com/DanatCSOman/',
    instagram: 'https://www.instagram.com/computersupermarketruwi/',
  },

  /** ERP-derived, all verifiable from the company's own exports. */
  stats: {
    parts: 5430, // distinct SKUs in products_export
    categories: 249, // distinct product categories
    branches: 4, // journal codes RW / SL / SO / HL
    since: 2003, // earliest ERP record: 2003-10-12
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Business Solutions', href: '/business' },
    { label: 'Branches', href: '/branches' },
    { label: 'Support', href: '/support' },
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
  /** false = needs confirmation from the client before launch */
  verified: boolean;
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
    verified: true,
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
    verified: false,
  },
  {
    slug: 'hail',
    name: 'Danat Hail',
    city: 'Al Hail, Seeb',
    address: 'TODO — confirm street address with client',
    phone: null,
    tel: null,
    hours: ['Sat–Thu  09:00 – 13:00', 'Sat–Thu  16:00 – 21:00', 'Friday   Closed'],
    map: { x: 63, y: 26 },
    verified: false,
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
    verified: false,
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

export function whatsappLink(message = site.whatsappMessage): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}
