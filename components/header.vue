<template>
	<div>
		<header class="header">
			<div class="container">
				<nav class="header__nav">
					<ul>
						<li>
							<NuxtLink to="/">Home</NuxtLink> |
						</li>
						<li>
							<NuxtLink to="/about">About</NuxtLink> |
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

		&__nav {
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
				display: flex;
				justify-content: flex-end;
				li {
					a {
						color: #fff;
						text-decoration: none;
					}
				}
			}

		}
	}
</style>