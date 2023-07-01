// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: [
		'@/assets/scss/main.scss'
	],
	modules: [
		'@nuxt/devtools',
		'@nuxtjs/apollo'
	],
	apollo: {
		clients: {
			default: {
				httpEndpoint: 'http://huntercoxdev.local/graphql'
			}
		},
	},
	runtimeConfig: {
		public: {
			GQL_HOST: process.env.GQL_HOST,
		}
	},
})
