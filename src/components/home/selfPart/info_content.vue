<!--
 * @Date: 2023-11-04 20:29:02
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 19:39:42
 * @FilePath: /myBlog_versionVue/src/components/home/selfPart/info_content.vue
-->
<script lang="ts" setup>
import SelfIntroController from '@/store/selfIntroController';
</script>

<template>
    <div class="info-content">
        <div class="info-list">
            <div v-for="item in SelfIntroController.getInfoList()" class="info-item" :key="item.key">
                <div class="content-box">
                    <p class="title-text">{{ item.title }}</p>
                    <p class="titleEn-text">{{ item.titleEn }}</p>
                    <p class="content-text">{{ item.content }}</p>
                </div>
            </div>
        </div>
        <div class="img-container">
            <a v-for="item in SelfIntroController.getInfoImgList()" :key="item.href" :href="item.href" target="_blank">
                <img :src="item.imgUrl" alt="placeholder img" title="显示源网站">
            </a>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.info-content {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 3%;
    background-color: #fff;

    .info-list {
        width: 100%;
        height: 40%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;

        .info-item {
            font-family: Mier B;
            margin-bottom: 6%;
            width: calc(100% / 3);
            min-width: 225px;

            .content-box {
                margin: auto;
                width: 60%;
                opacity: 0.7;

                p {
                    margin: 0;
                    cursor: default;
                }

                .title-text {
                    font-size: 120%;
                    font-weight: bold;
                }

                .titleEn-text {
                    font-size: 120%;
                    font-weight: bold;
                }

                .content-text {
                    font-size: 200%;
                    max-width: 40vw;
                    position: absolute;
                    min-width: 225px;
                }
            }

            .content-box:hover {
                opacity: 1;
            }
        }
    }

    .img-container {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 1%;

        a {
            height: 100%;
            margin: 0 1%;

            img {
                height: 100%;
                width: auto;
            }

            img:hover {
                scale: 1.1;
            }
        }
    }
}
</style>