<template>
    <br />
    <div
        class="text-white bg-[#0f4722] text-center text-xl w-24 h-7 rounded-lg ml-32"
    >
        พวงมาลัย
    </div>
    <div
        class="card-container flex flex-wrap gap-5 justify-center bg-[#A2C3AD] rounded-3xl mt-5 p-5 max-w-7xl m-auto relative"
    >
        <div class="card w-80" v-for="(item, index) in data.pml" :key="index">
            <figure>
                <img :src="item.image" />
            </figure>
            <div class="card-body bg-white rounded-3xl mt-5 my-5">
                <h2 class="card-title">{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <div class="card-actions justify-center">
                    <button
                        class="btn text-white bg-[#0f4722] btn-xs sm:btn-sm md:btn-md lg:btn-xs"
                    >
                        ชมสินค้า
                    </button>
                </div>
            </div>
        </div>
        <button
            class="btn-next absolute bottom-5 right-5 bg-white text-[#0f4722] rounded-3xl px-2 cursor-pointer"
        >
            ดูเพิ่มเติม
        </button>
    </div>
    <br />
</template>

<script setup lang="ts">
import { getDataPML } from '~/data/DataPML.js'
const { pml } = getDataPML()
const data = {
    pml,
}
</script>

<style scoped></style>
