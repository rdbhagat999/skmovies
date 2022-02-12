<script context="module">
	export function load({ status, error }) {
		return {
			props: { status, error }
		};
	}
</script>

<script>
	export let status;
	export let error;

	// we don't want to use <svelte:window bind:online> here, because we only care about the online
	// state when the page first loads
	let online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if online}
	{#if error && error.message}
		<p class="error">{status}: {error.message}</p>
	{:else}
		<p class="error">Encountered a {status} error</p>
	{/if}
{:else}
	<h1>It looks like you're offline</h1>

	<p>Reload the page once you've found the internet.</p>
{/if}
