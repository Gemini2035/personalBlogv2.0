<!--
 * @Date: 2023-11-10 17:28:37
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-10 19:09:30
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basicInfo/structure.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
</script>

<template>
    <div class="structure-container">
        <p class="title">Build Tools 构建工具</p>
        <div class="tool-container">
            <div v-for="item in SiteIntroController.getBuildToolList()" :key="item.href" class="tool-item">
                <a :href="item.href" target="_blank">
                    <img :src="item.imgUrl" :alt="item.name" title="前往官网">
                    <p>{{ item.name }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.structure-container {
    width: 100%;
    height: 100%;

    .title {
        font-size: 200%;
        font-weight: bold;
        min-width: 360px;
        margin: 0;
        margin-right: 1%;
        text-align: right;
    }

    .tool-container {
        width: 100%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 5%;

        .tool-item {
            width: calc(100% / 3);
            text-align: center;

            a {
                text-decoration: none;

                img {
                    width: 40%;
                    height: auto;
                }

                p {
                    font-size: 150%;
                    font-weight: bold;
                    color: #000;
                }

            }

            a:hover {
                img {
                    animation: HoverAnimate 1.2s ease-in-out infinite;

                    @keyframes HoverAnimate {
                        50% {
                            transform: translate3d(0, -5px, 0);
                        }
                    }
                }
            }
        }
    }
}</style>