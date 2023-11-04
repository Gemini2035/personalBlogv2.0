<!--
 * @Date: 2023-10-31 15:44:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-04 15:33:19
 * @FilePath: /MyBlog_vue/src/components/home/self_part.vue
-->
<script lang="ts" setup>
import { computed, ref } from 'vue';

const isActive = ref(true);
</script>

<template>
    <div class="self-container">
        <div class="title-box" @mouseover="isActive = false" :class="isActive? '' : 'small'">
            <p class="title">Carloss</p>
        </div>
        <div class="content-box" :class="isActive? '' : 'large'">111</div>
    </div>
</template>

<style lang="less" scoped>
* { transition: 0.6s ease-in-out; }
.self-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    .title-box {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
            font-size: 24.5rem;
            font-weight: bold;
        }
    }
    .title-box.small {
        width: 20%;
        .title {
            transform: rotate3d(0, 0, 1, -90deg);
            font-size: 12rem;
            color: rgba(210, 0, 60, 1 );
        }
    }
    .content-box {
        background-color: rgba(256, 0, 0, 0.3);
        width: 0;
    }
    .content-box.large {
        border-left: 1px solid;
        width: calc(80% - 1px);
    }
}
</style>