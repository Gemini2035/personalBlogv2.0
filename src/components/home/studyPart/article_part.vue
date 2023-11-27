<!--
 * @Date: 2023-11-22 17:45:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-25 17:49:43
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/article_part.vue
-->
<script lang="ts" setup>
import ClickClass from '@/class/click_class';
import StudyController from '@/store/studyController';
import { computed } from 'vue';

// 文章展示
const articalShow = computed(() => {
    const articleClassify: number = StudyController.getMenuNum();
    if (articleClassify === -1) return StudyController.getPassageMenu();
    return StudyController.getPassageMenu().filter(item => item.classify === articleClassify);
})

// 事件代理
type ClickType = 'close' | 'detail';
const clickInfoFormat = <T>(type: ClickType, target?: T) => { return new ClickClass<ClickType, T>(type, target).stringify(); }
const articleClickMonitor = (event: any) => {
    for (let everyNode of event.composedPath()) {
        try {
            const clickInfoString = everyNode.getAttribute('clickInfo');
            if (!clickInfoString) continue;
            const clickInfo: ClickClass<ClickType, string | number> = JSON.parse(clickInfoString);
            if (clickInfo.clickType === 'close') StudyController.setSearchState(false);
            
            break;
        }
        catch { continue; }
    }
}
</script>

<template>
    <div class="airticle-container" :class="{ 'little': StudyController.getSearchState() }" @click="articleClickMonitor" :clickInto="clickInfoFormat<void>('close')">
        <div>
            {{ articalShow }}
        </div>
    </div>
</template>

<style lang="less" scoped>
* { transition: 0.6s ease-in-out; }
.airticle-container {
    width: 100%;
    margin-left: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        background-color: yellow;
    }
}

.airticle-container.little {
    width: 80%;
}
</style>