import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['beton', 'baja', 'aspal', 'batuan']),
    unitBusinessName: z.string(),
    slug: z.string(),
    description: z.string(),
    datasheetUrl: z.string().nullable().optional(),
    sections: z.array(z.object({
      title: z.string(),
      items: z.array(z.object({
        name: z.string(),
        description: z.string().optional(),
      }))
    })),
    categoryName: z.string().optional(),
    standardReference: z.string().optional(),
    featuredSpec: z.string().optional(),
  })
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['beton', 'baja', 'aspal', 'batuan']),
    publishedAt: z.string(),
    readingTimeMinutes: z.number(),
    isDraftEducational: z.boolean().default(false),
    sniReference: z.string(),
    summary: z.string(),
    actionBadge: z.string().optional(),
    actionHeadline: z.string().optional(),
    actionDetails: z.string().optional(),
    actionCtaText: z.string().optional(),
    // Backward compatibility jika masih terbaca
    promoHeadline: z.string().optional(),
    promoBadge: z.string().optional(),
    promoDetails: z.string().optional(),
    promoCtaText: z.string().optional(),
  })
});

export const collections = { products, articles };
