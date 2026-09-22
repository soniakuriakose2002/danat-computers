import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    /** Index number shown in the editorial list — controls order. */
    index: z.number(),
    title: z.string(),
    /** One line, shown beside the title in the index. */
    summary: z.string(),
    /** Longer intro for the service's own page. */
    intro: z.string(),
    /** Which procedural macro plate to render. See Plate.astro. */
    plate: z.enum([
      'solder',
      'roller',
      'lens',
      'patch',
      'pixel',
      'fan',
      'platter',
      'chassis',
    ]),
    /** Bullet list of what is actually covered. */
    covers: z.array(z.string()),
  }),
});

export const collections = { services };
