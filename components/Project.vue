<template>
	<div class="project" :class="`project--${project.projectId}`">
		<div class="container">
			<h1>Projects</h1>
			<ul>
				<li :class="project.projectId" :key="project.uri">
					<nuxt-link :to="project.uri">{{ project.title }}</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
	project: Record<'title' | 'uri' | 'projectId', string>
}>();

</script>