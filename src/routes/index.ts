/*
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-31 15:50:08
 * @FilePath: /MyBlog_vue/src/routes/index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue'),
            children: [
                { path: '', redirect: '/home/self_introduction' },
                { path: 'self_introduction', name: 'selfPart', component: () => import('../components/home/self_part.vue') }
            ]
        }
    ]
})

export default router