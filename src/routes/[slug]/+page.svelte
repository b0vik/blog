<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <!-- Title -->
	<hgroup>
		<h2>{data.meta.title}</h2>
		<h4>{data.meta.description}</h4>
		<p>published {formatDate(data.meta.date)}</p>
	</hgroup>

  <!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>

	

	<div class="comments">
		<h3>comments</h3>
		<script src="https://utteranc.es/client.js"
        repo="b0vik/blog"
        issue-term="pathname"
        theme="gruvbox-dark"
        crossorigin="anonymous"
        async>
</script>
	</div>
</article>

<style>
	title {
		/* max-inline-size: 60ch; */
		/* min-inline-size: 60ch; */
		max-inline-size: 90ch;
	}
	 article {
		/* max-inline-size: 768px; */
		/* min-inline-size: 60ch; */
		max-inline-size: 90ch;

		/* width: 1000px; */
		margin-inline: auto;
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	} 
/* 
	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	} */
</style>
