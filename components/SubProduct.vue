<template>
    <div>
        <h1 class="text-2xl font-bold text-[#0F4722] p-10">สินค้าแนะนำ</h1>

        <div
            class="card-container flex flex-wrap gap-5 justify-center m-auto relative w-[1076px] h-[500px] p-[18px 15px 23px 15px] rounded-3xl gap-6"
        >
            <div
                class="card w-80"
                v-for="(item, index) in data.pml"
                :key="index"
            >
                <div
                    class="card-body bg-white border border-gray-200 rounded-lg shadow mt-5 my-5 w-[324px] h-[385px]"
                >
                    <figure>
                        <img :src="item.image" class="card-image rounded-lg" />
                    </figure>
                    <h2 class="card-title text-[#0f4722] font-semibold">
                        {{ item.title }}
                    </h2>
                    <p>{{ item.content }}</p>
                    <div class="card-actions justify-center">
                        <button
                            class="btn text-white text-sm bg-[#0f4722] btn-xs w-[180px] h-[35px] rounded-full"
                        >
                            ชมสินค้า
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-4">
        <button
            type="button"
            class="text-[#0F4722] hover:text-white border border-[#0F4722] hover:bg-[#0F4722] focus:ring-2 rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 font-semibold"
        >
            ชมสินค้าเพิ่มเติม
        </button>
    </div>
</template>

<script setup lang="ts">
import { getDataPML } from '~/data/DataPML.js'
const { pml } = getDataPML()
const data = {
    pml,
}
</script>

<style scoped></style>
