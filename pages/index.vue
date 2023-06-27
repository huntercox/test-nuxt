<template>
	<div>
		<div class="container">
			<h1>Home</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, suscipit accusamus, molestiae nemo cumque
				labore,
				modi praesentium non fugiat asperiores ut dolore. Fugit voluptatibus voluptates, molestias labore voluptate et
				commodi?</p>

			<!-- <pre>{{ data }}</pre>> -->
			<div class="projects">
				<Project v-for="project in data" :key="project.uri" :project="project" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
	method: 'get',
	query: {
		query: `
     query NewQuery {
			projects(where: {status: PUBLISH}) {
				nodes {
					title
					uri
					projectId
				}
			}
     }`
	},
	transform(data) {
		return data.data.projects.nodes as Array<Record<'title' | 'uri' | 'projectId', string>>;
	}
});
</script>