<script>
	export let movie = null;
</script>

{#if movie}
	<div id={movie?.id} class="movie-details">
		<div class="img-container">
			<img
				src={'https://www.themoviedb.org/t/p/original' + movie?.backdropPath}
				alt={movie?.title}
			/>
		</div>

		<div class="txt-container">
			<h1>{movie?.title}</h1>
			<p class="overview">{movie?.overview}</p>
			<p><span>Release date:</span> {movie?.releaseDate}</p>
		</div>
	</div>
{:else}
	<p>Loading...</p>
{/if}

<style>
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		height: 75vh;
	}
	h1 {
		font-size: 1rem;
		padding: 1rem 0 0.5rem;
		margin: 0;
	}
	P {
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
	span {
		font-weight: bold;
	}
	.img-container,
	.txt-container {
		width: 100%;
	}
	.movie-details {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 1rem 0.5rem;
	}
	@media screen and (min-width: 992px) {
		h1 {
			font-size: 1.2rem;
		}
		P {
			font-size: 1rem;
		}

		.movie-details {
			margin: 1.5rem 12rem;
		}

		@media screen and (min-width: 1400px) {
			h1 {
				font-size: 2.4rem;
			}
			P {
				font-size: 1.75rem;
			}
			.movie-details {
				margin: 1.8rem 15rem;
			}
		}
	}
</style>
