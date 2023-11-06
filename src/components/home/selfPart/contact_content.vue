<!--
 * @Date: 2023-11-05 12:27:16
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-11-07 02:36:49
 * @FilePath: /MyBlog_vue/src/components/home/selfPart/contact_content.vue
-->
<script lang="ts" setup>
import SelfIntroController from '../../../store/selfIntroController';
</script>

<template>
    <div class="contact-content">
        <div class="img-container">
            <a href="https://apod.nasa.gov/apod/ap230910.html" target="_blank">
                <img src="src/assets/self/contactImg.jpg" alt="placehold img" title="显示源地址"></a>
        </div>
        <div class="maintain-container">
            <div class="title-content">
                <p>联系我</p>
                <p>Contact With ME</p>
                <p />
            </div>
            <div class="contact-list">
                <div v-for="item in SelfIntroController.getContactList()" :key="item.icon" class="list-item">
                    <a :href="item.href" target="_blank">
                        <div class="icon-container">
                            <img :src="item.icon" alt="图标加载错误" class="icon" :title="item.title">
                        </div>
                    </a>
                </div>
            </div>
            <div class="self-intro">
                <p class="divider" />
                <p class="title">我的博客 My Blog</p>
                <p class="intro-content">旨在展示自己、记录个人学习历程、同时提高博主的审美</p>
                <p class="intro-content-en">Intended to showcase oneself, Document personal learning journey, And enhance
                    the blogger's aesthetics at the same time</p>
                <p class="notice">All Rights Reserved. All Lefts Too.</p>
                <p class="time-info">© 2023 Blog of Carloss2035</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
* {
    transition: 0.6s ease-in-out;
}

.contact-content {
    background-color: #fff;
    height: 100%;
    width: 80%;
    transform: translateZ(20px);
    border-top: 1px solid;
    margin: auto;
    position: relative;

    .img-container {
        height: 40%;
        text-align: center;
        overflow: hidden;
        margin: 1% 0;

        img {
            height: 100%;
            width: auto;
        }

        img:hover {
            scale: 1.1;
        }
    }

    .maintain-container {
        width: 100%;
        display: flex;
        align-content: start;
        justify-content: space-between;
        flex-direction: column;
        height: 60%;
        padding-top: 3%;

        .title-content {
            font-size: 150%;
            font-family: Mier B;
            text-align: right;
            padding-right: 1%;
            cursor: default;
            position: relative;

            p {
                margin: 0;
            }

            p:last-child {
                border: 1px solid;
                width: 25%;
                right: 0;
                position: absolute;
                margin-top: 1%;
            }
        }

        .contact-list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .list-item {
                width: 20%;

                a {
                    cursor: default;

                    .icon-container {
                        width: 75px;
                        height: 75px;
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 75%;
                            height: auto;
                            cursor: pointer;
                        }

                        img:hover {
                            scale: 1.1;
                        }
                    }
                }
            }
        }
    }

    .self-intro {
        text-align: center;
        font-family: Mier B;

        .divider {
            width: 30%;
            margin: 0 auto;
            border: 1px solid;
        }
        .title {
            font-size: 175%;
            font-weight: bold;
            margin: 0;
            margin-bottom: 10px;
        }

        .intro-content {
            font-size: 120%;
            margin: 0;
        }

        .intro-content-en {
            width: 80%;
            font-size: 120%;
            margin: 0 auto;
        }

        .notice {
            margin-top: 30px;
            margin-bottom: 0;
            font-size: 80%;
        }

        .time-info {
            margin: 0;
            font-size: 80%;
        }
    }
}</style>