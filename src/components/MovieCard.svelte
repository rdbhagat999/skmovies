<script>
	export let movie = null;
</script>

<div id={movie?.id} class="movie-card">
	<a sveltekit:noscroll sveltekit:prefetch href={`/movies/${movie?.id}`}>
		<img src={'https://www.themoviedb.org/t/p' + movie?.poster} alt={movie?.title} />
	</a>
	<div class="description">
		<h2>{movie?.title}</h2>
		<p>{movie?.releaseDate}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
		object-fit: cover;
		height: 35vh;
		border-radius: 1rem;
	}
	h2 {
		font-size: 0.8rem;
	}
	P {
		font-size: 0.75rem;
	}
	a {
		display: block;
		width: 100%;
	}

	.movie-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
	@media screen and (min-width: 992px) {
		img {
			height: 55vh;
		}
		h2 {
			font-size: 0.95rem;
		}
		P {
			font-size: 0.85rem;
		}
	}
	@media screen and (min-width: 1200px) {
		img {
			height: 65vh;
		}
	}
	@media screen and (min-width: 1400px) {
		img {
			height: 75vh;
		}
		h2 {
			font-size: 2.4rem;
		}
		P {
			font-size: 1.75rem;
		}
	}
</style>
