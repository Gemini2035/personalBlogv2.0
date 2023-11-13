<!--
 * @Date: 2023-11-07 20:11:13
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-12 19:44:35
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/contributor_info.vue
-->
<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import SiteIntroController from '@/store/siteIntroController';

const topArea = ref<HTMLElement | null>(null);
const nameWallHeight = ref(0);
const resizeBehavior = () => nameWallHeight.value = topArea.value?.clientHeight || 0;
onMounted(() => {
    resizeBehavior();
    window.addEventListener('resize', () => resizeBehavior());
})
onUnmounted(() => window.removeEventListener('resize', () => resizeBehavior()))

// 名片墙移动相关

</script>

<template>
    <div class="contributor-container">
        <div class="top-area" ref="topArea">
            <p class="title">贡献者 Contributor</p>
            <div class="contributor-wrapper">
                <div class="contributor-item" v-for="item in SiteIntroController.getContributorList()" :key="item.avatar">
                    <a :href="item.href" target="_blank">
                        <img alt="用户头像" :src="item.avatar">
                        <div>
                            <h2>{{ item.nickName }}</h2>
                            <p>
                                代码贡献量: {{ item.percentage }}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- <div class="name-wall" :style="{ willChange: 'transform', height: `calc(92vh - ${nameWallHeight}px)`, transform: `translate3d(0, ${ transformPercentage }%, 0)` }">
            <p class="text">{{ wallString }}</p>
        </div> -->
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.contributor-container {
    width: 100%;

    .top-area {
        width: 100%;

        .title {
            font-size: 200%;
            font-weight: bold;
            min-width: 360px;
            margin: 0;
            text-align: center;
        }

        .contributor-wrapper {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 1%;

            .contributor-item {
                width: calc(100% / 3 - 6%);
                padding: 0 3%;

                a {
                    width: 80%;
                    display: flex;
                    margin: auto;
                    text-decoration: none;
                    justify-content: center;
                    align-items: center;
                    color: var(--ms-black);

                    img {
                        border: 1px solid var(--ms-black);
                        border-radius: 50%;
                        height: auto;
                        width: 30%;
                        margin-left: 5px;
                    }

                    div {
                        height: 75%;
                        overflow: hidden;
                        width: 70%;
                        margin: auto 0 auto 10px;
                        overflow-x: auto;

                        h2 {
                            margin: 0;
                            margin-left: 10px;
                            font-size: 200%;
                        }

                        p {
                            overflow-y: auto;
                            overflow-x: hidden;
                            padding-left: 10px;
                            padding-top: 10px;
                            font-weight: bold;
                            line-height: 1.5;
                            margin: 0;
                            font-size: 120%;
                        }

                    }
                }

                a:hover {
                    cursor: pointer;
                    opacity: 0.5;
                }

            }
        }
    }
}
</style>