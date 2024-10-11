<script lang="ts" setup>
    defineProps<{
        cost: number,
    }>()
</script>
<template>
    <div class="cost p-1.5 rounded-2xl text-black w-fit">от {{ cost }} <span class="opacity-50">/ сут</span></div>
</template>
<style lang="scss">
    .cost {
        background: #FFF
    }
</style>