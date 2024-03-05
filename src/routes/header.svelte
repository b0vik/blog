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
    .title,.links {
        /* margin-block: var(--size-7); */
		font-family: var(--font-sans);
		color: #d0d0d0;


    }
	nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block:   0.8rem;
	padding-inline: 1rem;
    font-family: var(--font-sans);
    background-color: var(--bg2);
    width:  100%; /* Use viewport width */
    box-sizing: border-box;
    position: fixed; /* Optional: Use if you want the navbar to be fixed at the top */
    top:  0; /* Optional: Aligns the navbar at the top of the viewport */
    left:  0; /* Optional: Aligns the navbar to the left of the viewport */
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
			gap: 1.5rem;
			margin-block: 0;
		}
	}
</style>
