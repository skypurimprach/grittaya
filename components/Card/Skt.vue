<template>
    <div class="flex justify-center">
        <div class="pb-2">
            <div
                class="pb-2 max-sm:flex max-sm:justify-center max-md:flex max-md:justify-center"
            >
                <button
                    type="button"
                    class="text-white text-3xl font-semibold bg-[#0f4722] w-[170px] h-[50px] rounded-full"
                >
                    สังฆทาน
                </button>
            </div>

            <div class="flex justify-center">
                <div
                    class="flex-wrap bg-[#A2C3AD] flex flex-rows rounded-xl p-6 justify-center gap-5 relative h-full pb-20 max-sm:pb-5"
                >
                    <div
                    v-for="(item, index) in data.skt" :key="index"
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
                                    :to="`/details/productSKT/${item.id}`"
                                >
                                    <button
                                        class="btn text-white text-sm bg-[#0f4722] btn-xs w-[180px] h-[35px] rounded-full"
                                    >
                                        ชมสินค้า
                                    </button>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div
                        class="absolute bottom-2 right-10 max-sm:static max-sm:flex max-sm:justify-center"
                    >
                        <NuxtLink to="/MoreProduct/all_skt"
                            ><button
                                class="btn text-black text-sm bg-white btn-xs w-[120px] h-[35px] rounded-full mb-4"
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
import { getDataSKT } from '~/data/DataSKT.js'
const { skt } = getDataSKT()
const data = {
    skt,
}
</script>

<style scoped></style>