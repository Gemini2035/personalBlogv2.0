<!--
 * @Date: 2023-11-08 23:59:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-11 20:49:16
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basicInfo/timeline.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
import { computed, ref } from 'vue';

// 滚动展示管理
const percentageNumber = ref(0);
const timelineContent = ref<HTMLElement | null>(null);
const percentageRange = SiteIntroController.getTimeLinePercentage();
const barColor = computed(() => {
    if (percentageNumber.value < percentageRange[0]) return 'green';
    else if (percentageNumber.value < percentageRange[0] + percentageRange[1]) return 'black';
    else return 'brown';
})
const scrollMonitor = () => {
    const containerHeight = timelineContent.value!.clientHeight;
    const contentHeight = timelineContent.value!.scrollHeight;
    const scrollTop = timelineContent.value!.scrollTop;
    const scrollPercentage = (scrollTop / (contentHeight - containerHeight)) * 100;
    percentageNumber.value = Math.floor(scrollPercentage);
}

</script>

<template>
    <div class="timeline-box">
        <p class="title">Time Keeper 时间管理者</p>
        <div class="maintain-container">
            <div class="explanation-container">
                <div class="explanation-item">
                    <p class="dot done" />
                    <p class="explanation-content">已完成</p>
                </div>
                <div class="explanation-item">
                    <p class="dot" />
                    <p class="explanation-content">进行中</p>
                </div>
                <div class="explanation-item">
                    <p class="dot future" />
                    <p class="explanation-content">展望未来</p>
                </div>
                <div class="timeline-scrollbar" :class="barColor">
                    <div class="bar-block" :style="{willChange: 'height', height: `${percentageNumber}%`}" />
                    <p :style="{ willChange: 'transform', transform: `translate3d(0, calc(${percentageNumber}% - 15px), 0)`}">{{ percentageNumber }}%</p>
                </div>
            </div>
            <div class="timeline-content" ref="timelineContent" @scroll="scrollMonitor">
                <div class="timeline-item" v-for="item in SiteIntroController.getTimeLineList()" :key="item.time">
                    <div class="item-title">
                        <p class="dot" :class="item.status" />
                        <p class="title-content">{{ item.time }}</p>
                    </div>
                    <div class="item-content">
                        <p class="content">{{ item.content }}</p>
                        <p class="content-en">{{ item.contentEn }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    cursor: default;
}

.timeline-box {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .title {
        margin: 1%;
        font-size: 200%;
        font-weight: bold;
        position: relative;
    }

    .maintain-container {
        width: 100%;
        height: 90%;
        display: flex;

        .explanation-container {
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            position: relative;

            .explanation-item {
                margin-bottom: 25%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    margin: 0;
                }

                .explanation-content {
                    writing-mode: vertical-lr;
                    margin-top: 10px;
                }
            }

            .timeline-scrollbar {
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                margin-top: 15px;
                display: flex;

                .bar-block {
                    border: 1px solid;
                }

                p {
                    margin-left: 3px;
                }
            }

            .timeline-scrollbar.green {
                p {
                    color: var(--ms-green);
                }
                .bar-block {
                    border: 1px solid var(--ms-green);
                }
            }
            .timeline-scrollbar.brown {
                p {
                    color: var(--ms-brown);
                }
                .bar-block {
                    border: 1px solid var(--ms-brown);
                }
            }
        }

        .timeline-content {
            width: 80%;
            height: 100%;
            margin-top: 15px;
            margin-left: auto;
            border-top: 2px solid;
            overflow-y: auto;
            overflow-x: hidden;

            .timeline-item {
                margin-bottom: 5%;

                .item-title {
                    display: flex;
                    align-items: center;
                    flex-direction: row-reverse;
                    margin-right: 3%;

                    p {
                        margin: 0;
                    }

                    .title-content {
                        font-size: 200%;
                        font-weight: bold;
                        margin-right: 1%;
                        position: relative;
                    }

                    .title-content::before {
                        transition: 0.6s ease-in-out;
                        content: '';
                        position: absolute;
                        width: 0;
                        border: 0px solid;
                        right: 0;
                        top: 100%;
                    }
                }

                .item-content {
                    p {
                        margin: 0;
                    }

                    .content {
                        font-size: 150%;
                    }

                    .content-en {
                        font-size: 125%;
                    }
                }
            }

            .timeline-item:hover {
                .title-content {
                    font-size: 225%;
                }

                .title-content::before {
                    content: '';
                    position: absolute;
                    width: 120%;
                    border: 1px solid;
                    right: 0;
                    top: 100%;
                }

                .content {
                    font-size: 175%;
                }

                .content-en {
                    font-size: 150%;
                }
            }

            .timeline-item:last-child {
                margin-bottom: 15%;
            }
        }
    }

    .dot {
        border: 3px solid;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: relative;
    }

    .dot.done {
        border: 3px solid var(--ms-green);
    }

    .dot.future {
        border: 3px solid var(--ms-brown);
    }
}
</style>