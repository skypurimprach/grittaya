<template>
    <div class="bg-red-500">
        <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-10">
            เครื่องบวงสรวงและงานฝีมือเอกลักษณ์ไทย
        </p>
        <hr class="my-2 border-2 border-[#0f4722]" />
        <div class="w-full flex mt-5 justify-start ml-52">
            <div
                class="flex justify-center text-white text-2xl bg-[#0f4722] btn-xs w-[20%] h-[35px] rounded-full"
            >
                พวงมาลัย
            </div>
        </div>
        <div
            class="mt-5 sm:p-10 md:p-20 mx-auto relative max-w-[1076px] bg-[#A2C3AD] rounded-3xl"
        >
            <div class="card-container grid flex-wrap gap-5 justify-center">
                <div
                    class="card w-full sm:w-80 md:w-96"
                    v-for="(item, index) in data.pml"
                    :key="index"
                >
                    <div
                        class="card-body bg-white rounded-xl mt-5 my-5 w-full h-[385px] sm:h-auto"
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
                            <nuxt-link
                                class="btn text-white text-sm bg-[#0f4722] btn-xs sm:text-base md:text-lg w-full sm:w-auto h-[35px] rounded-full"
                                to="/detail"
                            >
                                ชมสินค้า
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex justify-end">
                <nuxt-link
                    class="btn flex justify-center bg-white text-sm text-[#0f4722] btn-xs w-[20%] h-[35px] rounded-full"
                    to="/product"
                >
                    ดูเพิ่มเติม
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataPML } from '~/data/DataPML.js'
const { pml } = getDataPML()
const data = {
    pml,
}
</script>

<style scoped>
.card-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.card {
    width: 100%;
}
</style>
