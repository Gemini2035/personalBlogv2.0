<!--
 * @Date: 2023-11-22 12:09:12
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 22:58:23
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/search_part.vue
-->
<script setup lang="ts">
import NaviController from '@/store/naviController';
import StudyIntroController from '@/store/studyController';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const openSearch = () => {
    if (StudyIntroController.getSearchState()) return;
    StudyIntroController.setSearchState(true);
}

// input事件
const inputContent = ref<string>('');
const input = ref<HTMLElement | null>(null);
const inputFocus = () => {
    window.setTimeout(() => input.value?.focus(), 10);
}
const inputChangeHandle = () => {
    StudyIntroController.setSearchResult(inputContent.value);
}

watch(
    () => inputContent.value,
    () => inputChangeHandle()
)

const enterPress = () => input.value?.blur();



// 按键监听器
type PressType = 'Slash' | 'Enter';
const pressMonitor = (e: any) => {
    if (!StudyIntroController.getSearchState()) return;
    const code: PressType = e.code;
    if (code === 'Slash') inputFocus();
    else if (code === 'Enter') enterPress();

}

onMounted(() => {
    window.addEventListener('keydown', pressMonitor, false);
});

onUnmounted(() => {
    window.removeEventListener('keydown', pressMonitor, false);
})

</script>

<template>
    <div class="search-container"
        :class="{ 'close': !StudyIntroController.getSearchState(), 'hidden': NaviController.getNaviState() }">
        <div class="search-title" @click="openSearch">
            <div class="search-icon" />
            <p class="title-text">搜索</p>

        </div>
        <div class="input-content">
            <input class="search-input" ref="input" v-model="inputContent" />
            <button class="input-btn">开始</button>
        </div>
        <div class="search-answer">
            <template v-if="StudyIntroController.getSearchResult().length">
                <div v-for="(item, index) in StudyIntroController.getSearchResult()" :key="index" class="result-item">
                    <div class="arrow">
                        <div class="horizontal" />
                        <div class="left-arrow" />
                    </div>
                    <p class="content">{{ item.title }}</p>
                </div>

                <p v-show="StudyIntroController.getShowMoreResult()" class="show-more" @click="inputChangeHandle">
                    换一批
                </p>
            </template>
            <p v-else class="empty">暂无更多</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.search-container {
    z-index: 1;
    position: fixed;
    height: calc(100% - var(--navi-height) - var(--navi-margin-bottom));
    width: 20%;
    top: calc(var(--navi-height) + var(--navi-margin-bottom));
    border-right: 1px solid;
    display: flex;
    flex-direction: column-reverse;

    .search-title {
        --icon-size: 25px;
        --icon-offset: 5px;
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;
        min-width: 100px;
        align-items: center;
        flex-direction: row-reverse;

        .search-icon {
            position: relative;
            width: var(--icon-size);
            height: var(--icon-size);
            border: solid 2px var(--gray);
            border-radius: 50%;
            transform: rotate3d(0, 0, 1, -45deg);
            margin-right: var(--icon-offset);
        }

        .search-icon::before {
            content: '';
            position: absolute;
            top: 25px;
            left: 12.5px;
            height: 10px;
            width: 2px;
            background-color: var(--gray);
        }

        .title-text {
            font-size: 175%;
            margin: 0;
            margin-right: 10%;
            cursor: default;
        }
    }

    .search-answer {
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        margin: auto;
        width: 100%;
        .result-item {
            display: flex;
            align-items: center;
            justify-content: end;
            margin-bottom: 5%;
            padding-right: 3%;
            width: 95%;

            .arrow {
                display: flex;
                align-items: center;
                margin-right: 10px;

                .horizontal {
                    height: 0;
                    width: 10px;
                    border: 1px solid var(--ms-black);
                    transform: translate3d(5px, 0, 0);
                }

                .left-arrow {
                    --border-width: 2px;
                    height: 10px;
                    width: 10px;
                    border-right: var(--border-width) solid var(--ms-black);
                    border-bottom: var(--border-width) solid var(--ms-black);
                    transform: rotate3d(0, 0, 1, -45deg);
                }
            }

            .content {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .result-item:hover {
            transition: none;
            cursor: pointer;
            transform: translate3d(-5px, -5px, 0);
            text-shadow: 5px 5px var(--mask-color-light);

            .content {
                letter-spacing: 1px;
                font-weight: bold;
            }

            .arrow {
                animation: HoverAnimate 1.5s linear infinite;

                @keyframes HoverAnimate {
                    50% {
                        scale: 0.7;
                        transform: rotate3d(1, 0, 0, 360deg) translate3d(-10px, 0, 0);
                    }
                }
            }
        }
        .show-more {
            cursor: pointer;
            padding-right: 1%;
        }
        .show-more:hover {
            text-decoration: underline;
        }
        .empty {
            width: 100%;
            text-align: center;
            font-size: 125%;
            letter-spacing: 1px;
            font-weight: bold;
        }
        
    }

    .input-content {
        display: flex;
        width: 99%;
        margin-left: auto;
        margin-right: auto;
        border-top: 1px solid;
        align-items: center;
        justify-content: center;

        .search-input {
            outline: none;
            border: none;
            margin-bottom: 5%;
            padding-left: 1%;
            font-size: 150%;
            border-radius: 0;
            width: 80%;
            margin: 1% 0;
            background-color: transparent;
        }

        .input-btn {
            width: 20%;
            outline: none;
            border: 0;
            font-size: 125%;
            font-weight: bold;
            background-color: transparent;
        }
    }
}

.search-container.close {
    transform: translate3d(-100%, 0, 0);

    .search-title {
        transform: translate3d(calc(var(--icon-size) + var(--icon-offset) + 5px), 0, 0);
    }

    .search-title:hover {
        transform: translate3d(100%, 0, 0);
        cursor: pointer;

        .search-icon {
            border: solid 2px var(--ms-black);
        }

        .search-icon::before {
            background-color: var(--ms-black);
        }
    }
}

.search-container.hidden {
    opacity: 0;
    z-index: -1;
}
</style>