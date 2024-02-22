import adapter from "svelte-adapter-bun";
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from 'mdsvex';
import { getHighlighter } from 'shiki';
import rehypeMathjax from 'rehype-mathjax';
// import remarkMath from 'remark-math';


/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx'],
	rehypePlugins: [rehypeMathjax],
	// remarkPlugins: [remarkMath],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript']
			})
			await highlighter.loadLanguage('javascript', 'typescript')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
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
