// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'@/assets/scss/main.scss'
	],
	modules: [
		'@nuxt/devtools',
		'@nuxtjs/apollo',
	],
	apollo: {
		autoImports: true,
		authType: 'Bearer',
		authHeader: 'Authorization',
		tokenStorage: 'cookie',
		proxyCookies: true,
		clients: {
			default: {
				httpEndpoint: 'http://huntercoxdev.local/graphql'
			}
		}
	},
	runtimeConfig: {
		public: {
			GQL_HOST: process.env.GQL_HOST,
		}
	},
})
