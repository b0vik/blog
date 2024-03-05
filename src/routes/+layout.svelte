<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import { page } from '$app/stores';  

	import '../app.css'
	
</script>

<div class="layout">
  <!-- Header -->
{#if $page.url.pathname === '/'}
  <Header />
{:else}
<a href="/" style="text-decoration: none; color: #d4be98;"><h3><span style="color: #ea6962">&lt;-</span> back to main page</h3></a>
{/if}
	

	<main>
		<!-- Black hole for other content -->
		<slot />
	</main>

  <!-- Footer -->
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: 2rem;
	}

	main {
		padding-block: 4rem;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
