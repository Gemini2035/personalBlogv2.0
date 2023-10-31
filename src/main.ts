/*
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-29 20:16:05
 * @FilePath: /MyBlog_vue/src/main.ts
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index'

createApp(App).use(router).mount('#app')
