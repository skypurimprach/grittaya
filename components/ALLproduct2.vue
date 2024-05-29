<template>
    <div>
        <p
            class="Content text-center text-[#0f4722] text-3xl font-semibold mt-10"
        >
            น้ำอบไทย
        </p>
        <div class="sm:p-10 md:p-20 mx-auto relative">
            <div class="card-container grid flex-wrap gap-5 justify-center">
                <div
                    class="card w-full sm:w-80 md:w-96"
                    v-for="(item, index) in data.namob"
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
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataNO } from '~/data/DataNO.js'
const { namob } = getDataNO()
const data = {
    namob,
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
