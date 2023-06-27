<template>
	<li class="project" :class="project.projectId" :key="project.uri">
		<nuxt-link :to="project.uri">{{ project.title }}</nuxt-link>
	</li>
</template>
<script setup lang="ts">
const props = defineProps<{
	project: Record<'title' | 'uri' | 'projectId', string>
}>();

</script>
<style scoped lang="scss">
.project {
	text-align: center;
	padding: 20px;
	background-color: #111555;
	color: #fff;
}
</style>