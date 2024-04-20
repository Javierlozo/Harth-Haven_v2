<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
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
	<h1>SECTION3</h1>
</section>

<section class="section4">
	<h1>SECTION4</h1>
	<!-- <Counter /> -->
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

	.welcome {
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
	}
	.section1 {
		background-color: azure;
	}
	.section2 {
		background-color: burlywood;
	}
	.section3 {
		background-color: gray;
	}
	.section4 {
		background-color: green;
	}
</style>
