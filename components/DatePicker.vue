<script setup lang="ts" async>
    import { DatePicker as VCalendarDatePicker } from 'v-calendar';
    import 'v-calendar/dist/style.css';
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
        'is-dark': { selector: 'html', darkClass: 'white' },
        'first-day-of-week': 2,
    };

    const parseDateString = (dateString: string): Date => {
        const [datePart, timePart] = dateString.split(' ');
        const [day, month, year] = datePart.split('.').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        return new Date(year, month - 1, day, hours, minutes);
    };

    const data = await $fetch<ICarRent[]>(`https://apa-auto.ru/wp-json/v1/rents-car/${props.car_id}`, {})

    let rents: Array<{start: Date, end: Date}> = [];

    data.forEach(function(rent) {
        rents.push({
            start: parseDateString(rent.acf_fields.rent_car_start_date),
            end: parseDateString(rent.acf_fields.rent_car_end_date)
        });
    });
    
</script>
<template>
    <VCalendarDatePicker 
        v-model.range="date" 
        :columns="1"
        :disabled-dates="rents"
        is-required
        v-bind="{ ...attrs, ...$attrs }" />
</template>
<style lang="scss">
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
        --vc-day-content-disabled-color: #6B6E71;
    }
    .vc-day-content {
        --vc-text-sm: 18px;
        line-height: 18px;
        &.vc-disabled {
            cursor: auto;
            pointer-events: none;
        }
    }
    .vc-weekdays {
        --vc-text-sm: 18px;
        line-height: 18px;
        .vc-weekday-7, .vc-weekday-1 {
            color: #1790FF;
        }
    }
    .vc-container {
        --vc-color: #FFF;
        background-color: #2A2C32;
        .weekday-7, .weekday-1 {
            color: #1790FF;
        }
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
