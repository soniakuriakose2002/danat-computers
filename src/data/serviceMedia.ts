import type { ImageMetadata } from 'astro';

import repairBoard from '@assets/photos/repair-board.jpg';
import repairSolder from '@assets/photos/repair-solder.jpg';
import printerMachine from '@assets/photos/printer-machine.jpg';
import cctvWall from '@assets/photos/cctv-wall.jpg';
import networkPatch from '@assets/photos/network-patch.jpg';
import networkEng from '@assets/photos/network-eng.jpg';
import driveOpen from '@assets/photos/datarecovery-drive.jpg';
import supportDesk from '@assets/photos/support-desk.jpg';
import retail from '@assets/photos/retail-display.jpg';

/** One photo per service slug, chosen for how it crops wide. */
export const serviceMedia: Record<string, { img: ImageMetadata; alt: string }> = {
  'computer-repair': {
    img: repairBoard,
    alt: 'Technician testing a laptop mainboard with a multimeter',
  },
  'printer-services': {
    img: printerMachine,
    alt: 'Internal rollers and drum of a printing machine being serviced',
  },
  'cctv-services': {
    img: cctvWall,
    alt: 'Two security cameras mounted on a building wall',
  },
  networking: {
    img: networkPatch,
    alt: 'Network patch panel with dense structured cabling',
  },
  'software-troubleshooting': {
    img: supportDesk,
    alt: 'Support team working at their desks',
  },
  'hardware-troubleshooting': {
    img: repairSolder,
    alt: 'Technician probing a laptop board with a meter',
  },
  'data-recovery': {
    img: driveOpen,
    alt: 'Inside an opened hard disk drive, platter and actuator arm visible',
  },
  'computer-sales': {
    img: retail,
    alt: 'Retail display of computer products and accessories',
  },
};

/** Fallback so a new service without a photo never breaks the build. */
export const fallbackMedia = { img: networkEng, alt: 'Danat technician at work' };
