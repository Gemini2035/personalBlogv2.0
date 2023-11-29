<!--
 * @Date: 2023-11-22 17:45:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-25 17:49:43
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/article_part.vue
-->
<script lang="ts" setup>
import ClickClass from '@/class/click_class';
import StudyController from '@/store/studyController';
import { ref, onMounted, computed } from 'vue';

// 文章展示
type EssayMenuType = { title: string, titleEn: string, pubdate: string, classify: 0, id: string };
const passageMenu = ref<Array<EssayMenuType>>();
onMounted(async () => passageMenu.value = await StudyController.getPassageMenu());
const showData = computed(() => {
    const index: number = StudyController.getMenuNum();
    if (index === -1) return passageMenu.value;
    return passageMenu.value!.filter(item => item.classify === index);
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
            else if (clickInfo.clickType === 'detail') console.log(clickInfo.clickParm)
            // TODO: 完善前往详情页面
            break;
        }
        catch { continue; }
    }
}
</script>

<template>
    <div class="airticle-container" :class="{ 'little': StudyController.getSearchState() }" @click="articleClickMonitor"
        :clickInfo="clickInfoFormat<void>('close')">
        <TransitionGroup name="list-animate">
            <div v-for="(item, index) in showData" :key="index" class="menu-item" :clickInfo="clickInfoFormat<string>('detail', item.id)">
                <p class="number">Passage {{ index + 1 }}</p>
                <div class="divider" />
                <p class="title">{{ item.title }}</p>
                <p class="title-en">{{ item.titleEn }}</p>
                <p class="date">{{ item.pubdate }}</p>
            </div>
        </TransitionGroup>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.airticle-container {
    width: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .menu-item {
        margin-bottom: 1%;
        text-align: center;

        p {
            margin-bottom: 0;
        }

        max-width: 90%;

        .number {
            font-size: 250%;
            font-weight: bold;
        }

        .divider {
            width: 0;
            height: 0;
            border: 0px solid var(--ms-black);
        }

        .title {
            font-size: 175%;
            letter-spacing: 5px;
            font-weight: bold;
            min-width: 300px;
        }

        .title-en {
            font-size: 150%;
            font-weight: bold;
            letter-spacing: 3px;
            margin: 0;
        }

        .date {
            font-size: 125%;
            margin-top: 1%;
            font-weight: bold;
        }
    }

    .menu-item:hover {
        cursor: pointer;

        .divider {
            border: 1px solid var(--ms-black);
            width: 100%;
        }
    }
}

.airticle-container.little {
    width: 80%;
}

.list-animate-move,
.list-anmate-enter-active,
.list-animate-leave-active {
  transition: all 0.5s ease;
}

.list-animate-enter-from,
.list-animate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-animate-leave-active {
  position: absolute;
}
</style>