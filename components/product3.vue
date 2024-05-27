<template>
    <div
        class="text-white bg-[#0f4722] text-center text-lg sm:text-xl md:text-2xl font-semibold w-[182px] h-[40px] rounded-full mx-auto mt-10"
    >
        สังฆทาน
    </div>
    <div
        class="card-container grid flex-wrap gap-5 justify-center mt-5 sm:p-10 md:p-20 mx-auto relative max-w-[1076px] bg-[#A2C3AD] rounded-3xl"
    >
        <div
            class="card w-full sm:w-80 md:w-96"
            v-for="(item, index) in data.skt"
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

        <button
            class="btn flex justify-center bg-white text-sm text-[#0f4722] btn-xs sm:text-base md:text-lg w-full sm:w-auto h-[35px] rounded-full"
        >
            ดูเพิ่มเติม
        </button>
    </div>
</template>

<script setup lang="ts">
import { getDataSKT } from '~/data/DataSKT.js'
const { skt } = getDataSKT()
const data = {
    skt,
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
