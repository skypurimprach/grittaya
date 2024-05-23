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
            <div class="image-container">
                <img alt="" :src="`${item}`" class="swiper-image" />
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
const items = [
    '/images/slide1.png',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
]
</script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ensures the container takes up the full height of the slide */
    background-color: white; /* Set background color to green */
}

.swiper-image {
    width: 1000px; /* Set your desired width */
    height: 450px; /* Set your desired height */
    object-fit: cover; /* Ensures the image covers the area without distortion */
}
</style>
