<script setup lang="ts">
    function transliterate(text: string): string {
        const translitMap: { [key: string]: string } = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
            'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
            'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
            'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '',
            'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
            'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo',
            'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
            'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
            'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch', 'Ъ': '',
            'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
        };
        return text
            .split('')
            .map(char => translitMap[char] || char)
            .join('')
            .replace(/\s+/g, '-');
    }
    const russianText = ref('');
    const transliteratedText = ref('');
    watch(russianText, (newValue) => {
        transliteratedText.value = transliterate(newValue.toLowerCase());
    });
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text.toLowerCase())
    };
    const handlePaste = (event: ClipboardEvent) => {
        event.preventDefault();
        const clipboardData = event.clipboardData;
        if (clipboardData) {
            const pastedText = clipboardData.getData('text');
            russianText.value = pastedText;
        }
    };
</script>

<template>
    <div class="container  mx-auto mt-10">
        <UIButton 
            to="/" 
            :icon="true"
            class="mb-10"
        >К списку проектов</UIButton>
        <div class="items">
            <textarea v-model="russianText" type="text" placeholder="Введите текст на русском" @paste="handlePaste" />
            <textarea v-model="transliteratedText" type="text" readonly @click="copyToClipboard(transliteratedText)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
    .items {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        max-width: 400px;
    }
    textarea {
        padding: 20px;
        border-radius: 20px;
        border: 2px solid #6ffff0;
        &[readonly] {
            cursor: pointer;
        }
    }
</style>
