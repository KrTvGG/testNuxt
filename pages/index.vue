<template>
    <div class="container  mx-auto mt-10">
        <div class="flex gap-5 flex-wrap">
            <UIButton to="/transliterated">Транслитерация</UIButton>
            <UIButton to="/cars">APA-AUTO</UIButton>
        </div>
    </div>
</template>
<style>
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>