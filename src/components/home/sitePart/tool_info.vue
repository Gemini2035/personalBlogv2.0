<!--
 * @Date: 2023-11-07 20:10:22
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-12 19:47:31
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/tool_info.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
const classNameSet: ReadonlyArray<string> = ['left', 'middle', 'right'];

const getDirectionClass = (target: number) => { return classNameSet[target % 3]; }
</script>

<template>
    <div class="tool-container">
        <p class="title">主要援助者 Main Aid</p>
        <div class="main-container">
            <div v-for="(item, index) in SiteIntroController.getAidList()" class="aid-item" :key="item.href"
                :class="getDirectionClass(index)">
                <a :href="item.href" target="_blank">
                    <img :src="item.imgUrl" :alt="item.content" title="前往官网">
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
    .title {
        font-size: 250%;
        font-weight: bold;
        min-width: 360px;
        margin: 0;
        margin-left: 1%;
    }

    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 3%;
        width: 60%;

        .aid-item {
            width: calc(100% / 3);
            text-align: center;
            margin-bottom: 1%;

            a {
                text-decoration: none;
                width: 100%;
                display: flex;
                flex-direction: column;

                img {
                    width: 80%;
                    margin: auto;
                    height: auto;
                }

                p {
                    margin: 0;
                    color: var(--ms-black);
                }

                .item-title {
                    font-size: 200%;
                    font-weight: bold;
                }
            }
            a:hover {
                scale: 1.1;
            }
        }


        // .aid-item.left {
        //     a {
        //         align-items: end;
        //     }
        // }
        // .aid-item.middle {
        //     a {
        //         align-items: center;
        //     }
        // }
        // .aid-item.right {
        //     a {
        //         align-items: start;
        //     }
        // }
    }
}
</style>