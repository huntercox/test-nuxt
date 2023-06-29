<script setup lang="ts">
const route = useRoute();
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
					projectDescription
					projectUrl
					projectDate
					projectEmployer
				}
			}
     }`
	},
	transform(data: any) {
		return data.data.projects.nodes as Array<Record<'title' | 'uri' | 'projectId' | 'projectDescription' | 'projectUrl' | 'projectDate' | 'projectEmployer', string>>;
	}
});
</script>

<template>
	<div>
		<h1>URI Page</h1>
		<pre>{{ data }}</pre>
	</div>
</template>
