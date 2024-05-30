<template>
    <div class="p-10">
        <p class="text-2xl font-semibold text-[#0F4722] mb-4">
            สินค้า กฤตธยา เครื่องบวงสรวงและงานฝีมือเอกลักษณ์ไทย
        </p>
        <div class="text-gray-400">
            <div class="flex gap-4 mb-2">
                <NuxtLink to="/"> <div>หน้าหลัก</div></NuxtLink>
                >
                <NuxtLink to="/items"><div>สินค้า</div></NuxtLink>
                >
                <div>รายละเอียดสินค้า</div>
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

                <div class="row-span-2 col-span-2">
                    <div class="col-span-4 flex justify-center">
                        <a href="https://page.line.me/grittaya">
                            <button
                                type="button"
                                class="w-[468px] text-white bg-[#0F4722] hover:bg-green-800 focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                สั่งซื้อสินค้า
                            </button></a
                        >
                    </div>
                    <div class="bg-white flex justify-center">
                        <a
                            href="https://www.facebook.com/grittaya8?locale=th_TH"
                        >
                            <button
                                type="button"
                                class="w-[230px] text-[#0F4722] hover:text-white border border-[#0F4722] hover:bg-[#0F4722] focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Facebook
                            </button></a
                        >
                        <a href="https://www.tiktok.com/@grittaya_official">
                            <button
                                type="button"
                                class="w-[230px] text-[#0F4722] hover:text-white border border-[#0F4722] hover:bg-[#0F4722] focus:ring-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Tiktok
                            </button></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataNO } from '~/data/DataNO.js'
const { namob } = getDataNO()

const route = useRoute()
const itemId = route.params.id

const item = ref<any>()
onMounted(() => {
    // ใช้ itemId เพื่อค้นหาข้อมูลสินค้าที่ตรงกับ ID ที่กำหนด
    item.value = namob.find((item) => item.id === itemId)
})
</script>

<style scoped></style>
