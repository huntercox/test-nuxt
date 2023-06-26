<template>
	<div>
		<header class="header">
			<div class="container">
				<nav class="header__nav">
					<ul>
						<li>
							<NuxtLink to="/">Home</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about">About</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	</div>
</template>

<style scoped>
	.header {
		background-color: #111555;
		color: #fff;
	}
	.header__nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: flex-end;
	}
	.header__nav ul li {
		padding: 10px;
	}
	.header__nav ul li a {
		color: #fff;
		text-decoration: none;
	}
</style>