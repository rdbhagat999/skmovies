<script>
	import { goto } from '$app/navigation';

	let searchTxt = '';
	let query = '';

	function searchTxtChange(e) {
		query = searchTxt;
		searchTxt = '';
		if (query && query.trim().length > 0) {
			goto('/search/' + query);
		}
	}
</script>

<form class="search" on:submit|preventDefault|stopPropagation={searchTxtChange}>
	<input type="text" bind:value={searchTxt} name="search" id="search" placeholder="Search movie" />
	<button>Search</button>
</form>

<style>
	.search {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
	}
	button {
		background-color: #4caf50;
		color: white;
		padding: 0.5rem 1rem;
		border: none;
		cursor: pointer;
		font-weight: bold;
		border-radius: 10px;
	}
	input {
		width: 20%;
		padding: 0.5rem 1rem;
		border: none;
		border: 1px solid #4caf50;
		border-radius: 10px;
		margin-right: 5px;
	}
</style>
