<template>
    <div class="p-10">
        <p class="text-2xl font-semibold text-[#0F4722] mb-4">
            สินค้า กฤตธยา เครื่องบวงสรวงและงานฝีมือเอกลักษณ์ไทย
        </p>
        <div class="text-gray-400">
            <div class="flex gap-4 mb-2">
                <NuxtLink to="/">
                    <div class="hover:text-[#0f4722] font-medium">
                        หน้าหลัก
                    </div></NuxtLink
                >
                >
                <div class="text-[#0f4722] font-semibold">รายละเอียดสินค้า</div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="md:col-span-1" v-if="item">
                <img :src="item.image_detail" class="rounded-lg w-full" />
            </div>
            <div class="md:col-span-1 grid grid-cols-1 gap-10" v-if="item">
                <div>
                    <h1 class="text-2xl font-bold text-[#0F4722] mb-2">
                        {{ item.title }}
                    </h1>
                    <h2 class="text-gray-400 mb-2">
                        {{ item.content }}
                    </h2>
                    <h2 class="text-gray-400 mt-10">
                        {{ item.howto }}
                    </h2>
                    <h2 class="text-gray-400">{{ item.warning }}</h2>
                </div>
                <div class="buy">
                    <div class="flex flex-col">
                        <div>
                            <nuxtLink
                                to="https://page.line.me/grittaya"
                                class="w-full flex justify-center"
                            >
                                <button
                                    type="button"
                                    class="max-w-[360px] w-full text-white bg-[#0F4722] hover:bg-green-800 focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                >
                                    สั่งซื้อสินค้า
                                </button></nuxtLink
                            >
                        </div>
                        <div class="flex justify-center">
                            <div
                                class="flex justify-center gap-1 max-w-[360px] w-full"
                            >
                                <div class="w-full">
                                    <NuxtLink
                                        to="https://www.facebook.com/grittaya8?locale=th_TH"
                                        class="w-full"
                                    >
                                        <button
                                            type="button"
                                            class="max-w-[175px] w-full text-[#0F4722] hover:text-white border border-[#0F4722] hover:bg-[#0F4722] focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Facebook
                                        </button></NuxtLink
                                    >
                                </div>
                                <div class="w-full">
                                    <NuxtLink
                                        to="https://www.tiktok.com/@grittaya_official"
                                        class="w-full"
                                    >
                                        <button
                                            type="button"
                                            class="max-w-[175px] w-full text-[#0F4722] hover:text-white border border-[#0F4722] hover:bg-[#0F4722] focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                        >
                                            Tiktok
                                        </button></NuxtLink
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataSKT } from '~/data/DataSKT.js'
const { skt } = getDataSKT()

const route = useRoute()
const itemId = route.params.id

const item = ref<any>()
onMounted(() => {
    // ใช้ itemId เพื่อค้นหาข้อมูลสินค้าที่ตรงกับ ID ที่กำหนด
    item.value = skt.find((item) => item.id === itemId)
})
</script>

<style scoped></style>
