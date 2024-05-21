<template>
    <body>
        Slide show
        <div>
            <VideoPlayer />
        </div>
        Content
    </body>
</template>

<script setup lang="ts">
import VideoPlayer from '@/components/VideoPlayer.vue'
</script>

<style scoped>
body {
    background-color: white;
}
</style>
