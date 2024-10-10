<script setup lang="ts">
    const maxPages = ref<number>(1)
    const page = ref<number>(1)
    const params = computed(() => {
        return {
            page: page.value,
            per_page: 9,
            acf_format: 'standard',
            _embed: true,
        }
    })
    const data = await $fetch<ICar[]>(`https://apa-auto.ru/wp-json/wp/v2/car`, {
        params: params.value,
        onResponse: (context) => {
            maxPages.value = parseInt(context.response.headers.get("X-WP-Total" ) || '1')
        }
    })

    const test = $fetch<any>('')

    const carList = ref<ICar[] | null>(data)

    watch(page, async () => {
        carList.value = await $fetch<ICar[]>(`https://apa-auto.ru/wp-json/wp/v2/car`, {
            params: params.value
        })
    })
</script>
<template>
    <div class="container">
        <template v-if="data">
            <div class="items">
                <div class="item" v-for="item in carList" :key="item.id">
                    <CarCard 
                        :link="item.link" 
                        :name="item.title.rendered" 
                        :cost="item.acf['8-14_day_rent']"
                        :img="item.acf.car_gallery[0].sizes.large"
                    />
                </div>
            </div>
            <div v-if="maxPages > 1" class="paginate">
                <UPagination v-model="page" :page-count="9" :total="maxPages"/>
            </div>
        </template>
    </div>
</template>
<style lang="scss">
    .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .container {
        width: clamp(1173.33333px, 91.66667vw, 1760px);
        max-width: 100%;
        margin: 0 auto;
    }
    .paginate {
        width: 100%;
        margin: 20px auto 50px;
        div {
            align-items: center;
            justify-content: center;
        }
    }
</style>