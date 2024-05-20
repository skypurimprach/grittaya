<template>
    <nuxt-link :to="`/anime/${props.data.id}`">
        <div class="shadow-md rounded-lg p-4 hover:scale-105">
            <div>{{ props.data.id }}</div>
            <img :src="`${props.data.url}`" alt="" />
            <span v-for="(tag, indexTag) in props.data.tags" :key="indexTag">{{
                tag
            }}</span>
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">
interface image {
    url: string
    id: number
    tags: string[]
}
const props = defineProps({
    data: {
        type: Object as PropType<image>,
        required: true,
    },
})
</script>

<style scoped></style>
