<template>
    <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-10">
        บทความที่น่าสนใจ
    </p>
    <svg class="stroke-2 stroke-[#0f4722] h-3 w-full">
        <line x1="0" y1="10" x2="100%" y2="10" />
    </svg>
    <div
        class="card-container grid flex-wrap gap-5 justify-center mt-5 p-5 sm:p-10 md:p-20 mx-auto relative max-w-[1076px]"
    >
        <div
            class="card w-full sm:w-80 md:w-96"
            v-for="(item, index) in data.cardcontent"
            :key="index"
        >
            <div
                class="card-body bg-white border border-gray-200 rounded-xl mt-0 my-5"
            >
                <figure>
                    <img
                        :src="item.image"
                        class="card-image rounded-xl object-cover h-[200px]"
                    />
                </figure>
                <h2
                    class="card-title text-lg sm:text-xl md:text-2xl font-semibold mt-3"
                >
                    {{ item.title }}
                </h2>
                <p class="text-sm sm:text-base md:text-lg mt-2">
                    {{ item.description }}
                </p>
                <div class="card-actions justify-center mt-4">
                    <button
                        class="btn text-white text-sm sm:text-base md:text-lg bg-[#0f4722] w-full sm:w-auto h-[35px] rounded-full"
                    >
                        อ่านเพิ่มเติม
                    </button>
                </div>
            </div>
        </div>
    </div>
    <svg class="stroke-2 stroke-[#0f4722] h-3 w-full">
        <line x1="0" y1="10" x2="100%" y2="10" />
    </svg>
</template>

<script setup lang="ts">
import { getDataCardContent } from '~/data/DataCardContent.js'
const { cardcontent } = getDataCardContent()
const data = {
    cardcontent,
}
</script>

<style scoped>
.card-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.card {
    width: 100%;
}
</style>
