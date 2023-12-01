<!--
 * @Date: 2023-11-22 17:45:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-25 17:49:43
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/article_part.vue
-->
<script lang="ts" setup>
import ClickClass from '@/class/click_class';
import router from '@/routes';
import StudyController from '@/store/studyController';
import EssayInfo from './essay_info.vue';
import ToTop from '@/components/common/toTop.vue';
import { ref, onMounted, computed, onUnmounted } from 'vue';

// 文章展示
type EssayMenuType = { title: string, titleEn: string, pubdate: string, classify: 0, id: string };
const passageMenu = ref<Array<EssayMenuType>>();
onMounted(async () => passageMenu.value = await StudyController.getPassageMenu());
const filterData = computed(() => {
    const index: number = StudyController.getMenuNum();
    if (index === -1) return passageMenu.value;
    return passageMenu.value?.filter(item => item.classify === index) || [];
})
// 分页处理
const ArticleContainerRef = ref<HTMLElement | null>(null);
const queryInfo = computed(() => { return StudyController.getQueryData() });
const showData = computed(() => { return filterData.value?.slice(0, ((queryInfo.value.page + 1) * queryInfo.value.size)); });
const isEnd = computed(() => { return showData.value?.length === filterData.value?.length; })
const reachBottom = () => {
    StudyController.setIsLoading(true);
    window.setTimeout(() => {
        StudyController.setQueryData();
        StudyController.setIsLoading(false);
    }, 600);
    showTop.value = true;
}
const scrollMonitor = (e: any) => {
    const containerHeight = document.body.clientHeight || document.documentElement.clientHeight;
    const contentHeight = ArticleContainerRef.value!.scrollHeight || 1;
    const scrollTop = e.target.scrollTop;
    if (scrollTop + containerHeight > contentHeight - 10) {
        if (StudyController.getIsLoading() || isEnd.value) return;
        reachBottom();
    }
}

onMounted(() => {
    window.addEventListener('scroll', scrollMonitor, true);
})
onUnmounted(() => {
    window.removeEventListener('scroll', scrollMonitor, true);
})


// 事件代理
type ClickType = 'close' | 'detail' | 'eclipse';
const getClickInfo = <T>(type: ClickType, content?: T) => { return new ClickClass<ClickType, T>(type, content).stringify(); }
const articleClickMonitor = (event: any) => {
    for (let everyNode of event.composedPath()) {
        try {
            const clickInfoString = everyNode.getAttribute('clickInfo');
            if (!clickInfoString) continue;
            const clickInfo: ClickClass<ClickType, string | number> = JSON.parse(clickInfoString);
            if (clickInfo.clickType === 'close') StudyController.setSearchState(false);
            else if (clickInfo.clickType === 'detail') router.push({ name: 'essayDetail', query: JSON.parse(clickInfo.clickParm as string) });
            else if (clickInfo.clickType === 'eclipse') {
                StudyController.setQueryData(0);
                showTop.value = false;
                backToTop();
            };
            break;
        }
        catch { continue; }
    }
}
// 返回顶部
const showTop = ref(false);
const backToTop = () => {
    ArticleContainerRef.value?.scrollIntoView({ behavior: 'smooth' });
    showTop.value = false;
}
</script>

<template>
    <div class="article-container" :class="{ 'little': StudyController.getSearchState() }" @click="articleClickMonitor"
        :clickInfo="getClickInfo<void>('close')" ref="ArticleContainerRef">
        <TransitionGroup name="list-animate">
            <EssayInfo v-for="(item, index) in showData" :key="index"
                :clickInfo="getClickInfo<string>('detail', JSON.stringify(item))" :index="index"
                :title="item.title" :titleEn="item.titleEn" :pubdate="item.pubdate" />
        </TransitionGroup>
        <div class="is-loading" v-show="StudyController.getIsLoading()">加载中......</div>
        <div class="no-more" v-if="isEnd">
            <span>没有更多了</span>
            <span class="eclipse" :clickInfo="getClickInfo<void>('eclipse')">收起</span>
        </div>
        <ToTop :show="showTop" @click="backToTop" />
    </div>
</template>

<style lang="less" scoped>
.article-container {
    width: 100%;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;

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

    .is-loading {
        font-weight: bold;
        animation: LoadingAnimate 1.5s infinite;

        @keyframes LoadingAnimate {
            50% {
                opacity: 0.5;
            }
        }
    }

    .no-more {
        text-align: center;
        font-size: 125%;
        font-weight: bold;
        width: 100%;
        border-top: 1px solid var(--ms-black);
        cursor: default;

        .eclipse {
            margin-left: 1%;
            cursor: pointer;
            color: var(--gray);
        }

        .eclipse:hover {
            color: var(--ms-black);
            text-decoration: underline;
        }
    }
}

.article-container.little {
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
}</style>