<script>
	import MovieCard from './MovieCard.svelte';
	export let popularMovies = [];
</script>

<h3>Popular Movies</h3>

<div class="popular-movies">
	{#if popularMovies.length > 0}
		{#each popularMovies as movie}
			<MovieCard {movie} />
		{/each}
	{:else}
		<p>No movies found</p>
	{/if}
</div>

<style>
	h3 {
		padding: 0 1rem;
		margin: 1rem 0;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 2rem;
		margin: 1rem 0;
	}
</style>
