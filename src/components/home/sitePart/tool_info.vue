<!--
 * @Date: 2023-11-07 20:10:22
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-12 02:32:47
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/tool_info.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
</script>

<template>
    <div class="tool-container">
        <p class="title">主要援助者 Main Aid</p>
        <div class="main-container">
            <div v-for="item in SiteIntroController.getAidList()" class="aid-item" :key="item.href">
                <a :href="item.href">
                    <img :src="item.imgUrl" :alt="item.content">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-content">{{ item.content }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.tool-container {
    width: 100%;
    height: 100%;
    .title {
        font-size: 200%;
        font-weight: bold;
        min-width: 360px;
        margin: 0;
        margin-left: 1%;
    }
    .main-container {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 5%;

        .aid-item {
            width: calc(100% / 3);
            text-align: center;
            img {
                margin: auto;
                width: 30%;
                height: auto;
            }
            p {
                text-decoration:none
            }
        }
    }
}
</style>