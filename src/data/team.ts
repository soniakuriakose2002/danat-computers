/**
 * MEET OUR TEAM — one line per person.
 *
 * 1. Put each person's photo in  src/assets/team/  (jpg, png or webp).
 *    Best: head and shoulders, plain light background, everyone shot the
 *    same way. Transparent PNG cut-outs look best of all.
 * 2. Fill in the fields below and set `photo` to the file name.
 *
 * dept decides the card's colour and the filter it appears under:
 *   'ceo' | 'management' | 'sales' | 'technical' | 'service' | 'admin' | 'accounts' | 'business'
 *
 * A card with no photo shows a silhouette and no name shows "Name"; the
 * section flags itself as a draft until every card has both.
 */
export type Dept = 'ceo' | 'management' | 'sales' | 'technical' | 'service' | 'admin' | 'accounts' | 'business';

export interface TeamMember {
  branch: 'ruwi' | 'sohar' | 'salalah';
  name: string;
  role: string;
  dept: Dept;
  bio?: string;
  photo?: string;
  email?: string;
  linkedin?: string;
}

export const teamBranches = [
  { slug: 'ruwi', name: 'Ruwi', city: 'Muscat' },
  { slug: 'sohar', name: 'Sohar', city: 'Al Batinah North' },
  { slug: 'salalah', name: 'Salalah', city: 'Dhofar' },
] as const;

export const deptLabels: Record<Dept, string> = {
  ceo: 'CEO & Founder',
  management: 'Management',
  sales: 'Sales & Marketing',
  technical: 'Technical Support',
  service: 'Service & Repair',
  admin: 'Administration',
  accounts: 'Accounts',
  business: 'Business Solutions',
};

export const team: TeamMember[] = [
  { branch: 'ruwi', name: '', role: 'Branch Manager', dept: 'management', bio: 'Keeps the branch running smoothly, every day.' },
  { branch: 'ruwi', name: '', role: 'Board-level Technician', dept: 'service', bio: 'Traces faults to the component, not the whole board.' },
  { branch: 'ruwi', name: '', role: 'IT Support Engineer', dept: 'technical', bio: 'Networks, CCTV and on-site support for businesses.' },
  { branch: 'ruwi', name: '', role: 'Sales Executive', dept: 'sales', bio: 'Helps you find the right product for the job.' },

  { branch: 'sohar', name: '', role: 'Branch Manager', dept: 'management', bio: 'Keeps the branch running smoothly, every day.' },
  { branch: 'sohar', name: '', role: 'Technician', dept: 'service', bio: 'Laptop, desktop and printer repairs.' },
  { branch: 'sohar', name: '', role: 'Sales Executive', dept: 'sales', bio: 'Helps you find the right product for the job.' },

  { branch: 'salalah', name: '', role: 'Branch Manager', dept: 'management', bio: 'Keeps the branch running smoothly, every day.' },
  { branch: 'salalah', name: '', role: 'Technician', dept: 'service', bio: 'Laptop, desktop and printer repairs.' },
  { branch: 'salalah', name: '', role: 'Sales Executive', dept: 'sales', bio: 'Helps you find the right product for the job.' },
];
