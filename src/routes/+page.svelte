<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Card from '$lib/components/Card.svelte';
	import FilterModal from '$lib/components/FilterModal.svelte';
	import filter from '$lib/images/filter-32.png';
	import { onMount } from 'svelte';

	// Modal
	let showModal = false;

	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	let selectedTrainee = {};

	const cards = [
		{
			id: '657483434',
			title: 'Wellmore of Daniel Island',
			price: '$800 per month',
			imageUrl: 'https://well-more.com/wm/images/hero/webp/nobadge-wlx-hero.webp'
		},
		{
			id: '348694',
			title: 'Ashley Gardens Assisted Living & Memory Care',
			price: '$1,000 per month',
			imageUrl:
				'https://lh5.googleusercontent.com/p/AF1QipPm0OFIzRvGBUe3kxrN1WquY_NVlLrBxpD8wnEr=w260-h175-n-k-no'
		},
		{
			id: '234553',
			title: 'Evergreen Residential Care',
			price: '$950 per month',
			imageUrl:
				'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=zqTImEOc2DRRIu39yKI-tg&cb_client=search.gws-prod.gps&yaw=347.26736&pitch=0&thumbfov=100&w=260&h=175'
		}
	];
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
	<div class="dropdownBar">
		{#each [selectedTrainee] as item, index}
			<div class="dropdown">
				<button class="dropdown1" on:click={() => toggleDropdown()}>
					<div>{index === 0 ? item.name : item}</div>
				</button>
				{#if isOpen}
					<div class="dropdown-content">
						{#if index === 0}
							{#each trainees as trainee}
								<button class="dropdown-item" on:click={() => handleItemClick(trainee)}
									>{trainee.name}</button
								>
							{/each}
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<button class="filterButton" on:click={() => (showModal = true)}>
		<img src={filter} alt="Welcome" height="30px" />
		<div>Filters</div>
	</button>
</section>

<!-- SECTION 3 - CONTACT -->
<section class="section3">
	<div class="cardComponent">
		{#each cards as card}
			<Card {...card} />
		{/each}
	</div>
</section>

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
	.dropdown1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-radius: 10px;
		padding: 10px;
		background-color: white;
		color: #666666;
		width: 250px;
		font-weight: bold;
		@apply relative;
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
