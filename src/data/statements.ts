/**
 * DANAT'S OWN WORDS — transcribed verbatim from the company's live site,
 * danatcomputers.com/page/about.
 *
 * ⚠ DO NOT EDIT THE PROSE. Not to tighten it, not to fix the grammar, not
 * to make the trading names agree. This is the company speaking about
 * itself and it is the only copy on this site that was not written here.
 * If it needs to change, it changes on their side first.
 *
 * ⚠ The three trading names below are theirs and disagree with each other
 * and with the rest of this site, which says "Danat Computers" throughout:
 *   "Danat Computer Supermarket"                 (about, mission)
 *   "Danat Computer Sales and Service Center"    (director's message)
 *   "Danat Group"                                (vision)
 * Flagged for Danat to settle; not silently normalised here.
 *
 * It lives in a data file rather than inline in about.astro because every
 * package so far has replaced that page wholesale. Copy kept here survives
 * the next one.
 */
export interface Statement {
  /** First word takes the accent, matching their own layout. */
  title: string;
  /** Pastel key; must be one of the --p-* pairs in Statements.astro. */
  tone: 'mint' | 'sky' | 'butter' | 'lilac';
  body: string;
}

export const statements: Statement[] = [
  {
    title: 'About Danat Computers',
    tone: 'mint',
    body:
      'For decades, Danat Computer Supermarket has been dedicated to serving the ' +
      'computer repair and sales needs of Oman customers. Our extensive experience ' +
      'in technology, coupled with a deep understanding of our community, sets us ' +
      'apart. With tenacity and passion, we handle everything. There’s no problem ' +
      'we can’t solve. Choose us for prompt, correct, and comprehensive solutions. ' +
      'At Danat Computer Supermarket, we pride ourselves on our commitment to ' +
      'excellence and customer satisfaction.',
  },
  {
    title: 'Director Message',
    tone: 'sky',
    body:
      'At Danat Computer Sales and Service Center, we’re dedicated to providing ' +
      'top-tier assistance in computer sales, printer servicing, CCTV installation, ' +
      'computer networking, and data recovery. With a team passionate about ' +
      'technology, we ensure your devices function flawlessly. Whether finding the ' +
      'perfect computer, securing your premises with cutting-edge CCTV systems, or ' +
      'recovering vital data, we’re here for you. Our commitment lies in delivering ' +
      'excellence, prompt service, and innovative solutions tailored to your needs. ' +
      'Trust us as your reliable tech partner, where your satisfaction is our ' +
      'utmost priority.',
  },
  {
    title: 'Our Mission',
    tone: 'butter',
    body:
      'At Danat Computer Supermarket, we take pride in our unwavering commitment to ' +
      'excellence and customer satisfaction. With a team of passionate and skilled ' +
      'professionals, we are dedicated to providing top-tier assistance in various ' +
      'areas, including computer sales, printer servicing, CCTV installation, ' +
      'computer networking, and data recovery.',
  },
  {
    title: 'Vision Statement',
    tone: 'lilac',
    body:
      'Our vision at Danat Group is to be a global leader in providing comprehensive ' +
      'and advanced technological solutions. We aspire to create a future where ' +
      'technology seamlessly integrates into every aspect of life, making it more ' +
      'efficient and enjoyable. By consistently innovating and adapting to emerging ' +
      'trends, we envision ourselves as pioneers in shaping the digital landscape. ' +
      'We are dedicated to fostering a culture of continuous improvement, pushing ' +
      'boundaries, and exceeding customer expectations. Through our global presence, ' +
      'we aim to be recognized as a symbol of trust and reliability, making a ' +
      'positive impact on societies and contributing to the progress of the world.',
  },
];
