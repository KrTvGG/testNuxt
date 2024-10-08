<script lang="ts" setup>
    defineProps<{
        cost: integer,
    }>()
</script>
<template>
    <div class="cost">от {{ cost }} <span>/ сут</span></div>
</template>