import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
            '/images': 'src/assets/images',
            styles: path.resolve(__dirname, 'src/styles'),
            router: path.resolve(__dirname, 'src/router'),
            views: path.resolve(__dirname, 'src/views'),
            components: path.resolve(__dirname, 'src/components'),
            data: path.resolve(__dirname, 'src/data'),
            utils: path.resolve(__dirname, 'src/utils'),
            src: path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: path.resolve(pathSrc, 'components.d.ts'),
        }),
    ],
    // 配置前端服务地址和端口
    server: {
        host: 'localhost',
        port: 3000,
        // 是否开启 https
        https: false,
    },
})
