<template>
    <div class="flex justify-center">
        <div class="pb-2 w-full mx-12 xl:w-[1060px]">
            <div
                class="pb-2 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"
            >
                <button
                    type="button"
                    class="text-white text-3xl font-semibold bg-[#0f4722] w-[170px] h-[50px] rounded-full"
                >
                    น้ำอบไทย
                </button>
            </div>

            <div class="w-full">
                <div
                    class="flex-wrap bg-[#A2C3AD] flex flex-rows rounded-xl p-6 gap-5 relative w-full h-full pb-20 max-sm:pb-5 max-lg:justify-center"
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

                            <h2
                                class="title text-[#0f4722] font-semibold text-lg"
                            >
                                {{ item.title }}
                            </h2>
                            <p class="content text-gray-400">
                                {{ item.content }}
                            </p>
                            <div class="card-actions justify-center">
                                <NuxtLink
                                    :to="`/details/productNO/${item.id}`"
                                    v-if="item.id !== 3"
                                >
                                    <button
                                        :class="[
                                            'btn',
                                            'text-white',
                                            'text-sm',
                                            'btn-xs',
                                            'w-[180px]',
                                            'h-[35px]',
                                            'rounded-full',
                                            'bg-[#0f4722]',
                                        ]"
                                    >
                                        ชมสินค้า
                                    </button>
                                </NuxtLink>
                                <button
                                    v-if="item.id === 3"
                                    :class="[
                                        'btn',
                                        'text-white',
                                        'text-sm',
                                        'btn-xs',
                                        'w-[180px]',
                                        'h-[35px]',
                                        'rounded-full',
                                        'cursor-not-allowed',
                                    ]"
                                    disabled
                                >
                                    สินค้าเร็วๆนี้
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute bottom-2 right-10 max-sm:static max-sm:flex max-sm:justify-center"
                    >
                        <NuxtLink to="/MoreProduct/all_namob">
                            <button
                                class="btn text-black text-sm bg-white btn-xs w-[120px] h-[35px] rounded-full"
                            >
                                ดูเพิ่มเติม
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
