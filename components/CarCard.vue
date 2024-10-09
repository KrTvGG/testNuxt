<script lang="ts" setup>
    defineProps<{
        name: string,
        link: string,
        img?: string,
        cost: number,
    }>()
</script>
<template>
    <a :href="link " class="card">
        <img :src="img" :alt="name">
        <div class="card__content">
            <div class="title">{{ name }}</div>
            <Cost :cost="cost"/>
        </div>
    </a>
</template>
<style lang="scss">
    .title {
        font-size: clamp(13.33333px, 1.04167vw, 20px);
        line-height: clamp(18.66667px, 1.45833vw, 28px);
        font-family: 'Geologica', sans-serif;
        font-style: normal;
        font-weight: 300;
    }
    .card {
        position: relative;
        overflow: hidden;
        z-index: 0;
        &__content {
            position: absolute;
            bottom: clamp(10.66667px, .83333vw, 16px);
            left: clamp(10.66667px, .83333vw, 16px);
            z-index: 3;
        }
        img {
            width: 100%;
            height: 100%;
            aspect-ratio: 573 / 300;
            object-fit: cover;
            // object-position: bottom;
        }
    }
</style>