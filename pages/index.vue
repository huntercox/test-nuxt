<template>
	<div>
		<div class="container">
			<h1>Home</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, suscipit accusamus, molestiae nemo cumque
				labore, modi praesentium non fugiat asperiores ut dolore. Fugit voluptatibus voluptates, molestias labore
				voluptate et commodi?</p>

			<pre>There are {{ data?.pages?.length || 0 }} pages.</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
const query = gql`
  query getPages {
		pages {
			nodes {
				title
				content
				pageId
				uri
			}
		}
	}
`

</script>