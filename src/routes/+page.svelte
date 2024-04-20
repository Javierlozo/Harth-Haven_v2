<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Card from '$lib/components/Card.svelte';

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

		WELCOME TO<br /> TO HAVEN HEARTH
	</h1>

	<!-- <h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2> -->
</section>

<!-- SECTION 2 - FORM -->
<section class="section2">
	<h1>SECTION2</h1>
</section>

<!-- SECTION 3 - CONTACT -->
<section class="section3">
	<div class="cardComponent">
		{#each cards as card}
			<Card {...card} />
		{/each}
	</div>
</section>

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
	.section1 {
		background-color: azure;
	}
	.section2 {
		background-color: burlywood;
	}
	.section3 {
		display: flex;
	}
</style>
