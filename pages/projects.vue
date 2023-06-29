<template>
	<div class="page">
		<div class="container">
			<h1>Projects</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, suscipit accusamus, molestiae nemo cumque
				labore,
				modi praesentium non fugiat asperiores ut dolore. Fugit voluptatibus voluptates, molestias labore voluptate et
				commodi?</p>

			<!-- <pre>{{ data }}</pre>> -->
			<div class="projects__wrap">
				<h2>My Projects:</h2>
				<ul class="projects">
					<Project v-for="project in data" :key="project.uri" :project="project" />
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(process.env.GQL_HOST, {
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

<style scoped lang="scss">
.projects {
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	margin: 20px 0;
	list-style-type: none;

	.project {
		width: 33%;
	}
}
</style>