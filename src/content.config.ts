import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const faq = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/data/faq"}),
    schema: z.object({
        order: z.number(),
        question: z.string(),
    })
});
const lore = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/data/lore"}),
    schema: z.object({
        order: z.number().optional(),
        title: z.string(),
        category: z.string(),
    })
});

const legals = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/data/legals"}),
    schema: z.object({
        title: z.string(),
    })
});

export const collections = {faq, lore, legals};