<template>
    <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-10">
        สินค้าและบริการ
    </p>

    <hr class="my-2 border-2 border-[#0f4722]" />

    <div class="flex justify-center mt-10">
        <div
            class="grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
            <div
                v-for="(item, index) in service"
                :key="index"
                class="card w-[244px] h-[403px] max-w-sm p-6 bg-cover bg-center relative"
                :style="{ 'background-image': `url('${item.image}')` }"
            >
                <h5
                    class="mb-2 text-2xl font-semibold text-white dark:text-white"
                >
                    {{ item.title }}
                </h5>

                <p class="text-white font-medium">
                    {{ item.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataService } from '~/data/DataService.js'
const { service } = getDataService()
const data = {
    service,
}
</script>
