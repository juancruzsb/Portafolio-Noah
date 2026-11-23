// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			name: 'Tenor Sans',
			cssVariable: '--font-tenor',
			provider: fontProviders.google(),
			weights: [400],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
		{
			name: 'Jost',
			cssVariable: '--font-jost',
			provider: fontProviders.google(),
			weights: ['100 900'],
			styles: ['normal', 'italic'],
			fallbacks: ['sans-serif'],
		},
		{
			name: 'Caveat',
			cssVariable: '--font-caveat',
			provider: fontProviders.google(),
			weights: ['400 700'],
			styles: ['normal'],
			fallbacks: ['cursive'],
		},
	],
});
