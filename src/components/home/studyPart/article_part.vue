<!--
 * @Date: 2023-11-22 17:45:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 21:55:53
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/article_part.vue
-->
<script lang="ts" setup>
import StudyController from '@/store/studyController';

</script>

<template>
    <div class="airticle-container" :class="{ 'little': StudyController.getSearchState() }" @click="StudyController.setSearchState(false)">
        <div>{{ StudyController.getMenuNum() }}</div>
    </div>
</template>

<style lang="less" scoped>
* { transition: 0.6s ease-in-out; }
.airticle-container {
    width: 100%;
    margin-left: auto;
}

.airticle-container.little {
    width: 80%;
}
</style>