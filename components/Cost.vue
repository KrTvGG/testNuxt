<script lang="ts" setup>
    defineProps<{
        cost: number,
    }>()
</script>
<template>
    <div class="cost">от {{ cost }} <span>/ сут</span></div>
</template>