<template>
    <br />
    <div
        class="text-white bg-[#0f4722] text-center text-xl w-24 h-7 rounded-lg ml-6"
    >
        บายศรี
    </div>
    <div class="card-container flex flex-wrap gap-5 justify-center">
        <div
            class="card w-80"
            v-for="(item, index) in data.contentArray"
            :key="index"
        >
            <figure>
                <img :src="item.image" />
            </figure>
            <div class="card-body">
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
    </div>
    <contactmain></contactmain>
</template>

<script setup>
import { getContentData } from '@/data/contentData.js'
const { contentArray } = await getContentData()
const data = {
    contentArray,
}
</script>

<style scoped></style>
