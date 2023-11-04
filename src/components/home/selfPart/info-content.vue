<!--
 * @Date: 2023-11-04 20:29:02
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-05 03:27:29
 * @FilePath: /MyBlog_vue/src/components/home/selfPart/info-content.vue
-->
<script lang="ts" setup>
const infoList: ReadonlyArray<{ title: string; titleEn: string; content: string; key: number }> = [
    { title: '名称', titleEn: 'Name', content: '5f205fd76d0b', key: 0 },
    { title: '性别', titleEn: 'Sex', content: '男', key: 1 },
    { title: '年龄', titleEn: 'Age', content: '21', key: 2 },
    { title: '居住地', titleEn: 'Location', content: '成都 四川 中国', key: 3 },
    { title: '关键字', titleEn: 'KeyWord', content: '技术爱好者、瞎折腾、懒病患者、无上午组织、夜行性 ...', key: 4 },
];
// 姓名 性别 年龄 居住地 关键词
</script>

<template>
    <div class="info-content">
        <div v-for="(item, index) in infoList" class="info-item" :key="item.key">
            <div class="content-box">
                <p class="title-text">{{ item.title }}</p>
                <p class="titleEn-text">{{ item.titleEn }}</p>
                <p class="content-text">{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* { transition: 0.6s ease-in-out; }
.info-content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    align-content: center;

    .info-item {
        font-family: Mier B;
        margin-bottom: 10%;
        width: calc(100% / 3);
        min-width: 225px;
        .content-box {
            margin: auto;
            width: 60%;
            p {
                margin: 0;
            }
            .title-text {
                font-size: 120%;
                font-weight: bold;
            }
            .titleEn-text {
                font-size: 120%;
                font-weight: bold;
            }
            .content-text {
                font-size: 200%;
                max-width: 40vw;
                position: absolute;
                min-width: 225px;
            }
        }
        .content-box:hover{
            animation: HoverAnimate 2s infinite linear;
        }
        @keyframes HoverAnimate {
            50% {
                scale: 1.1;
                opacity: 0.9;
            }
        }
    }
}</style>