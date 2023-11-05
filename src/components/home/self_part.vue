<!--
 * @Date: 2023-10-31 15:44:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-06 02:35:18
 * @FilePath: /MyBlog_vue/src/components/home/self_part.vue
-->
<script lang="ts" setup>
import { computed, ref } from 'vue';
import SelfIntroController from '../../store/selfIntroController';
import InfoContent from './selfPart/info-content.vue';
import ContactContent from './selfPart/contact_content.vue';

let timer = false;
const activeClass = computed(() => { return SelfIntroController.getTitleIsVertical() ? 'more-content' : '' });
const activeMethod = () => {
    if (timer) return;
    SelfIntroController.setTitleIsVertical(true);
}
const clickMethod = () => {
    if (!SelfIntroController.getTitleIsVertical()) return;
    timer = true;
    SelfIntroController.setTitleIsVertical(false)
    window.setTimeout(() => timer = false, 2000);
}

// 滚动监听器
const scrollArea = ref<HTMLElement | null>(null);
let Timer: number | undefined = undefined;
const scorllMonitor = () => {
    if (Timer) clearTimeout(Timer);
    SelfIntroController.setScrollTop(scrollArea.value!.scrollTop);
    Timer = window.setTimeout(() => {
        const viewHeight: number = scrollArea.value!.clientHeight / componentsList.length;
        const index: number = Math.floor(SelfIntroController.getscrollTop() / viewHeight);
        scrollArea.value!.children[index].scrollIntoView({ behavior: 'smooth' });
        SelfIntroController.setScrollTop(0);
    }, 600);
}
const componentsList = [InfoContent, ContactContent];
</script>

<template>
    <div class="self-container" :class="activeClass">
        <div class="title-box" @mouseover="activeMethod">
            <p class="title" @click="clickMethod">Carloss</p>
        </div>
        <div class="content-box" @scroll="scorllMonitor" ref="scrollArea">
            <component v-for="(item, index) in componentsList" :is="item" :key="index" />
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.self-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;

    .title-box {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            font-size: 27vw;
            font-weight: bold;
            cursor: default;
        }
    }

    .content-box {
        width: 0;
    }
}

.self-container.more-content {
    .title-box {
        width: 20%;

        .title {
            transform: rotate3d(0, 0, 1, -90deg);
            font-size: 25vh;
        }
    }

    .content-box {
        padding-left: 0.5%;
        width: calc(80% - 1px);
        height: 100%;
        border-left: 1px solid #888;
        animation: 0.9s ease-in-out AppearAnimate;
        overflow-y: auto;
        overflow-x: hidden;

        @keyframes AppearAnimate {
            0% {
                margin-top: 100vh;
            }

            100% {
                margin-top: 0;
            }
        }
    }
}
</style>