<template>
    <nuxt-link to="/">
        <button class="bg-blue-200 p-1">go index</button>
    </nuxt-link>
    <Card :data="anime"></Card>

    {{ anime }}
</template>

<script setup lang="ts">
import type { image } from '../../../models/images'
const route = useRoute()
const { $axios }: any = useNuxtApp()
const id = ref<any>(route.params.id)
console.log(id.value)

const anime = ref<image>({
    id: 0,
    url: '',
    tags: [],
})

const getData = async () => {
    const resp: any = $axios.get(
        `https://api.nekosapi.com/v3/images/${id.value}`,
    )
    const data = resp.data
    const name = data.tags.map((tag: any) => tag.name)
    anime.value.id = data.id
    anime.value.url = data.image_url
    anime.value.tags = name

    console.log(data)
}

onMounted(() => {
    getData()
})
</script>

<style scoped></style>
