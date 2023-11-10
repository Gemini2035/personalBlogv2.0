<!--
 * @Date: 2023-11-08 23:59:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-11 02:13:21
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basicInfo/timeline.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
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
            </div>
            <div class="timeline-content">
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
    transition: 0.6s ease-in-out;
    cursor: default;
}

.timeline-box {
    width: 100%;
    height: 100%;
    position: relative;

    .title {
        margin: 1%;
        font-size: 200%;
        font-weight: bold;
        position: relative;
    }

    // .title::before {
    //     content: '';
    //     position: absolute;
    //     top: 100%;
    //     width: 75%;
    //     border: 1px solid;
    // }

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
        border: 3px solid #7cbb00;
    }

    .dot.future {
        border: 3px solid #ffa050;
    }
}</style>