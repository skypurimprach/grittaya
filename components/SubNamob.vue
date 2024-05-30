<template>
    <div class="p-4 md:p-10">
        <p class="text-xl md:text-2xl font-bold text-[#0F4722] mb-2 md:mb-4">
            สินค้าแนะนำ
        </p>
        <div
            class="flex-wrap flex flex-rows rounded-xl p-10 justify-center gap-5 relative h-full pb-20"
        >
            <div v-for="(item, index) in data.namob" :key="index">
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
                        <NuxtLink :to="`/details/productNO/${item.id}`">
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
import { getDataNO } from '~/data/DataNO.js'
const { namob } = getDataNO()
const data = {
    namob,
}
</script>

<style scoped></style>
