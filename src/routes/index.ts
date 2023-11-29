/*
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-20 19:01:19
 * @FilePath: /myBlog_versionVue/src/routes/index.ts
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
                { path: '', name: 'emptyChild', redirect: '/home/self_introduction' },
                { path: 'self_introduction', name: 'selfPart', component: () => import('../components/home/self_part.vue') },
                { path: 'site_introduction', name: 'sitePart', component: () => import('../components/home/site_part.vue') },
                { path: 'study_log', name: 'studyLog', component: () => import('../components/home/study_part.vue') },
                { path: 'essay_detail', name: 'essayDetail', component: () => import('../components/home/essay_detail.vue') }
            ]
        }
    ]
});

export default router