<template>
	<header class="header bg-emerald-400">
		<div class="container">
			<Logo />
			<nav class="header__nav">
				<ul>
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/projects">Projects</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
@import '../assets/scss/_vars.scss';

.header {
	background-color: $blue;
	color: #fff;
	border: 2px solid #444;
	overflow: hidden;
}
.header .container {
	display: flex;
	justify-content: space-between;
	align-items: center;
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