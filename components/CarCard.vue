<script lang="ts" setup>
    defineProps<{
        name: string,
        link: string,
        // img: string,
        cost: number,
        // type?: 'submit' | 'button',
        // to?: string,
        // href?: string,
        // secondView?: boolean,
    }>()
</script>
<template>
    <a :href="link " class="card">
        <img :alt="name">
        <div class="title">{{ name }}</div>
        <Cost :cost="cost"/>
    </a>
</template>
<style lang="scss">
    .title {
        font-size: clamp(13.33333px, 1.04167vw, 20px);
        line-height: clamp(18.66667px, 1.45833vw, 28px);
        font-family: 'Geologica', sans-serif;
        font-style: normal;
        font-weight: 300;
        color: rgb(0, 0, 0);
    }
</style>