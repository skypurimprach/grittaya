<template>
    <br />
    <p class="Content text-center text-[#0f4722] text-3xl font-bold">
        เครื่องบวงสรวงและงานฝีกมือเอกลักษณ์ไทย
    </p>

    <div
        class="text-white bg-[#0f4722] text-center text-3xl font-semibold w-[182px] h-[40px] rounded-full ml-56 mt-10"
    >
        พวงมาลัย
    </div>
    <div
        class="card-container flex flex-wrap gap-5 justify-center bg-[#A2C3AD] mt-5 p-5 m-auto relative w-[1076px] h-[500px] p-[18px 15px 23px 15px] rounded-3xl gap-6"
    >
        <div class="card w-80" v-for="(item, index) in data.pml" :key="index">
            <div
                class="card-body bg-white rounded-3xl mt-5 my-5 w-[324px] h-[385px]"
            >
                <figure>
                    <img :src="item.image" class="card-image rounded-3xl" />
                </figure>
                <h2 class="card-title">{{ item.title }}</h2>
                <p>{{ item.content }}</p>
                <div class="card-actions justify-center">
                    <NuxtLink :to="`/details/productPML/${item.id}`">
                        <button
                            class="btn text-white text-sm bg-[#0f4722] btn-xs w-[180px] h-[35px] rounded-full"
                            to="/detail"
                        >
                            ชมสินค้า
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <button
            class="btn-next absolute bottom-2 right-5 bg-white text-[#0f4722] text-xs w-[130px] h-[22px] rounded-full px-2 cursor-pointer"
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
