<template>
    <div class="justify-center">
        <div class="text-center text-[#0f4722] text-3xl font-bold mt-5">
            สังฆทาน
        </div>
        <div class="flex justify-center items-center w-full h-[50px]">
            <svg
                class="w-[70%] h-auto"
                height="50"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <div class="flex-wrap flex flex-rows p-10 justify-center gap-5">
            <div v-for="(item, index) in data.skt" :key="index">
                <div
                    class="card-body bg-white border-gray-200 shadow rounded-xl w-[324px] h-[385px]"
                >
                    <div>
                        <img
                            :src="item.image"
                            class="image w-[280px] h-[192px] rounded-xl"
                        />
                    </div>

                    <h2 class="title text-[#0f4722] font-semibold text-lg">
                        {{ item.title }}
                    </h2>
                    <p class="content text-gray-400">
                        {{ item.content }}
                    </p>
                    <div class="card-actions justify-center">
                        <NuxtLink :to="`/details/productSKT/${item.id}`">
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
</template>

<script setup lang="ts">
import { getDataSKT } from '~/data/DataSKT.js'
const { skt } = getDataSKT()
const data = {
    skt,
}
</script>

<style scoped>
line {
    stroke: #0f4722;
    stroke-width: 2;
}
</style>