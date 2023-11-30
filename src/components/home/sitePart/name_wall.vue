<!--
 * @Date: 2023-11-14 01:10:38
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-14 01:28:57
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/name_wall.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
</script>

<template>
    <div class="name-wall">
        <p class="text">{{ Array(10).fill(SiteIntroController.getContributorNameString()).join(' ') }}</p>
    </div>
</template>

<style lang="less" scoped>
.name-wall {
    width: 100%;
    min-height: 100%;
    margin: 1% auto 0 auto;
    background-color: var(--ms-black);
    color: var(--ms-white);
    position: relative;

    .text {
        overflow-x: hidden;
        overflow-y: hidden;
        word-break: break-all;
        font-weight: bold;
        width: 100%;
        height: 100%;
        font-size: 900%;
        line-height: 10rem;
        margin: 0;
    }
}
.name-wall::before {
    content: 'THE END';
    position: absolute;
    top: 101%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--ms-black);
    font-size: 200%;
    font-weight: bold;
}
</style>