<template>
    <div>
        <ImageSlide />
        <div>
            <VideoPlayer />
        </div>
        <br />
        <CardService />
        <p class="Content text-center text-[#0f4722] text-3xl font-bold mb-5">
            เครื่องบวงสรวงและงานฝีมือเอกลักษณ์ไทย
        </p>
        <CardPml />
        <test />
        <CardNamob />
        <CardBaisee />
        <CardSkt />

        <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-10">
            บทความที่น่าสนใจ
        </p>
        <div class="flex justify-center items-center w-full h-[50px]">
            <svg
                class="w-[70%] h-auto"
                height="50"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <CardContent />

        <Contact />
    </div>
</template>

<script setup></script>

<style scoped>
line {
    stroke: #0f4722;
    stroke-width: 2;
}
</style>
