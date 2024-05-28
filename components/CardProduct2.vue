<template>
    <div
        class="text-white bg-[#0f4722] text-center text-3xl font-semibold w-[182px] h-[40px] rounded-full ml-56"
    >
        น้ำอบไทย
    </div>
    <div
        class="card-container flex flex-wrap gap-5 justify-center bg-[#A2C3AD] mt-5 p-5 m-auto relative w-[1076px] h-[500px] p-[18px 15px 23px 15px] rounded-3xl gap-6"
    >
        <div class="card w-80" v-for="(item, index) in data.namob" :key="index">
            <div
                class="card-body bg-white rounded-3xl mt-5 my-5 w-[324px] h-[385px]"
            >
                <figure>
                    <img :src="item.image" class="card-image rounded-3xl" />
                </figure>
                <h2 class="card-title text-[#0f4722] font-semibold">
                    {{ item.title }}
                </h2>
                <p class="des text-[#919191]">{{ item.content }}</p>
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

        <button
            class="btn-next absolute bottom-2 right-5 bg-white text-[#0f4722] text-xs w-[130px] h-[22px] rounded-full px-2 cursor-pointer font-semibold"
        >
            ดูเพิ่มเติม
        </button>
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
