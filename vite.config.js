import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base:'/webview',
	server: {
		host:'127.0.0.1',
		port: 4455,
		open: false,
	},
	preview: {
		port:4455,
		open:false,
	},
		test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: '/setupTests.js',
	},
	build: {
		outDir: 'build',
	},
})
