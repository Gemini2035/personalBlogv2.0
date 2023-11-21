<!--
 * @Date: 2023-11-21 10:44:53
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-22 01:38:56
 * @FilePath: /myBlog_versionVue/src/components/home/studyPart/aside_navi.vue
-->
<script setup lang="ts">
import StudyController from '@/store/studyController';
import ClickClass from '@/class/click_class';

type ClickType = 'close' | 'classify';
const clickInfoFormat = <T>(type: ClickType, target?: T) => { return new ClickClass<ClickType, T>(type, target).stringify(); }

// 事件代理

const asideClickMonitor = (event: any) => {
    for (let everyNode of event.composedPath()) {
        try {
            const clickInfoString = everyNode.getAttribute('clickInfo');
            if (!clickInfoString) continue;
            const clickInfo: ClickClass<ClickType, string | number> = JSON.parse(clickInfoString);
            if (clickInfo.clickType === 'close') StudyController.setSideNaviState(false);
            else if (clickInfo.clickType === 'classify') {
                StudyController.setMenuNum(clickInfo.clickParm as number);
                StudyController.setSideNaviState(false);
            }
            break;
        }
        catch { continue; }
    }
}
</script>

<template>
    <div class="aside-navi" @click="StudyController.setSideNaviState(false)"
        :class="{ 'hide': !StudyController.getSideNaviState() }">
        <div class="maintain-container" @click.stop="asideClickMonitor">
            <div class="title-content">
                <div class="close-btn" :clickInfo="clickInfoFormat<void>('close')">
                    <div class="btn-left btn-item" />
                    <div class="btn-right btn-item" />
                </div>
                <p class="title-text">文章分类</p>
            </div>
            <div class="menu-content">
                <div v-for="item in StudyController.getMenuData()" :key="item.key" class="menu-item"
                    :clickInfo="clickInfoFormat<number>('classify', item.key)">
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

        .title-content {
            display: flex;
            align-items: center;

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

            .title-text {
                margin: 0 0 0 3%;
                font-size: 175%;
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
                margin-bottom: 15%;
                font-size: 150%;
                position: relative;

                p {
                    margin: 0;
                }

                p:last-child {
                    margin-left: 3%;
                }
            }

            .menu-item:hover {
                cursor: pointer;
                font-size: 200%;
                font-weight: bold;
                transition: 0.3s ease-in-out;
            }

            .menu-item:hover::before {
                content: '';
                position: absolute;
                top: 100%;
                width: 50%;
                left: 0;
                border: 1px solid;
            }

        }
    }
}

.aside-navi.hide {
    z-index: -1;
    transition: 0.9s ease-in-out;
    opacity: 0;

    .maintain-container {
        transition: 0.6s ease-in-out;
        transform: translate3d(100%, 0, 0);

        .close-btn {
            overflow: hidden;
            transition: 0.3s linear;

            .btn-left {
                transform: translate3d(100px, 100px, 0);
            }

            .btn-right {
                transform: translate3d(-100px, 100px, 0);
            }
        }
    }
}
</style>