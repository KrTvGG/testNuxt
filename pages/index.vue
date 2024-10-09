<script setup lang="ts">
    interface ICar {
        link: string,
        title: {
            rendered: string,
        },
        acf: {
            "8-14_day_rent": number,
        },
        
    }
    const {data} = useFetch<ICar[]>('https://apa-auto.ru/wp-json/wp/v2/car?per_page=100')
    const page = ref<number>(1)
</script>
<template>
    <template v-if="data">
        <div class="item" v-for="item in data">
            <CarCard 
                :link="item.link" 
                :name="item.title.rendered" 
                :cost="item.acf['8-14_day_rent']"
            />
        </div>
        <UPagination :total="data?.length" :model-value="page" :page-count="5"/>
    </template>
</template>