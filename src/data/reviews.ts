/**
 * CUSTOMER REVIEWS — real ones only.
 *
 * The "Trusted by" wall on /about renders straight from this array. It
 * is empty, so the wall is hidden. Add one entry per real review and it
 * appears; no code change, no flag to flip.
 *
 * ⚠ DO NOT WRITE ENTRIES HERE FROM IMAGINATION. These are shown with a
 * star rating and a source badge to people deciding whether to trust the
 * shop with their machine and their data. An invented review is a false
 * endorsement, and a plausible one is worse than an obvious one. If
 * there is nothing real to show, the wall staying hidden is the correct
 * outcome, not a gap to fill.
 *
 * WHERE TO GET THEM
 *   Google    Search "Danat Computer Supermarket" on Google Maps, open
 *             the Reviews tab. Copy the reviewer's name exactly as shown
 *             and the review text verbatim.
 *   Facebook  facebook.com/DanatCSOman → Reviews.
 *   In person A written note or WhatsApp message from a customer counts,
 *             with their permission. Set source: 'direct'.
 *
 * RULES
 *   - `text` is the customer's wording, not a tidied version of it.
 *     Leave their spelling and grammar alone.
 *   - `name` as they published it. If someone asked not to be named, use
 *     a first name or initials and say so to them first.
 *   - `rating` is what they actually gave. Do not round a 4 up.
 *   - `branch` only when you know which one they visited; omit otherwise
 *     rather than guessing.
 */
export interface Review {
  /** As the reviewer published it. */
  name: string;
  /** Stars they actually gave, 1–5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Their words, verbatim. */
  text: string;
  /** Where it was published — drives the badge on the card. */
  source: 'google' | 'facebook' | 'direct';
  /** Which branch, if known. */
  branch?: 'Ruwi' | 'Sohar' | 'Salalah';
  /** What the visit was for, if known. */
  service?: string;
}

export const reviews: Review[] = [
  /* Empty on purpose — see the warning above. Shape of an entry:
   *
   * {
   *   name: 'Ahmed Al Balushi',
   *   rating: 5,
   *   text: 'Fixed my laptop the same day and charged exactly what they quoted.',
   *   source: 'google',
   *   branch: 'Ruwi',
   *   service: 'Laptop repair',
   * },
   */
];

/** The wall renders only when there is something real in it. */
export const hasReviews = reviews.length > 0;
