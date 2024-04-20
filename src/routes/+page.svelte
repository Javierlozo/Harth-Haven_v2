<script>
	// @ts-nocheck

	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Card from '$lib/components/Card.svelte';
	import FilterModal from '$lib/components/FilterModal.svelte';
	import filter from '$lib/images/filter-32.png';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import { createSearchStore, searchHandler } from '$lib/stores/search';

	// Modal
	let showModal = false;

	// exports
	export let data;

	const searchProducts = data.homes.map((home) => ({
		...home,
		searchTerms: `${home.id} ${home.title} ${home.price}`
	}));

	const searchStore = createSearchStore(searchProducts);

	const unsubscribe = searchStore.subscribe((model) => {
		searchHandler(model);
	});

	$: filteredHomes = $searchStore.filtered;

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- SECTION 1 - ABOUT US -->
<section class="section1">
	<h1>
		<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span> -->

		WELCOME TO<br /> TO HEARTH HAVEN
	</h1>

	<!-- <h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2> -->
</section>

<!-- SECTION 2 - FORM -->
<section class="section2">
	<button class="filterButton" on:click={() => (showModal = true)}>
		<img src={filter} alt="Welcome" height="30px" />
		<div>Filters</div>
	</button>
</section>

<!-- SECTION 3 - CONTACT -->
<!-- <section class="section3">
	<div class="cardComponent">
		{#each data as card}
			<Card {...card} />
		{/each}
	</div>
</section> -->

<div class="p-5">
	<div class="flex items-center justify-between">
		<form>
			<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
				>Search</label
			>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						class="w-4 h-4 text-black"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
						><path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/></svg
					>
				</div>
				<input
					type="search"
					id="default-search"
					class="block w-96 p-2 pl-12 text-sm text-black border border-gray-300 rounded-3xl bg-white focus:ring-green-500 focus:border-green-500"
					placeholder="Search"
					required
					bind:value={$searchStore.search}
				/>
			</div>
		</form>
	</div>

	<div
		class="grid grid-cols-1 gap-5 content-evenly sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8"
	>
		{#each filteredHomes as home (home.id)}
			<button on:click={() => goto(`/${home.id}`)}>
				<Card {home} />
			</button>
		{/each}
	</div>
</div>

<FilterModal bind:showModal />

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h1 {
		width: 100%;
	}
	.cardComponent {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 20px;
	}
	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
	.section3 {
		display: flex;
		padding-top: 40px;
	}
	.filterButton {
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
		height: 50px;
		width: 100px;
		font-weight: bold;
		border: none;
		border-radius: 10px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		gap: 5px;
		transition: background-color 0.3s ease; /* Adding transition for smooth effect */
	}
	.filterButton:hover {
		background-color: lightgray; /* Change the background color on hover */
	}
	/* Media query for screens between 480px and 1200px */
	@media only screen and (min-width: 481px) and (max-width: 1300px) {
		.cardComponent {
			flex-direction: column;
			align-items: center;
		}
	}
	@media only screen and (max-width: 480px) {
		.cardComponent {
			flex-direction: column;
			align-items: center;
		}
	}
</style>
