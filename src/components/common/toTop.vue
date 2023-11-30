<script setup lang="ts">
import { toRefs } from 'vue';
const prop = defineProps<{ show: boolean}>();
const { show } = toRefs(prop);
</script>

<template>
    <Transition name="top-button">
        <div class="to-top" v-if="show">
            <div class="top" />
            <p>Top</p>
        </div>
    </Transition>
</template>

<style lang="less" scoped>
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
}

.top-button-leave-to,
.top-button-enter-from {
    opacity: 0;
}

.top-button-enter-active,
.top-button-leave-active {
    transition: 0.6s ease-in-out;
}
</style>