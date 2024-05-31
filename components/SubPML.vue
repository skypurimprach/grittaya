<template>
    <div class="p-4 md:p-10">
        <p class="text-xl md:text-2xl font-bold text-[#0F4722] mb-2 md:mb-4">
            สินค้าแนะนำ
        </p>
        <div
            class="flex-wrap flex flex-rows rounded-xl p-5 justify-center gap-5 relative h-full pb-5"
        >
            <div
                v-for="(item, index) in pml.filter((e) => e.active == false)"
                :key="index"
            >
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
                        <NuxtLink :to="`/details/productPML/${item.id}`">
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
        <div class="flex justify-center items-center mt-5">
            <NuxtLink to="/MoreProduct/all_pml">
                <button
                    type="button"
                    class="w-[140px] h-[40px] text-black hover:text-white border border-[#0f4722] hover:bg-[#0f4722] font-medium rounded-lg px-5 text-center me-2 mb-2"
                >
                    ดูสินค้าเพิ่มเติม
                </button>
            </NuxtLink>
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

<style scoped></style>
