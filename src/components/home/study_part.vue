<!--
 * @Date: 2023-10-31 22:01:03
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 17:51:46
 * @FilePath: /myBlog_versionVue/src/components/home/study_part.vue
-->
<script lang="ts" setup>
import AsideNavi from './studyPart/aside_navi.vue';
import SearchPart from './studyPart/search_part.vue';
import ArticlePart from './studyPart/article_part.vue';
</script>

<template>
    <div class="study-container">
        <AsideNavi />
        <SearchPart />
        <ArticlePart />
    </div>
</template>

<style lang="less" scoped></style>