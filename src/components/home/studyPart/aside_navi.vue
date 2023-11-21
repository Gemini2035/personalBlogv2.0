<!--
 * @Date: 2023-11-21 10:44:53
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-21 19:11:32
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/aside_navi.vue
-->
<script setup lang="ts">
import StudyController from '@/store/studyController';
import ClickClass from '@/class/click_class';

type ClickType = 'close' | 'classify';
const clickInfoFormat = <T>(type: ClickType, target?: T) => { return new ClickClass<ClickType, T>(type, target).stringify(); }

// 事件代理
const asideClickMonitor = (event: any) => {
    console.log(event.currentTarget.firstElementChild.getAttribute('clickInfo'))
}
</script>

<template>
    <div class="aside-navi" @click="StudyController.setSideNavi(false)">
        <div class="maintain-container" @click.stop="asideClickMonitor">
            <div class="close-btn" :clickInfo="clickInfoFormat<void>('close')">
                <div class="btn-left btn-item" />
                <div class="btn-right btn-item" />
            </div>
            <div class="menu-content">
                <div v-for="item in StudyController.getMenuData()" :key="item.key" class="menu-item">
                    <p>{{ item.title }}</p>
                    <p>{{ item.titleEn }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.aside-navi {
    position: fixed;
    background-color: var(--mask-color-light);
    width: 100%;
    height: calc(100% - var(--navi-height) - 1px);
    top: calc(var(--navi-height) + 1px);
    left: 0;

    .maintain-container {
        width: 25%;
        position: absolute;
        right: 0;
        background-color: var(--ms-white);
        height: 100%;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        .close-btn {
            position: relative;
            height: 45px;
            width: 30px;
            padding-left: 10px;

            .btn-item {
                position: absolute;
                height: 0;
                width: 25px;
                border: 1px solid;
                top: 50%;
                transform: translate3d(0, -50%, 0);
            }

            .btn-left {

                transform: rotate3d(0, 0, 1, 45deg);
            }

            .btn-right {
                transform: rotate3d(0, 0, 1, -45deg);
            }
        }

        .close-btn:hover {
            cursor: pointer;

            .btn-left {
                animation: HoverAnimateLeft 0.6s ease-in-out;

                @keyframes HoverAnimateLeft {
                    100% {
                        transform: rotate3d(0, 0, 1, 405deg);
                    }
                }
            }

            .btn-right {
                animation: HoverAnimateRight 0.6s ease-in-out;

                @keyframes HoverAnimateRight {
                    100% {
                        transform: rotate3d(0, 0, 1, -405deg);
                    }
                }
            }
        }

        .menu-content {
            height: calc(100% - 45px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 3%;

            .menu-item {
                display: flex;
                margin-bottom: 5%;
                font-size: 1rem;
                p:last-child {
                    margin-left: 3%;
                }
            }
            .menu-item:hover {
                cursor: pointer;
                font-size: 1.5rem;
            }

        }
    }
}</style>