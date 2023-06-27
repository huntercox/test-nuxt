<template>
	<footer class="footer">
		<div class="container">
			<p class="footer__link">
				<NuxtLink to="/">Home</NuxtLink>
			</p>
		</div>
	</footer>
</template>

<style scoped>
	.footer {
		background-color: #111555;
		color: #fff;
	}
	.footer .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer__link {
		padding:2px 10px;
	}
	.footer__link a {
		color: #fff;
		text-decoration: none;
	}
	</style>