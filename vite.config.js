import { createVuePlugin } from 'vite-plugin-vue2'

export default {
    plugins: [createVuePlugin()],
    server: {
        watch: {
            usePolling: true,
        }
    },
}