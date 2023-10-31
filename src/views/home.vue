<!--
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-31 15:41:36
 * @FilePath: /MyBlog_vue/src/views/home.vue
-->
<script setup lang="ts">

import WellcomePart from '../components/home/welcome.vue';
import NaviController from '../store/navi_controller';
import Navi from '../components/navi/navigator.vue';

const changeToPage = (toPage: number) => {
    NaviController.setPageNum(toPage);
}

</script>

<template>
    <div class="container">
        <transition name="transition" mode="in-out">
            <WellcomePart v-if="NaviController.getPageNum() === 0" @click="changeToPage(1)" />
            <div class="maintain-content" v-else>
                <Navi />
                <router-view />
            </div>
        </transition>
    </div>
</template>

<style scoped lang="less">
.container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .maintain-content {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}

.transition-leave-to {
    opacity: 0.2;
}

.transition-leave-active {
    transition: 0.6s ease-in-out;
}
</style>