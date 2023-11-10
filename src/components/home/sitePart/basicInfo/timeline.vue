<!--
 * @Date: 2023-11-08 23:59:45
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-10 17:59:44
 * @FilePath: /myBlog_versionVue/src/components/home/sitePart/basicInfo/timeline.vue
-->
<script lang="ts" setup>
import SiteIntroController from '@/store/siteIntroController';
</script>

<template>
    <div class="timeline-box">
        <p class="title">Time Keeper 时间管理者</p>
        <div class="maintain-container">
            <div v-for="item in SiteIntroController.getTimeLineList()" :key="item.time" class="timeline-item">
                <div class="content-container">
                    <p class="content">{{ item.content }}</p>
                    <p class="content-en">{{ item.contentEn }}</p>
                </div>
                <div class="dot" :class="item.status" />
                <p class="time">{{ item.time }}</p>
            </div>
        </div>
        <div class="explanation-container">
            <div class="item">
                <div class="dot done" />
                <p>已完成</p>
            </div>
            <div class="item">
                <div class="dot" />
                <p>进行中</p>
            </div>
            <div class="item">
                <div class="dot future" />
                <p>未来方向</p>
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
        height: 100%;
        display: flex;
        overflow: hidden;

        .timeline-item {
            flex: 0.5;
            padding-left: 1%;
            height: 100%;
            position: relative;

            .content-container {
                height: 75%;
                display: flex;

                .content {
                    margin: 0;
                    margin-bottom: 5px;
                    writing-mode: vertical-lr;
                    text-align: right;
                }

                .content-en {
                    margin-top: auto;
                    padding-left: 5px;
                    opacity: 0;
                    writing-mode: vertical-lr;
                    text-align: right;
                    margin: 0;

                }
            }

            .dot::before {
                content: '';
                position: absolute;
                top: 50%;
                transform: translate3d(0, -50%, 0);
                width: 1000px;
                border: 1px solid;
                z-index: -1;
            }

            .time {
                font-size: 100%;
                margin: 0;
                margin-top: 5%;
            }
        }

        .timeline-item:hover {
            width: 100%;
            flex: 1;

            .time {
                font-size: 125%;
            }

            .content {
                font-size: 125%;
                background-color: #f5f5f5;
            }

            .content-en {
                opacity: 1;
                font-size: 100%;
                border-right: 2px solid;
                width: 100%;
                height: 100%;
                background-color: #f5f5f5;
            }
        }
    }

    .explanation-container {
        position: absolute;
        bottom: 0;
        left: 5px;
        display: flex;

        .item {
            display: flex;
            align-items: baseline;
            width: 100px;
        }

        p {
            font-weight: bold;
            margin: 0;
            margin-left: 5px;
            transform: translate3d(0, -3px, 0);
        }
    }


    .dot {
        border: 2px solid;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #fff;
        margin-bottom: -4px;
        position: relative;
    }

    .dot.done {
        border: 2px solid #7cbb00;
    }

    .dot.future {
        border: 2px solid #ffa050;
    }
}
</style>