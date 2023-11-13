<!--
 * @Date: 2023-10-31 21:06:49
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-14 01:17:42
 * @FilePath: /myBlog_versionVue/src/components/home/site_part.vue
-->
<script lang="ts" setup>
import { ref } from 'vue';
import BasicInfo from './sitePart/basic_info.vue';
import ToolInfo from './sitePart/tool_info.vue';
import ContributorInfo from './sitePart/contributor_info.vue';
import SiteIntroController from '@/store/siteIntroController';
import NameWall from './sitePart/name_wall.vue';

const componentsList = [{ component: BasicInfo, name: 'basicInfo' }, { component: ToolInfo, name: 'toolInfo' }, { component: ContributorInfo, name: 'contributorInfo' }, { component: NameWall, name: 'nameWall' }];
// 站点基本信息(上线时间 使用语言 语言占比) 辅助工具 贡献者
let Timer: number | undefined = undefined;
let monitorForbidden = false;
const siteContainer = ref<HTMLElement | null>(null);
const scrollMonitor = async () => {
    SiteIntroController.setGlobalScrollTop(siteContainer.value!.scrollTop);
    if (monitorForbidden) return;
    clearTimeout(Timer);
    Timer = window.setTimeout(() => scrollBehavior(), 600);
}
const scrollBehavior = () => {
    const windowHeight = window.innerHeight;
    const scrolltop = SiteIntroController.getGlobalScrollTop();
    const index = Math.floor(scrolltop / windowHeight + 0.6);
    if ( index < 0 || index > 2) return;
    monitorForbidden = true;
    document.getElementById(componentsList[index].name)!.scrollIntoView({ behavior: 'smooth' });
    window.setTimeout(() => monitorForbidden = false, 600);
}
</script>

<template>
    <div class="site-container" @scroll="scrollMonitor" ref="siteContainer">
        <component v-for="(item, index) in componentsList" :is="item.component" :key="index" :id="item.name" />
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.site-container {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    transform-style: preserve-3d;
    perspective: 100px;
}
</style>