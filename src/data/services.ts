/**
 * The six headline services, as shown in the hero hub, the services
 * section and the footer. `angle` places each node on the hub ring
 * (degrees clockwise from the top).
 */

export interface HubService {
  n: string;
  key: string;
  title: string;
  tagline: string;
  body: string;
  href: string;
  /** Position on the hub ring, degrees clockwise from 12 o'clock. */
  angle: number;
  icon:
    | 'laptop'
    | 'printer'
    | 'camera'
    | 'network'
    | 'drive'
    | 'headset';
}

export const hubServices: HubService[] = [
  {
    n: '01',
    key: 'repair',
    title: 'Computer Repair',
    tagline: 'Diagnose. Repair. Restore.',
    body: 'Hardware and software solutions to keep your devices running at their best — diagnosed free, repaired at board level.',
    href: '/services/computer-repair',
    angle: 0,
    icon: 'laptop',
  },
  {
    n: '02',
    key: 'printer',
    title: 'Printer Services',
    tagline: 'Service. Supply. Sustain.',
    body: 'Laser, inkjet, thermal and barcode printers serviced and repaired — with the consumables that keep them running in stock.',
    href: '/services/printer-services',
    angle: 300,
    icon: 'printer',
  },
  {
    n: '03',
    key: 'cctv',
    title: 'CCTV Solutions',
    tagline: 'Survey. Install. Monitor.',
    body: 'IP and analogue surveillance surveyed before it is quoted, installed properly, and maintained across Oman.',
    href: '/services/cctv-services',
    angle: 60,
    icon: 'camera',
  },
  {
    n: '04',
    key: 'network',
    title: 'Networking',
    tagline: 'Design. Cable. Connect.',
    body: 'Structured cabling, managed and PoE switching, Wi-Fi placed by survey, routers and firewalls — built to hold up.',
    href: '/services/networking',
    angle: 120,
    icon: 'network',
  },
  {
    n: '05',
    key: 'data',
    title: 'Data Recovery',
    tagline: 'Assess. Recover. Return.',
    body: 'Failed drives, dead machines and deleted volumes. We tell you honestly what is recoverable before any work begins.',
    href: '/services/data-recovery',
    angle: 180,
    icon: 'drive',
  },
  {
    n: '06',
    key: 'support',
    title: 'IT Support',
    tagline: 'Respond. Resolve. Maintain.',
    body: 'On-site and remote support for homes and businesses, with maintenance contracts covering all three branches.',
    href: '/services/hardware-troubleshooting',
    angle: 240,
    icon: 'headset',
  },
];

/** Node position on the ring as a percentage offset from centre. */
export function nodePos(angle: number, radius = 38) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: +(Math.cos(rad) * radius).toFixed(3),
    y: +(Math.sin(rad) * radius).toFixed(3),
  };
}
