<template>
    <div>
        <p
            class="Content text-center text-[#0f4722] text-3xl font-semibold mt-10"
        >
            สังฆทาน
        </p>
        <div class="sm:p-10 md:p-20 mx-auto relative">
            <div class="card-container grid flex-wrap gap-5 justify-center">
                <div
                    class="card w-full sm:w-80 md:w-96"
                    v-for="(item, index) in data.ALLskt"
                    :key="index"
                >
                    <div
                        class="card-body bg-white border border-gray-200 rounded-xl mt-0 my-5"
                    >
                        <figure>
                            <img
                                :src="item.image"
                                class="card-image rounded-xl w-full h-[200px] sm:h-[250px] object-cover"
                            />
                        </figure>
                        <h2 class="card-title text-lg sm:text-xl md:text-2xl">
                            {{ item.title }}
                        </h2>
                        <p class="text-sm sm:text-base md:text-lg">
                            {{ item.content }}
                        </p>
                        <div class="card-actions flex justify-center mt-2">
                            <NuxtLink
                            :to="`/details/productSKT/${item.id}`"
                        >
                            <button
                                class="btn text-white text-sm bg-[#0f4722] btn-xs w-[180px] h-[35px] rounded-full"
                            >
                                ชมสินค้า
                            </button>
                        </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataALLSKT } from '~/data/DataALLSKT.js'
const { ALLskt } = getDataALLSKT()
const data = {
    ALLskt,
}

const route = useRoute()
const itemId = route.params.id

const item = ref<any>()

onMounted(() => {
    item.value = ALLskt.find((item) => item.id === itemId)
})
</script>

<style scoped>
.card-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.card {
    width: 100%;
}
</style>
