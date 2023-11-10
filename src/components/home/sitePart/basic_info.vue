<!--
 * @Date: 2023-11-07 20:08:39
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-09 00:09:18
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basic_info.vue
-->
<script lang="ts" setup>
// 上线时间 使用语言 语言占比 左右2:1 左上下1:1
import LanguagePersontage from './basicInfo/language_persontage.vue';
import Timeline from './basicInfo/timeline.vue';
</script>

<template>
    <div class="basic-container">
        <div class="left-part">
            <div class="time-content">
                <Timeline />
            </div>
            <div class="structure-content"></div>
        </div>
        <div class="right-part">
            <LanguagePersontage />
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.basic-container {
    width: 100%;
    height: 100%;
    display: flex;

    .left-part {
        width: 60%;
        height: 100%;

        .time-content {
            width: 100%;
            height: 60%;
            position: relative;
        }

        .structure-content {
            width: 100%;
            height: calc(40% -1px);
            border-top: 1px solid;
        }
    }

    .right-part {
        width: calc(40% - 1px);
        height: 100%;
        border-left: 1px solid;
    }
}
</style>