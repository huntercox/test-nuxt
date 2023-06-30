// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		// '@/assets/css/main.css',
		'@/assets/scss/main.scss'
	],
	modules: [
		'@nuxt/devtools',
		'nuxt-graphql-client',
		'@nuxtjs/apollo',
	],
	runtimeConfig: {
		public: {
			GQL_HOST: process.env.GQL_HOST,
		}
	}
})
