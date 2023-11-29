<script lang="ts" setup>
import EssayController from '@/store/essayController';
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const essayHtml = ref('');
const isLoading = ref(false);
const isFailed = ref(false);
const EssayRef = ref<HTMLElement | null>();

onMounted(() => {
    getPassageDetail();
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
    router.go(-1);
}
const backToTop = () => {
    EssayRef.value!.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div>
        <div class="skeleton" v-if="isLoading">
            <div class="title" />
            <div class="content" />
        </div>
        <div class="essay-container" v-else ref="EssayRef">
            <div v-if="isFailed" class="falure">
                <p>发生未知错误</p>
                <p class="retry" @click="getPassageDetail">重试</p>
            </div>
            <div v-html="essayHtml" v-else />
        </div>
        <div class="essay-info">
            <p></p>
        </div>
        <div class="back" @click="backHandle">
            <p class="icon">X</p>
            <p class="text">关闭</p>
        </div>
        <Transition>
            <div class="to-top" @click="backToTop">
                <div class="top" />
                <p>Top</p>
            </div>
        </Transition>
    </div>
</template>

<style lang="less" scoped>
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

.to-top {
    position: fixed;
    right: 5%;
    top: 50%;
    transform: translate3d(0, -50%, 0);


    --line-width: 3px;
    --squar-width: 20px;

    .top {
        height: var(--squar-width);
        width: var(--squar-width);
        border-top: var(--line-width) solid var(--ms-black);
        border-right: var(--line-width) solid var(--ms-black);
        transform: rotate3d(0, 0, 1, -45deg);
        margin: 0 auto;
    }

    p {
        margin: 0;
        font-size: 125%;
    }
}

.to-top:hover {
    cursor: pointer;
    animation: HoverAnimate 1.5s infinite;
}

@keyframes HoverAnimate {
    50% {
        opacity: 0.5;
    }
}
</style>