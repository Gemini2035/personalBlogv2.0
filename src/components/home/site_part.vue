<!--
 * @Date: 2023-10-31 21:06:49
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-08 19:38:49
 * @FilePath: /myBlog_versionVue/src/components/home/site_part.vue
-->
<script lang="ts" setup>
import BasicInfo from './sitePart/basic_info.vue';
import ToolInfo from './sitePart/tool_info.vue';
import ContributorInfo from './sitePart/contributor_info.vue';

const componentsList = [BasicInfo, ToolInfo, ContributorInfo];
// 站点基本信息(上线时间 使用语言 语言占比) 辅助工具 贡献者
</script>

<template>
    <div class="site-container">
        <component v-for="(item, index) in componentsList" :is="item" :key="index" />
    </div>
</template>

<style lang="less" scoped>
* { transition: 0.6s ease-in-out;}
.site-container {
    // animation: AppearAnimate 0.6s ease-in-out;
    // @keyframes AppearAnimate {
    //     from { margin-top: 100%;}
    //     to { margin-top: 0; }
    // }
    width: 100%;
    height: 100%;
}
</style>