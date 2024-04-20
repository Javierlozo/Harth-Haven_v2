<!-- Card.svelte -->
<script>
	export let title = '';
	export let content = '';
	export let price = '';
	export let imageUrl = '';
</script>

<div class="card">
	<img src={imageUrl} alt={title} class="w-full h-auto" />
	<div class="text-gray-400 text-4xl mt-1">
		{title}
	</div>
	<div class="text-gray-400 text-4xl mt-1">
		{price}
	</div>
	<div class="text-gray-400 text-4xl mt-1">
		{content}
	</div>
</div>

<style>
	.card {
		width: 200px;
		height: 250px;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		background-color: white;
		border: 1px solid #e8e8e8;
		border-radius: 8px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	}
	.titleCard {
		text-transform: uppercase;
		font-size: small;
	}
</style>
