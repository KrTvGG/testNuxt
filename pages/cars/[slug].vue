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
    const classesTab = {
        'py-5': true,
        'px-3.5': true,
        'rounded-full': true,
        'border-2': true,
        'border-teal-gray': true,
        'ease-in': true,
        'text-xl': true,
        'uppercase': true,
        'cursor-pointer': true,
        'hover:border-sky-400': true,
        'transition': true,
        'duration-150': true,
        'ease-out': true,
    };
    
</script>
<template>
    <div class="container mx-auto my-[100px]">
        <UIButton 
            :href="'/cars/'"
            :icon="true"
            class="mb-10"
        >Все авто</UIButton>
        <img class="rounded-xl mb-10 mx-auto" :alt="pageContent[0].title.rendered" :src="pageContent[0].acf.car_gallery[0].sizes.medium_large">
        <div class="flex">
            <div class=" flex flex-col w-1/2">
                <h1 class="font-mono text-6xl mb-[20px]">{{ pageContent[0].title.rendered }}</h1>
                <Cost :cost="pageContent[0].acf['8-14_day_rent']" />
            </div>
            <div class=" flex flex-col w-1/2">
                <div class="flex gap-x-3 mb-8">
                    <div :class="{ 'border-sky-400': tab == 0, ...classesTab }" @click="tab = 0">Доступные даты</div>
                    <div :class="{ 'border-sky-400': tab == 1, ...classesTab }" @click="tab = 1">подробнее о цене</div>
                    <div :class="{ 'border-sky-400': tab == 2, ...classesTab }" @click="tab = 2">характеристики</div>
                </div>
                <template v-if="tab == 0">
                    <DatePicker :car_id="pageContent[0].acf.car_id"/>
                </template>
                <template v-if="tab == 1">
                    <div class=" flex flex-col">
                        <div class="flex py-5">
                            <div class="w-1/2 text-lg text-neutral-600">Период аренды</div>
                            <div class="w-1/2 text-lg text-neutral-600">Стоимость</div>
                        </div>
                        <div class="flex py-5 border-b" v-if="pageContent[0].acf['1_day_rent']">
                            <div class="w-1/2 text-lg">до 1 дня</div>
                            <div class="w-1/2 text-lg">{{ pageContent[0].acf['1_day_rent'] }}</div>
                        </div>
                        <div class="flex py-5 border-b" v-if="pageContent[0].acf['2-3_day_rent']">
                            <div class="w-1/2 text-lg">2-3 дня</div>
                            <div class="w-1/2 text-lg">{{ pageContent[0].acf['2-3_day_rent'] }}</div>
                        </div>
                        <div class="flex py-5 border-b" v-if="pageContent[0].acf['4-7_day_rent']">
                            <div class="w-1/2 text-lg">4-7 дня</div>
                            <div class="w-1/2 text-lg">{{ pageContent[0].acf['4-7_day_rent'] }}</div>
                        </div>
                        <div class="flex py-5" :class="{ 'border-b': pageContent[0].acf['14_day_more_rent'] }" v-if="pageContent[0].acf['8-14_day_rent']">
                            <div class="w-1/2 text-lg">8-14 дней</div>
                            <div class="w-1/2 text-lg">{{ pageContent[0].acf['8-14_day_rent'] }}</div>
                        </div>
                        <div class="flex py-5" v-if="pageContent[0].acf['14_day_more_rent']">
                            <div class="w-1/2 text-lg">от 14 дней</div>
                            <div class="w-1/2 text-lg">{{ pageContent[0].acf['14_day_more_rent'] }}</div>
                        </div>
                    </div>
                </template>
                <template v-if="tab == 2">
                    <div class="flex flex-col gap-[20px]">
                        <div v-for="item in pageContent[0].acf.charactiristics_repeater" class="text-xl leading-7">
                            <div class="flex">
                                <div class="text-nowrap">{{ item.charactiristic_name }}</div>
                                <div class="w-full mx-1 border-b border-dashed border-neutral-600"></div>
                                <div class="text-nowrap">{{ item.charactiristic_value }}</div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>