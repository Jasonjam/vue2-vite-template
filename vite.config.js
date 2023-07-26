import { createVuePlugin } from 'vite-plugin-vue2'

export default {
    plugins: [createVuePlugin()],
    publicPath: "./",
    server: {
        watch: {
            usePolling: true,
        }
    },
}