<template>
    <div class="video-box w-full flex justify-center">
        <video
            ref="video"
            class="w-full h-auto max-w-full"
            autoplay
            muted
            controls
        >
            <source src="/src/video.mp4" type="video/mp4" />
        </video>
    </div>
    <p
        class="Title text-lg color text-[#f7ce66] p-2.5 text-center bg-[#0f4722]"
    >
        กฤตธยา (Grittaya) รับจัดงานบวงสรวง งานราชพิธีจำหน่ายเครื่องสังฆทาน
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
