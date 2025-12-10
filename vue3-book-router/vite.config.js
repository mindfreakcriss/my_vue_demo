import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//const { resolve } = require('path') vite 3.0 以下
import path from 'path'

console.log(__dirname)

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    // resolve: {
    //     alias: [
    //         {
    //             '@': path.resolve(__dirname,'src')
    //         }
    //     ],
    // },
    extensions: ['.js','.ts','.vue']
})
