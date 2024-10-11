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
    <div class="container mx-auto">
        <template v-if="data">
            <div class="grid grid-cols-3 gap-[20px] mt-[100px] mb-10">
                <div class="item rounded-2xl overflow-hidden" v-for="item in carList" :key="item.id">
                    <CarCard 
                        :link="item.slug" 
                        :name="item.title.rendered" 
                        :cost="item.acf['8-14_day_rent']"
                        :img="item.acf.car_gallery[0].sizes.large"
                    />
                </div>
            </div>
            <div v-if="maxPages > 1" class="mx-auto w-full my-10">
                <UPagination class="items-center justify-center" v-model="page" :page-count="9" :total="maxPages"/>
            </div>
        </template>
    </div>
</template>