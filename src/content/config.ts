import { defineCollection, z } from 'astro:content';

const prayerSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  type: z.enum(['Stotra', 'Aarti', 'Mantra', 'Shloka']),
  icon: z.string().default('ॐ'),
  deity: z.array(z.string()).default([]),
  festivals: z.array(z.string()).default([]),
  aliases: z.array(z.string()).default([]),
  language: z.array(z.string()).default(['Sanskrit']),
  textAlign: z.enum(['left', 'center']).default('left')
});

export const collections = {
  stotra: defineCollection({ type: 'content', schema: prayerSchema }),
  aarti: defineCollection({ type: 'content', schema: prayerSchema }),
  'mantra-shloka': defineCollection({ type: 'content', schema: prayerSchema })
};
