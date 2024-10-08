<script setup>
    const {data} = useFetch('https://apa-auto.ru/wp-json/wp/v2/car?per_page=100')
    const page = 1
</script>
<template>
    <div class="item" v-for="item in data">
        <CarCard 
            :link="item.link" 
            :name="item.title.rendered" 
            :cost="item.acf"
            
        />
    </div>
    <UPagination :total="data.length" :model-value="1" :page-count="5"/>
</template>