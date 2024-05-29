<template>
    <Swiper
        :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperPagination,
            SwiperNavigation,
        ]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :navigation="true"
        :pagination="true"
        :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
        }"
        :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }"
    >
        <SwiperSlide v-for="(item, i) in items" :key="i">
            <div
                class="image-container flex justify-center items-center h-full bg-white"
            >
                <img alt="" :src="`${item}`" class="swiper-image" />
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
const items = [
    '/images/slides/slide1.png',
    '/images/slides/slide2.png',
    '/images/slides/cover1.png',
    '/images/slides/cover2.png',
    '/images/slides/cover3.png',
]
</script>

<style scoped>
@media (max-width: 1024px) {
    .swiper-image {
        max-width: 800px;
        max-height: 360px;
    }
}

@media (max-width: 768px) {
    .swiper-image {
        max-width: 600px;
        max-height: 270px;
    }
}

@media (max-width: 480px) {
    .swiper-image {
        max-width: 100%;
        max-height: 200px;
    }
}

/* Custom styles for Swiper navigation buttons */
::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
    @apply text-[#0f4722];
}

@media (max-width: 768px) {
    ::v-deep .swiper-button-next,
    ::v-deep .swiper-button-prev {
        @apply text-white;
    }
}
</style>
