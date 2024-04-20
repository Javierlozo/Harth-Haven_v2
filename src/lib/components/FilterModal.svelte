<script>
	import { goto } from '$app/navigation';
	export let showModal = false;
</script>

{#if showModal}
	<div class="modal">
		<div class="modal-content">
			<div class="title-report">Filters</div>
			<hr />
			<div class="title">Price range</div>
			<div>Price range</div>
			<div class="title">Top-tier homes</div>
			<div>Price range</div>
			<div class="title">Amenities</div>
			<div class="checkbox">
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
				<div class="checkbox-title">
					<input type="checkbox" id="amenity1" name="amenity1" />
					<label for="amenity1">Amenity 1</label><br />
				</div>
			</div>
			<div class="title">Accessibility features</div>
			<div>Price range</div>
			<div class="title">Languages</div>
			<div>Price range</div>
			<div class="flex">
				<button on:click={() => (showModal = false)}> X </button>
				<button class="submitButton" on:click={() => (showModal = false)}> Submit </button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.modal-content {
		background-color: white;
		width: 600px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
	}
	.title-report {
		height: 10px;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		padding-top: 20px;
		padding-bottom: 10px;
		font-weight: bold;
	}
	.title {
		font-size: x-large;
		font-weight: bold;
		margin-top: 20px;
	}
	.flex {
		display: flex;
		justify-content: space-between;
		margin-top: 20px; /* Add margin between the buttons */
	}
	.cancelButton {
		color: white;
		height: 50px;
		width: 180px;
		background-color: #c85252;
		font-weight: bold;
		border-radius: 10px;
		border: none;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	}
	.submitButton {
		color: white;
		height: 50px;
		width: 180px;
		background-color: #81c769;
		font-weight: bold;
		border-radius: 10px;
		border: none;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	}
	/* Increase checkbox size */
	input[type='checkbox'] {
		transform: scale(1.5); /* Adjust the scale value as needed */
		margin-right: 10px; /* Add some space between the checkbox and text */
	}
	.checkbox {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
</style>
