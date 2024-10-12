<script setup lang="ts" async>
    import { DatePicker as VCalendarDatePicker } from 'v-calendar';
    import 'v-calendar/dist/style.css';
    import * as auth from "..//auth.json";
    let data = null;
    type DateRange = { start: Date; end: Date };
    const props = defineProps({
        modelValue: {
            type: [Date, Array] as PropType<Date | DateRange | null>,
            default: null
        },
        car_id: {
            type: String,
            default: undefined,
        }
    });
    const emit = defineEmits(['update:model-value', 'close']);
    const date = computed({
        get: () => props.modelValue,
        set: (value) => {
        emit('update:model-value', value);
        emit('close');
        }
    });
    const attrs = {
        transparent: true,
        borderless: true,
        color: 'primary',
        'is-dark': { selector: 'html', darkClass: 'dark' },
        'first-day-of-week': 2,
    };
    const params = computed(() => {
        return {
            status: 'draft',
            acf_format: 'standard',
            _embed: true,
            per_page: 100,
            meta_key: 'rent_car_post_id',
            meta_value: props.car_id
            // meta_query: JSON.stringify([{
            //     key: 'rent_car_post_id',
            //     value: props.car_id,
            //     compare: '=',
            //     type: 'CHAR'
            // }])
        }
    });
    const authHeader = 'Basic ' + btoa(`${auth.user}:${auth.password}`);
    try {
        data = await $fetch<IRent[]>(`https://apa-auto.ru/wp-json/wp/v2/rent_posts`, {
            params: params.value,
            headers: {
                'Authorization': authHeader
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
</script>
<template>
    <!-- <div class="" v-for="item in data">
        {{ item.meta_query }}
    </div> -->
    <VCalendarDatePicker  v-model.range="date" :columns="2" v-bind="{ ...attrs, ...$attrs }" />
</template>
<style>
    :root {
        --vc-gray-50: rgb(var(--color-gray-50));
        --vc-gray-100: rgb(var(--color-gray-100));
        --vc-gray-200: rgb(var(--color-gray-200));
        --vc-gray-300: rgb(var(--color-gray-300));
        --vc-gray-400: rgb(var(--color-gray-400));
        --vc-gray-500: rgb(var(--color-gray-500));
        --vc-gray-600: rgb(var(--color-gray-600));
        --vc-gray-700: rgb(var(--color-gray-700));
        --vc-gray-800: rgb(var(--color-gray-800));
        --vc-gray-900: rgb(var(--color-gray-900));
    }

    .vc-primary {
        --vc-accent-50: rgb(var(--color-primary-50));
        --vc-accent-100: rgb(var(--color-primary-100));
        --vc-accent-200: rgb(var(--color-primary-200));
        --vc-accent-300: rgb(var(--color-primary-300));
        --vc-accent-400: rgb(var(--color-primary-400));
        --vc-accent-500: rgb(var(--color-primary-500));
        --vc-accent-600: rgb(var(--color-primary-600));
        --vc-accent-700: rgb(var(--color-primary-700));
        --vc-accent-800: rgb(var(--color-primary-800));
        --vc-accent-900: rgb(var(--color-primary-900));
    }
</style>
