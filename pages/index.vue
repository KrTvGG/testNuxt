<script setup lang="ts">
    interface ISize {
        [key: string]: string; // Чтобы учесть динамические ключи и значения
    }
    interface ICarGalleryImage {
        ID: number;
        id: number;
        title: string;
        filename: string;
        filesize: number;
        url: string;
        link: string;
        alt: string;
        author: string;
        description: string;
        caption: string;
        name: string;
        status: string;
        uploaded_to: number;
        date: string;
        modified: string;
        menu_order: number;
        mime_type: string;
        type: string;
        subtype: string;
        icon: string;
        width: number;
        height: number;
        sizes: ISize; // Используем интерфейс ISize для размеров изображений
    }
    interface ICar {
        link: string,
        title: {
            rendered: string,
        },
        acf: {
            car_id: string; // Добавляем поле car_id
            car_gallery: ICarGalleryImage[]; // Используем массив ICarGalleryImage
            "8-14_day_rent": number,
        },
        
    }
    const page = ref<number>(1)
    const {data} = useFetch<ICar[]>(`https://apa-auto.ru/wp-json/wp/v2/car?per_page=9&paged=${page}&acf_format=standard`)

    const carList = ref<ICar[] | null>(data.value)

    watch(page, async () => {
        carList.value = await $fetch<ICar[]>(`https://apa-auto.ru/wp-json/wp/v2/car?per_page=9&paged=${page}&acf_format=standard`)
    })
</script>
<template>
    <div class="container">
        <template v-if="data">
            <div class="items">
                <div class="item" v-for="item in data">
                    <CarCard 
                        :link="item.link" 
                        :name="item.title.rendered" 
                        :cost="item.acf['8-14_day_rent']"
                        :img="item.acf.car_gallery[0].sizes.large"
                    />
                </div>
            </div>
            <UPagination :page-count="5" :total="data.length" :model-value="1"/>
            <!-- <UPagination :total="data?.length" :model-value="page" :page-count="5"/> -->
        </template>
    </div>
</template>
<style lang="scss">
    .items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(573px, 1fr));
        gap: 20px;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .container {
        width: clamp(1173.33333px, 91.66667vw, 1760px);
        max-width: 100%;
        margin: 0 auto;
    }
</style>