<!--
 * @Date: 2023-10-29 21:34:09
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-10-31 23:12:51
 * @FilePath: /MyBlog_vue/src/components/navi/navigator.vue
-->
<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue';
import NaviController from '../../store/navi_controller';
import { ClickClass, ClickType } from '../../class/click_class';

const naviData: ReadonlyArray<{ name: string, nameEn: string, key: number, color: string }> = [
    { name: '个人简介', key: 2, nameEn: 'Self', color: 'rgba(245, 245, 245, 1)' },
    { name: '站点介绍', key: 3, nameEn: 'Site', color: 'rgba(179, 229, 252, 1)' },
    { name: '日常学习', key: 4, nameEn: 'Study', color: 'rgba(207, 216, 220, 1)' },
];

const isFocus = computed(() => { return NaviController.getNaviState() });

// 更新时钟
let Timer: number | undefined = undefined;
const upDateTime = () => {
    if (isFocus.value) return;
    NaviController.setTime();
}

onMounted(() => {
    Timer = window.setInterval(() => upDateTime(), 1000);
});

onUnmounted(() => {
    clearInterval(Timer);
})

// 事件代理
const clickMonitor = (event: any) => {
    if (!event.target.getAttribute("clickInfo")) return;
    const clickInfo: ClickClass<number | string> = JSON.parse(event.target.getAttribute("clickInfo"));
    if (clickInfo.clickType === 'back') {
        if (!clickInfo.clickParm) { NaviController.setNaviState(true); }
    } else if (clickInfo.clickType === 'change') {
        NaviController.setPageNum(clickInfo.clickParm! as number);
        if (isFocus.value) NaviController.setNaviState(false);
    }
}

const clickInfoFormat = <T>(type: ClickType, target?: T) => { return JSON.stringify(new ClickClass<T>(type, target)); }

</script>

<template>
    <div class="navi-container" @click="clickMonitor" :class="isFocus ? '' : 'title-mode'">
        <div class="navi-tips">
            <div class="site-logo"><img src="/siteIcon.svg" alt="" :clickInfo="clickInfoFormat<string>('back')"></div>
            <p class="timer">{{ NaviController.getTime() }}</p>
        </div>
        <div class="maintain-container">
            <div v-for="item in naviData" :key="item.key" class="navi-item"
                :style="{ backgroundColor: isFocus ? item.color : 'transparent' }"
                :clickInfo="isFocus? clickInfoFormat<number>('change', item.key) : undefined">
                <div class="title-group">
                    <h1 class="title" :class="NaviController.isActive(item.key) ? 'active' : ''" :clickInfo="clickInfoFormat<number>('change', item.key)">{{ item.name }}</h1>
                    <div class="divider" />
                    <h1 class="title-en">{{ item.nameEn }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.navi-container {
    height: 100%;
    .navi-tips {
        transition: 0.1s ease-in-out;
        display: none;
    }
    .maintain-container {
        display: flex;
        height: 100%;
        .navi-item {
            width: calc(100% / 3 - 1px);
            border-right: 1px solid;
            position: relative;
            transition: 0s linear;
            .title-group {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .title {
                    transition: inherit;
                    font-size: 3rem;
                    margin-bottom: 0;
                    transform: translateY(8vh);
                    letter-spacing: 0.5vw;
                    white-space: nowrap;
                }
                .divider {
                    height: 0;
                    border-bottom: 2px solid;
                    opacity: 0;
                    margin: 0;
                }
                .title-en {
                    text-align: center;
                    margin-top: 0;
                    opacity: 0;
                }
            }
        }
        .navi-item:hover {
            cursor: pointer;
            animation: HoverAnimate 1.8s infinite ease-in-out;
            @keyframes HoverAnimate { 50% { opacity: 0.8; }}
            .title-group {
                .title { transform: translateY(0); }
                .divider { opacity: 1; }
                .title-en { opacity: 1; }
            }
        }
    }
}

.navi-container.title-mode {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5vh;
    border-bottom: 1px solid #888;
    align-items: center;
    justify-content: space-between;
    .navi-tips {
        width: 15%;
        height: 100%;
        align-items: center;
        padding-left: 1%;
        display: flex;
        justify-content: space-between;
        .site-logo {
            height: 100%;
            max-height: 5vh;
            display: flex;
            align-items: center;
            img {
                margin: auto;
                height: 60%;
                width: auto;
            }
            img:hover {
                cursor: pointer;
                opacity: 0.5;
                // TODO: 解决animate不生效问题
            }
        }
        .timer {
            font-size: 1.1rem;
            font-weight: bold;
            cursor: default;
        }
    }

    .maintain-container {
        width: 40%;
        .navi-item {
            border: 0;
            .title {
                transition: none;
                transform: translateY(0);
                font-size: 1rem;
                opacity: 0.5;
            }
            .title.active {
                opacity: 1;
            }
            .title:hover {
                animation: HoverAnimate 1.2s ease-in-out infinite;
                @keyframes HoverAnimate { 50% { opacity: 1; } }
            }
            .divider { display: none; }
            .title-en { display: none; }
        }
    }
}
</style>