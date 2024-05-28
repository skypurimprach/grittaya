<template>
    <div class="bg-[#0f4722] p-10"></div>
    <div class="video-box">
        <video class="w-full h-auto max-w-full" autoplay muted controls>
            <source src="/src/video.mp4" type="video/mp4" />
        </video>
    </div>
    <p class="Title bg-[#0f4722] text-center font-semibold text-[#f7ce66] p-5">
        กฤตธยา (Grittaya) รับจัดงานบวงสรวง งานราชพิธีจำหน่ายเครื่องสังฆทาน<br />
        รับงานบายศรี และเครื่องสักการะแบบโบราณไทย ในโอกาสต่างๆ
    </p>
</template>

<script setup lang="ts"></script>

<style scoped>
.video-box {
    display: flex;
    justify-content: center;
    background-color: #0f4722;
}

video {
    width: 1200px;
    height: 490px;
}
</style>
