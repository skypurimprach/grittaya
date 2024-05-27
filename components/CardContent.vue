<template>
    <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-10">
        บทความที่น่าสนใจ
    </p>
    <svg class="stroke-2 stroke-[#0f4722] h-3 w-full">
        <line x1="0" y1="10" x2="100%" y2="10" />
    </svg>
    <div
        class="card-container flex flex-wrap gap-5 justify-center mt-5 p-5 m-auto relative w-[1076px] h-[500px] p-[18px 15px 23px 15px] rounded-3xl gap-6"
    >
        <div
            class="card w-80"
            v-for="(item, index) in data.cardcontent"
            :key="index"
        >
            <div
                class="card-body bg-white border border-gray-200 rounded-3xl mt-0 my-5 w-[324px] h-[385px]"
            >
                <figure>
                    <img :src="item.image" class="card-image rounded-3xl" />
                </figure>
                <h2 class="card-title">{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <div class="card-actions justify-center">
                    <button
                        class="btn text-white text-sm bg-[#0f4722] btn-xs w-[180px] h-[35px] rounded-full"
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
