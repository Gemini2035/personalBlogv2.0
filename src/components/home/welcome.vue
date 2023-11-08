<!--
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 19:38:59
 * @FilePath: /myBlog_versionVue/src/components/home/welcome.vue
-->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import NaviController from '@/store/naviController';

// setInterval函数有两个重载，一个是NodeJS.Timer返回类型, 一个是number返回类型。注意区别
let LoopTimer: number | undefined = undefined;

const timerClear = () => {
    window.clearInterval(LoopTimer);
}

onMounted(() => {
    LoopTimer = window.setInterval(() => NaviController.colorPicker(), 2100);
});

onUnmounted(() => {
    timerClear();
});
</script>
<template>
    <div :style="{ backgroundColor: NaviController.getBgColor() }">
        <h1 :style="{ color: NaviController.getFColor() }">Welcome!</h1>
    </div>
</template>

<style scoped>
div {
    position: relative;
    width: 100vw;
    height: 100vh;
    transition: 1.5s ease-in-out;
}

div h1 {
    position: absolute;
    margin: 0;
    font-size: 17rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.6s ease-in-out;
}

div h1:hover {
    cursor: pointer;
}
</style>../../store/naviController