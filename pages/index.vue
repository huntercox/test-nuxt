<template>
	<p>There are {{ data?.pages?.length || 0 }} ships.</p>
</template>
<script lang="ts" setup>
const query = gql`
  query pages($limit: Int!) {
    pages(limit: $limit) {
      pageId
      title
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)
</script>