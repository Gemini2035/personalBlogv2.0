<!--
 * @Date: 2023-11-04 20:29:02
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-06 03:35:10
 * @FilePath: /MyBlog_vue/src/components/home/selfPart/info-content.vue
-->
<script lang="ts" setup>
import SelfIntroController from '../../../store/selfIntroController';
</script>

<template>
    <div class="info-content" >
        <div v-for="item in SelfIntroController.getinfoList()" class="info-item" :key="item.key">
            <div class="content-box">
                <p class="title-text">{{ item.title }}</p>
                <p class="titleEn-text">{{ item.titleEn }}</p>
                <p class="content-text">{{ item.content }}</p>
            </div>
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
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    position: relative;
    background: url('src/assets/self/infoImg.svg') fixed 60% 50%;
    .info-item {
        font-family: Mier B;
        margin-bottom: 10%;
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

</style>