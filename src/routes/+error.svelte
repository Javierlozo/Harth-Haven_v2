<script>
	import { page } from '$app/stores';
</script>

<body>
	<div class="error-container">
		<h1 class="error-code">404</h1>
		<h1>{$page.error.message}</h1>
		<p class="error-message">Oops! Something went wrong.</p>
	</div>
</body>

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		background-color: #282c35;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.error-container {
		text-align: center;
	}

	.error-code {
		font-size: 10em;
		margin: 0;
		color: #f56565; /* Red color */
	}

	.error-message {
		font-size: 1.5em;
		margin-bottom: 40px;
	}
</style>
