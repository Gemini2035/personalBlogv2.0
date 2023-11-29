<!--
 * @Date: 2023-05-15 16:04:23
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-05 03:01:03
 * @FilePath: /MyBlog_vue/src/views/home.vue
-->
<script setup lang="ts">

import WellcomePart from '../components/home/welcome.vue';
import NaviController from '../store/naviController';
import Navi from '../components/navi/navigator.vue';

const changeToPage = (toPage: number) => {
    NaviController.setPageNum(toPage);
}

</script>

<template>
    <div class="container">
        <Transition name="transition" mode="in-out">
            <WellcomePart v-if="NaviController.getPageNum() === 0" @click="changeToPage(1)" />
            <div class="maintain-content" v-else>
                <Navi />
                <div class="divider" />
                <div class="content">
                    <router-view #="{ Component }">
                        <Transition name="slide" mode="out-in">
                            <component :is="Component" />
                        </Transition>
                    </router-view>
                </div>
            </div>
        </Transition>
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

        .divider {
            width: 100%;
            height: 3px;
        }

        .content {
            width: 100%;
            height: calc(95vh - 3px);
            overflow-y: auto;
        }
    }
}

.transition-leave-to {
    opacity: 0.2;
}

.transition-leave-active {
    transition: 0.6s ease-in-out;
}

.slide-enter-from {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: 0.3s ease-in-out;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
}

.slide-leave-to {
    opacity: 0;
}
</style>