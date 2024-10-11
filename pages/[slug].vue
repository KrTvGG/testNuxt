<script lang="ts" setup>
    const route = useRoute()
    const pageContent = await getPageContent(String(route.params.slug))

    if(!pageContent.length){
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found',
            fatal: true,
        })
    }
    
    useHead({
        title: pageContent[0].title.rendered,
    })

    let tab = ref<number>(0);
</script>
<template>
    <div class="container mt-[100px]">
        <h1 class="font-mono text-6xl mb-[20px]">{{ pageContent[0].title.rendered }}</h1>
        <img class="rounded-xl mb-10" :alt="pageContent[0].title.rendered" :src="pageContent[0].acf.car_gallery[0].sizes.medium_large">
        <Cost :cost="pageContent[0].acf['8-14_day_rent']" />
        <div class="flex gap-x-3 mt-10">
            <div :class="{ 'border-sky-400': tab == 0 }" @click="tab = 0" class="py-5 px-3.5 rounded-full border-2 border-teal-gray ease-in text-xl uppercase 
                cursor-pointer hover:border-sky-400 transition duration-150 ease-out">Доступные даты</div>
            <div :class="{ 'border-sky-400': tab == 1 }" @click="tab = 1" class="py-5 px-3.5 rounded-full border-2 border-teal-gray ease-in text-xl uppercase 
                cursor-pointer hover:border-sky-400 transition duration-150 ease-out">подробнее о цене</div>
            <div :class="{ 'border-sky-400': tab == 2 }" @click="tab = 2" class="py-5 px-3.5 rounded-full border-2 border-teal-gray ease-in text-xl uppercase 
                cursor-pointer hover:border-sky-400 transition duration-150 ease-out">характеристики</div>
        </div>
    </div>
</template>