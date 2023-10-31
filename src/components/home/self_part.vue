<!--
 * @Date: 2023-10-31 15:44:47
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-31 15:45:30
 * @FilePath: /MyBlog_vue/src/components/home/self_part.vue
-->
<script lang="ts" setup>
import NaviController from '../../store/navi_controller';
</script>

<template>
    <div>{{ NaviController.getPageNum() }}</div>
</template>

<style lang="less" scoped></style>