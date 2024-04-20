<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Card from '$lib/components/Card.svelte';

	const cards = [
		{
			title: 'Wellmore of Daniel Island',
			price: '$800 per month',
			imageUrl: 'https://well-more.com/wm/images/hero/webp/nobadge-wlx-hero.webp'
		},
		{
			title: 'Wellmore of Daniel Island',
			price: '$800 per month',
			imageUrl: 'https://well-more.com/wm/images/hero/webp/nobadge-wlx-hero.webp'
		},
		{
			title: 'Wellmore of Daniel Island',
			price: '$800 per month',
			imageUrl: 'https://well-more.com/wm/images/hero/webp/nobadge-wlx-hero.webp'
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
		margin-bottom: 40px;
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
		background-color: gray;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
	}
</style>
