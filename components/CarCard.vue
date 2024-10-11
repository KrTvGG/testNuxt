<script lang="ts" setup>
    defineProps<{
        name: string,
        link: string,
        img?: string,
        cost: number,
    }>()
</script>
<template>
    <a :href="link " class="font-mono relative overflow-hidden z-0">
        <img :src="img" :alt="name" class="w-fill h-full object-cover aspect-[573/300]">
        <div class="absolute z-[3] bottom-4 left-4">
            <div class="text-xl">{{ name }}</div>
            <Cost :cost="cost"/>
        </div>
    </a>
</template>