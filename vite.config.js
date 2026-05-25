import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    server: {
        open: '/iman-schools.html'
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                schools: 'iman-schools.html',
                signin: 'google-signin-ar.html',
                success: 'iman-success.html'
            },
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // Split the swiper plugin library into a separate chunk to avoid a large chunk size on index.js
                        if (id.includes('swiper'))
                            return 'swiper';
                        return;
                    }
                }
            }
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
            },
        },
    },
})
