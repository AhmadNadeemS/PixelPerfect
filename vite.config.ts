import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(),tailwindcss()],
	server: {
		port: Number(process.env.PORT) || 3000,
	},
})
