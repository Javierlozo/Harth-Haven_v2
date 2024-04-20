<!-- Card.svelte -->
<script>
	export let title = '';
	export let content = '';
	export let price = '';
	export let imageUrl = '';
	export let id = '';
</script>

<a href={id} class="card">
	<div class="card-image">
		<img src={imageUrl} alt={title} class="image" />
	</div>
	<div class="card-title">
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
</a>

<style>
	.card {
		text-decoration: none;
		color: inherit;
		width: 100%; /* Ensure the entire card is clickable */
	}

	.card-image {
		width: 400px;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		background-color: white;
		border: 1px solid #e8e8e8;
		border-radius: 8px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
		overflow: hidden; /* Ensure the image doesn't overflow */
	}

	.image {
		width: 100%; /* Make the image occupy the entire width of its container */
		height: 100%; /* Make the image occupy the entire height of its container */
		object-fit: cover; /* Ensure the image covers the entire space */
	}

	.card-title {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		gap: 5px;
	}
</style>
