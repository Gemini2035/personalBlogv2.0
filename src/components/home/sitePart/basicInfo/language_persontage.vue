<!--
 * @Date: 2023-11-08 16:46:18
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 19:31:38
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/language_persontage.vue
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
    <p class="title">语言占比 Language Persontage</p>
    <div class="bar-content">
        <div class="bar-box">
            <div v-for="item in SiteIntroController.getLanguageData()" :key="item.key" class="bar-item" @mouseenter="mouseEnterBehavior(item.key)" @mouseleave="setTimer">
                <div class="bar-container">
                    <div :style="{ height: item.persontage + '%' }" class="bar" />
                    <p class="persontage">{{ item.persontage + '%' }}</p>
                </div>
                <p class="identify">{{ item.name }}</p>
            </div>
        </div>
        <div class="tips-content">
            <template v-for="item in SiteIntroController.getTipsList()" :key="item.tipsEn">
                <Transition mode="out-in" name="fade">
                    <p v-show="item.key === hoverIndex">{{ item.tipsEn }}</p>
                </Transition>
            </template>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.title {
    margin: 1%;
    font-size: 200%;
    font-weight: bold;
    position: relative;
}
.title::before {
    content: '';
    position: absolute;
    top: 100%;
    width: 50%;
    border: 1px solid;
}

.bar-content {
    height: 100%;
    width: 100%;
    cursor: default;

    .bar-box {
        width: 75%;
        height: 60%;
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

            .persontage {
                font-weight: bold;
            }
            .bar {
                animation: HoverAnimate 1.5s ease-in-out infinite;
                @keyframes HoverAnimate {
                    50% { opacity: 0.5; }
                }
            }
            .identify {
                transform: translate3d(3%, 3%, 0);
                font-weight: bold;
            }
        }
    }
}

.tips-content {
    width: 100%;
    position: relative;

    p {
        width: 35vw;
        font-size: 120%;
        position: absolute;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
    }

    p::first-letter {
        font-size: 150%;
        font-weight: bold;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}</style>