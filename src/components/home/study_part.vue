<!--
 * @Date: 2023-10-31 22:01:03
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-21 18:21:44
 * @FilePath: /myBlog_versionVue/src/components/home/study_part.vue
-->
<script lang="ts" setup>
import StudyController from '@/store/studyController';
import AsideNavi from './studyPart/aside_navi.vue';
</script>

<template>
    <div class="study-container">
        <div class="maintain-container">{{ StudyController.getSideNavi() }}</div>
        <AsideNavi />
    </div>
</template>

<style lang="less" scoped></style>