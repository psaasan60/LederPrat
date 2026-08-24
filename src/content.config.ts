import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const home = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
	schema: z.object({
		heroEyebrow: z.string(),
		heroTitle: z.string(),
		heroHighlight: z.string(),
		heroText: z.string(),
		trialEyebrow: z.string(),
		trialTitle: z.string(),
		trialText: z.string(),
		servicesEyebrow: z.string(),
		servicesTitle: z.string(),
		servicesText: z.string(),
		services: z.array(
			z.object({
				title: z.string(),
				text: z.string(),
			}),
		),
		omEyebrow: z.string(),
		omTitle: z.string(),
		omImage: z.string(),
		testimonials: z
			.array(
				z.object({
					quote: z.string(),
					author: z.string(),
				}),
			)
			.optional(),
		kontaktTitle: z.string(),
		kontaktText: z.string(),
		email: z.string(),
		phone: z.string(),
	}),
});

export const collections = { home };
