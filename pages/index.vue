<script setup>
    const {data} = useFetch('https://apa-auto.ru/wp-json/wp/v2/car');
</script>
<template>
    <div class="item" v-for="item in data">
        {{item.title.rendered}}
    </div>
</template>