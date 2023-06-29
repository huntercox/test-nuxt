<template>
	<div>
		<div class="container">
			<h1>Home</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, suscipit accusamus, molestiae nemo cumque
				labore, modi praesentium non fugiat asperiores ut dolore. Fugit voluptatibus voluptates, molestias labore
				voluptate et
				commodi?</p>
			<pre>{{ projects }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncGql({
	operation: 'Projects',
})
let projects = data;
</script>

<style scoped lang="scss">
.container {
	max-width: 800px;
	margin: 0 auto;
}
</style>