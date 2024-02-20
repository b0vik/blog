<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="https://b0vik.dev/">home</a>
		</li>
		<li>
			<a href="https://wetdry.world/@max">fedi</a>
		</li>
        <li>
            <a href="https://github.com/b0vik">github</a>
        </li>
		<li>
			<a href="/rss.xml" target="_blank">rss</a>
		</li>
	</ul>
</nav>

<style>
    .title {
        /* margin-block: var(--size-7); */
        font-size: var(--font-size-fluid-5);

    }
	nav {
		padding-block: var(--size-7);
        font-family: var(--font-sans);

	}

	.links {
		/* margin-block: var(--size-7); */
        font-size: var(--font-size-fluid-5);

	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 1px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
