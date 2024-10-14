<script lang="ts" setup>
    interface IUIButton {
        type?: 'submit' | 'button',
        to?: string,
        href?: string,
        icon?: boolean,
        icon_position?: 'left' | 'right',
    }
    const {
        type,
        to,
        href,
        icon,
        icon_position = 'left',
    } = defineProps<IUIButton>()
    const buttonClassList = {
        'w-fit': true,
        'uppercase': true,
        'flex': true,
        'justify-between': icon,
        'text-xl': true,
        'border-2': true,
        'rounded-full': true,
        'border-teal-gray': true,
        'ease-in': true,
        'cursor-pointer': !href,
        'py-5': true,
        'px-3.5': true,
        'hover:border-sky-400': true,
        'transition': true,
        'duration-150': true,
        'relative': true,
        'overflow-hidden': true,
        'items-center': true
    }
</script>

<template>
    <button v-if="type" :type="type" :class="{ ...buttonClassList }">
        <span v-if="icon && icon_position == 'left'" class="icon arrow-btn-icon mr-[50px]"></span>
        <slot></slot>
        <span v-if="icon && icon_position == 'right'" class="icon arrow-btn-icon ml-[50px] rotate-180"></span>
    </button>
    <NuxtLink v-else-if="to" :to="to" :class="{ ...buttonClassList }">
        <span v-if="icon && icon_position == 'left'" class="icon arrow-btn-icon mr-[50px]"></span>
        <slot></slot>
        <span v-if="icon && icon_position == 'right'" class="icon arrow-btn-icon ml-[50px] rotate-180"></span>
    </NuxtLink>
    <a v-else-if="href" :href="href" :class="{ ...buttonClassList }">
        <span v-if="icon && icon_position == 'left'" class="icon arrow-btn-icon mr-[50px]"></span>
        <slot></slot>
        <span v-if="icon && icon_position == 'right'" class="icon arrow-btn-icon ml-[50px] rotate-180"></span>
    </a>
    <div v-else :class="{ ...buttonClassList }">
        <span v-if="icon && icon_position == 'left'" class="icon arrow-btn-icon mr-[50px]"></span>
        <slot></slot>
        <span v-if="icon && icon_position == 'right'" class="icon arrow-btn-icon ml-[50px] rotate-180"></span>
    </div>
</template>


<style lang="scss">
    .icon {
        display: inline-block;
        width: 1em;
        aspect-ratio: 1;
        -webkit-mask-image: var(--svg);
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
        mask-image: var(--svg);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        background-color: currentColor;
        vertical-align: middle;
    }
    .arrow-btn-icon {
        --svg: url("data:image/svg+xml,%3Csvg width='9' height='14' viewBox='0 0 9 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 13L1 7L8 1' stroke='white'/%3E%3C/svg%3E%0A");
    }
    // --svg: url("data:image/svg+xml,");
</style>
