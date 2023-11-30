<script lang="ts" setup>
const props = defineProps<{ index?: number, title: string, titleEn: string, pubdate: string }>()
</script>

<template>
    <div class="menu-item">
        <p class="number" v-if="props.index !== undefined">Passage {{ props.index + 1 }}</p>
        <div class="divider" v-if="props.index !== undefined" />
        <p class="title">{{ props.title }}</p>
        <p class="title-en">{{ props.titleEn }}</p>
        <p class="date">{{ props.pubdate }}</p>
    </div>
</template>

<style lang="less" scoped>
.menu-item {
    margin-bottom: 1%;
    text-align: center;

    p {
        margin-bottom: 0;
    }

    max-width: 90%;

    .number {
        font-size: 250%;
        font-weight: bold;
    }

    .divider {
        width: 0;
        height: 0;
        border: 0px solid var(--ms-black);
    }

    .title {
        font-size: 175%;
        letter-spacing: 5px;
        font-weight: bold;
        min-width: 300px;
    }

    .title-en {
        font-size: 150%;
        font-weight: bold;
        letter-spacing: 3px;
        margin: 0;
    }

    .date {
        font-size: 125%;
        margin-top: 1%;
        font-weight: bold;
    }
}

.menu-item:hover {
    cursor: pointer;

    .divider {
        border: 1px solid var(--ms-black);
        width: 100%;
    }
}
</style>