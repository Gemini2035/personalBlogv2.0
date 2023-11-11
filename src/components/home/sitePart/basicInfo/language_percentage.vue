<!--
 * @Date: 2023-11-08 16:46:18
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-11 15:53:04
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basicInfo/language_percentage.vue
-->
<script lang="ts" setup >
import { onMounted, onUnmounted, ref } from 'vue';
import SiteIntroController from '@/store/siteIntroController';
const hoverIndex = ref(0);
let Timer: number | undefined = undefined;

const setTimer = () => {
    Timer = window.setInterval(() => {
        hoverIndex.value = (hoverIndex.value + 1) % SiteIntroController.getLanguageData().length;
    }, 3000);
}

const mouseEnterBehavior = (target: number) => {
    clearInterval(Timer);
    hoverIndex.value = target;
}

onMounted(() => { setTimer(); })

onUnmounted(() => { clearInterval(Timer); })
</script>

<template>
    <div class="percentage-container">
        <div class="bar-content">
            <div class="tips-content">
                <template v-for="item in SiteIntroController.getTipsList()" :key="item.tipsEn">
                    <Transition mode="out-in" name="fade">
                        <p v-show="item.key === hoverIndex">{{ item.tipsEn }}</p>
                    </Transition>
                </template>
            </div>
            <div class="bar-skeleton">
                <div class="bar-box">
                    <div v-for="item in SiteIntroController.getLanguageData()" :key="item.key" class="bar-item"
                        @mouseenter="mouseEnterBehavior(item.key)" @mouseleave="setTimer">
                        <div class="bar-container">
                            <div :style="{ height: item.percentage + '%' }" class="bar" />
                            <p class="percentage">{{ item.percentage + '%' }}</p>
                        </div>
                        <p class="identify">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="title">Language percentage 语言占比</p>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
    cursor: default;
}

.percentage-container {
    width: 100%;
    height: 100%;
    position: relative;

    .tips-content {
        width: 50%;
        position: relative;

        p {
            width: 90%;
            font-size: 120%;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate3d(0%, -50%, 0);
        }

        p::first-letter {
            font-size: 150%;
            font-weight: bold;
        }
    }

    .bar-content {
        height: 100%;
        width: 100%;
        display: flex;

        .bar-skeleton {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .bar-box {
                width: 80%;
                height: 80%;
                display: flex;
                justify-content: center;
                margin: auto;

                .bar-item {
                    width: 25%;
                    height: 100%;
                    text-align: center;

                    .bar-container {
                        width: 100%;
                        height: 80%;
                        display: flex;
                        flex-direction: column-reverse;
                        align-items: center;

                        .bar {
                            border: 1px solid;
                            width: 0;
                        }

                        border-bottom: 1px solid;
                    }
                }

                .bar-item:hover {
                    cursor: pointer;

                    .percentage {
                        font-weight: bold;
                    }

                    .bar {
                        animation: HoverAnimate 1.5s ease-in-out infinite;

                        @keyframes HoverAnimate {
                            50% {
                                opacity: 0.5;
                            }
                        }
                    }

                    .identify {
                        transform: translate3d(3px, 3px, 0);
                        font-weight: bold;
                    }
                }
            }
        }
    }


    .title {
        font-size: 200%;
        font-weight: bold;
        position: absolute;
        min-width: 360px;
        bottom: 0;
        margin: 0;
        right: 1%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>