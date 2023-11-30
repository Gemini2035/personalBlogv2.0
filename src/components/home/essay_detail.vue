<script lang="ts" setup>
import EssayController from '@/store/essayController';
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import EssayInfo from './studyPart/essay_info.vue';
import ToTop from '@/components/common/toTop.vue';

const route = useRoute();
const router = useRouter();
const classifyDic: ReadonlyArray<string> = ['前端', 'Python', 'C/Cpp', 'SwiftUi', '其它'];
const essayHtml = ref('');
const isLoading = ref(false);
const isFailed = ref(false);

onMounted(() => {
    getPassageDetail();
    window.addEventListener('scroll', () => scrollMonitor(), true);
})
onUnmounted(() => {
    window.removeEventListener('scroll', () => scrollMonitor(), true);
})
const getPassageDetail = () => {
    isLoading.value = true;
    isFailed.value = false;
    EssayController.getMdHtml(route.query.id as string)
        .then(result => {
            essayHtml.value = result;
        })
        .catch((e) => {
            console.log(e);
            isFailed.value = true;
        })
        .finally(() => isLoading.value = false)
}
const backHandle = () => {
    router.push({ name: 'studyLog' });
}
const backToTop = () => {
    essayContainerRef.value!.scrollTo({ top: 0 });
}

// 滚动监听
const percentageNumber = ref(0);
const essayContainerRef = ref<HTMLElement | null>();
const scrollMonitor = () => {
    const containerHeight = essayContainerRef.value?.clientHeight || 0;
    const contentHeight = essayContainerRef.value?.scrollHeight || 1;
    const scrollTop = essayContainerRef.value?.scrollTop || 0;
    const scrollPercentage = (scrollTop / (contentHeight - containerHeight)) * 100;
    percentageNumber.value = Math.floor(scrollPercentage);
}
const showTop = computed(() => { return percentageNumber.value > 45 });
const pinOpcity = computed(() => { return Math.min(percentageNumber.value / 10, 1); });
</script>

<template>
    <div ref="essayContainerRef" class="scroll-container">
        <div class="skeleton" v-if="isLoading">
            <div class="title" />
            <div class="content" />
        </div>
        <div class="essay-container" v-else>
            <div v-if="isFailed" class="falure">
                <p>发生未知错误</p>
                <p class="retry" @click="getPassageDetail">重试</p>
            </div>
            <div v-html="essayHtml" v-else />
        </div>
        <div class="essay-info">
            <EssayInfo :title="(route.query.title as string)" :title-en="(route.query.titleEn as string)"
                :pubdate="(route.query.pubdate as string)" class="main-info" />
            <p class="classify">文章分类：{{ classifyDic[route.query.classify as any] }}</p>
        </div>
        <div class="back" @click="backHandle">
            <p class="icon">X</p>
            <p class="text">关闭</p>
        </div>
        <div class="pin" :style="{ willChange: 'opcity', opacity: pinOpcity }">
            <div class="percentage" :style="{ willChange: 'width', width: percentageNumber + '%' }" />
            <p class="number-info"
                :style="{ willChange: 'transform', transform: `translate3d(${percentageNumber - 1}%, 0, 0)` }">{{
                    percentageNumber }}%</p>
            <h1 class="title" :class="{ 'hide': percentageNumber > 98 }">{{ route.query.title }}</h1>
        </div>
        <ToTop @click="backToTop" :show="showTop" />
    </div>
</template>

<style lang="less" scoped>
.scroll-container {
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;

    .essay-container {
        border-left: 1px solid var(--ms-black);
        border-right: 1px solid var(--ms-black);
        width: 80%;
        padding: 0 2.5%;
        margin: 0 auto;
        min-width: 800px;

        .falure {
            display: flex;
            align-items: center;
            cursor: default;

            p {
                margin: 0 1%;
                font-size: 125%;
            }

            .retry:hover {
                text-decoration: underline;
                color: var(--gray);
                cursor: pointer;
            }
        }

    }

    .essay-info {
        margin-top: 1%;

        .main-info {
            margin: auto;
            cursor: default;
        }

        .classify {
            font-size: 125%;
            font-weight: bold;
            text-align: center;
        }
    }

    .skeleton {
        width: 80%;
        height: 100%;
        overflow: hidden;
        margin: 0 auto;
        animation: PlaceHolderAnimate 1.5s ease-in-out infinite;

        @keyframes PlaceHolderAnimate {
            50% {
                opacity: 0.5
            }
        }

        div {
            background-color: var(--mask-color-light);
            border-radius: 5px;
            width: 90%;
            margin: 0 auto;
            box-shadow: 3px 3px var(--gray);
        }

        .title {
            height: 10vh;
        }

        .content {
            height: 100vh;
            margin-top: 5vh;
        }
    }

    .pin {
        width: 95%;
        transform: translate3d(-50%, 0, 0);
        left: 50%;
        position: fixed;
        top: calc(var(--navi-height) + var(--navi-margin-bottom));
        background-color: var(--ms-white);

        .percentage {
            border: 1px solid var(--ms-black);
        }

        .number-info {
            margin: 0;
        }

        .title {
            margin: 0;
            margin-top: -1%;
        }

        .title.hide {
            opacity: 0;
            position: absolute;
        }
    }

    .back {
        position: fixed;
        bottom: 3%;
        display: flex;
        align-items: center;
        width: 10%;
        right: 3%;
        justify-content: end;

        p {
            margin: 0;
            font-size: 150%;
        }

        p:last-child {
            margin-left: 1%;
        }
    }

    .back:hover {
        cursor: pointer;
        animation: HoverAnimate 2.4s infinite;
    }

    @keyframes HoverAnimate {
        50% {
            opacity: 0.5;
        }
    }
}
</style>