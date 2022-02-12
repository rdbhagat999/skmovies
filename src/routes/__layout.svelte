<script>
	import '../global.css';
	import Nav from '../components/Nav.svelte';
	import Search from '../components/Search.svelte';
</script>

<svelte:head>
	<title>Moviedb | Home</title>
	<meta name="description" content="SvelteKit demo project" />
</svelte:head>

<Nav />
<Search />
<slot />
