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
		height: 70vh;
		border-radius: 1rem;
	}
	h2 {
		font-size: 1rem;
	}
	P {
		font-size: 0.85rem;
	}
	a {
		display: block;
		width: 100%;
	}
	.description {
		height: 5vh;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
</style>
