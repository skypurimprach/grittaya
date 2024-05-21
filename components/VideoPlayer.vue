<template>
    <body>
        <div class="video-box">
            <video class="w-full h-auto max-w-full" autoplay muted controls>
                <source src="/src/video.mp4" type="video/mp4" />
            </video>
        </div>
        <p
            class="Title"
            style="
                line-height: 1;
                text-align: center;
                background-color: #0f4722;
            "
        >
            กฤตธยา (Grittaya) รับจัดงานบวงสรวง งานราชพิธีจำหน่ายเครื่องสังฆทาน
            รับงานบายศรี และเครื่องสักการะแบบโบราณไทย ในโอกาสต่างๆ
        </p>
    </body>
</template>

<script setup lang="ts"></script>

<style scoped>
p {
    font-family: 'Athiti', sans-serif;
    font-weight: 600;
    font-style: normal;
    color: #f7ce66;
    padding: 10px;
    margin-top: px;
}

.video-box {
    display: flex;
    justify-content: center;
    background-color: #0f4722;
}

video {
    width: 1550px;
    height: 490px;
}

body {
    background-color: #0f4722;
}
</style>
