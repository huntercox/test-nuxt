<template>
	<li class="project" :class="project.projectId" :key="project.uri">
		<nuxt-link :to="project.uri">{{ project.title }}</nuxt-link>
		<p><strong>Description: </strong>{{ project.projectDescription }}</p>
		<p><strong>Date: </strong>{{ project.projectDate }}</p>
		<p><strong>Employer: </strong>{{ project.projectEmployer }}</p>
		<p><strong>URL: </strong>{{ project.projectUrl }}</p>
	</li>
</template>
<script setup lang="ts">
const props = defineProps<{
	project: Record<'title' | 'uri' | 'projectId' | 'projectDescription' | 'projectUrl' | 'projectDate' | 'projectEmployer', string>
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