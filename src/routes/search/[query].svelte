<script context="module">
	import { MOVIEDB_API_ROOT, MOVIEDB_API_KEY } from '../../config/config.js';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const query = params.query;
		const response = await fetch(
			`${MOVIEDB_API_ROOT}/3/search/movie?query=${query}&api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
		);

		if (response.ok) {
			const json = await response.json();
			return {
				status: response.status,
				props: {
					searchResult: json.results.map((movie) => ({
						id: movie.id,
						title: movie.title,
						poster: movie.poster_path ? `/w500${movie.poster_path}` : null,
						backdropPath: json.backdrop_path ? `/${json.backdrop_path}` : null,
						overview: movie.overview,
						releaseDate: movie.release_date,
						voteAverage: movie.vote_average,
						voteCount: movie.vote_count,
						status: movie.status
					}))
				}
			};
		} else {
			// throw new Error(`${response.status} ${response.statusText}`);
			return {
				status: response.status,
				props: {
					searchResult: []
				}
			};
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import MovieCard from '../../components/MovieCard.svelte';

	export let searchResult = [];
</script>

<svelte:head>
	<title>Moviedb | Search</title>
</svelte:head>

<h3>Search Results</h3>

<div
	class="list-movies"
	in:fly={{ y: 50, duration: 300, delay: 300 }}
	out:fly={{ y: 50, duration: 300 }}
>
	{#if searchResult.length > 0}
		{#each searchResult as movie}
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
	.list-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 2rem;
	}
</style>
