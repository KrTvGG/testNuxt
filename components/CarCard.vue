<script lang="ts" setup>
    defineProps<{
        name: string,
        link: string,
        img?: string,
        cost: number,
    }>()
</script>
<template>
    <a :href="link " class="card font-mono">
        <img :src="img" :alt="name">
        <div class="card__content">
            <div class="text-xl">{{ name }}</div>
            <Cost :cost="cost"/>
        </div>
    </a>
</template>
<style lang="scss">
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