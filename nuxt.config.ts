// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		// '@/assets/css/main.css',
		'@/assets/scss/main.scss'
	],
	modules: [
		'@nuxt/devtools',
	],
	runtimeConfig: {
		public: {
			wordpressUrl: 'http://plugin-testing.local/graphql'
		}
	}
})
