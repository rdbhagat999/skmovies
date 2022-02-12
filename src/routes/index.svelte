<script context="module">
	import { MOVIEDB_API_ROOT, MOVIEDB_API_KEY } from '../config/config.js';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const response = await fetch(
			`${MOVIEDB_API_ROOT}/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=1`
		);

		if (response.ok) {
			const json = await response.json();
			return {
				status: response.status,
				props: {
					popularMovies: json.results.map((movie) => ({
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
					popularMovies: []
				}
			};
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import PopularMovies from '../components/PopularMovies.svelte';

	export let popularMovies = [];
</script>

<svelte:head>
	<title>Moviedb | Home</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ y: 50, duration: 300 }}>
	<PopularMovies {popularMovies} />
</section>
