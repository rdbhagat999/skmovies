<script context="module">
	import { MOVIEDB_API_ROOT, MOVIEDB_API_KEY } from '../../config/config.js';
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch, params }) {
		const id = params?.id;

		const response = await fetch(
			`${MOVIEDB_API_ROOT}/3/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`
		);
		const json = await response.json();

		if (response.ok) {
			return {
				props: {
					movie: {
						id: json.id,
						title: json.title,
						poster: json.poster_path ? `/w500${json.poster_path}` : null,
						backdropPath: json.backdrop_path ? `/${json.backdrop_path}` : null,
						overview: json.overview,
						releaseDate: json.release_date,
						voteAverage: json.vote_average,
						voteCount: json.vote_count,
						status: json.status
					}
				}
			};
		} else {
			if (json.status_code === 34) {
				return {
					status: 404,
					error: new Error('The movie you requested could not be found.')
				};
			}
			return {
				status: 500,
				error: new Error('An internal server error has occurred.')
			};
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import MovieDetail from '../../components/MovieDetail.svelte';
	import Error from '../__error.svelte';
	export let movie = null;
	export let error = null;
</script>

<svelte:head>
	<title>Moviedb | {movie?.title}</title>
</svelte:head>

{#if movie}
	<div in:fly={{ y: 50, duration: 300, delay: 300 }} out:fly={{ y: 50, duration: 300 }}>
		<MovieDetail {movie} />
	</div>
{:else if error}
	<p>{error?.message}</p>
{:else}
	<p>Loading...</p>
{/if}
