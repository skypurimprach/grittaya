<template>
    <body>
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
    </body>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const video = ref<HTMLVideoElement | null>(null)
onMounted(() => {
    if (video.value) {
        const unmuteVideo = () => {
            video.value!.muted = false
            video.value!.play()
            document.removeEventListener('click', unmuteVideo)
        }
        document.addEventListener('click', unmuteVideo)
    }
})
</script>

<style scoped>
video {
    width: 1800px;
    height: 490px;
}
</style>
