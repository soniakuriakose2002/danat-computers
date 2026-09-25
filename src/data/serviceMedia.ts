import type { ImageMetadata } from 'astro';

import driveMacro from '@assets/photos/drive-macro.jpg';
import repairSolder from '@assets/photos/repair-solder.jpg';
import printerMachine from '@assets/photos/printer-machine.jpg';
import cctvWall from '@assets/photos/cctv-wall.jpg';
import networkPatch from '@assets/photos/network-patch.jpg';
import networkEng from '@assets/photos/network-eng.jpg';
import driveOpen from '@assets/photos/datarecovery-drive.jpg';
import supportDesk from '@assets/photos/support-desk.jpg';


/** One photo per service slug, chosen for how it crops wide. */
export const serviceMedia: Record<string, { img: ImageMetadata; alt: string }> = {
  'computer-repair': {
    img: repairSolder,
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
    img: driveMacro,
    alt: 'A drive controller board photographed close',
  },
  'data-recovery': {
    img: driveOpen,
    alt: 'Inside an opened hard disk drive, platter and actuator arm visible',
  },
  /* computer-sales HAS NO PHOTO. It used retail-display.jpg, which is
     visibly an art and craft shop — "Artebella ART & CRAFT" is legible
     on the shelving — and is not Danat's business or anything like it.
     Nothing in the library shows a counter, a shelf of machines or a
     shopfront, so the entry is removed and fallbackMedia serves it
     until one is shot. Do not fill this with another approximation. */
};

/** Fallback so a new service without a photo never breaks the build. */
export const fallbackMedia = { img: networkEng, alt: 'Danat technician at work' };
