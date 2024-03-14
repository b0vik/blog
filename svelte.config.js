import adapter from "svelte-adapter-bun";
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import rehypeMathjax from 'rehype-mathjax';
import remarkMath from 'remark-math';
import fs from 'fs';

// const gruvboxDark = JSON.parse(fs.readFileSync('src/themes/shiki/gruvbox-dark.json', 'utf8'));



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx'],
	rehypePlugins: [rehypeMathjax],
	remarkPlugins: [remarkMath],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['dark-plus'],
				langs: ['javascript', 'typescript']
			})
			await highlighter.loadLanguage('javascript', 'typescript', 'shell', 'json', 'fish')
			// await highlighter.loadTheme(gruvboxDark);
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'dark-plus' }))
			return `{@html \`${html}\` }`
		}
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [vitePreprocess(), preprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};



export default config;
