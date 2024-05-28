<template>
    <body>
        <p class="Content text-center text-[#0f4722] text-3xl font-bold mt-5">
            สินค้าและบริการ
        </p>
        <div class="centered-line-container">
            <svg height="50" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <div class="flex justify-center">
            <div class="grid-container">
                <div
                    v-for="(card, index) in cards"
                    :key="index"
                    class="card w-64 h-64 max-w-sm p-6"
                    :style="{ 'background-image': `url('${card.image}')` }"
                >
                    <h5 class="mb-2 text-2xl font-bold text-white">
                        {{ card.title }}
                    </h5>
                    <p class="font-normal text-white line-clamp-10">
                        {{ card.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="centered-line-container mt-5">
            <svg height="50" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
    </body>
</template>

<script setup lang="ts">
const cards = [
    {
        title: 'ผู้ให้บริการจัดงานพิธี',
        description:
            'ผู้ให้บริการจัดงานพิธี งานบายศรี หรืองานบวงสรวงต่าง ๆ และให้คำปรึกษาในศาสตร์และศิลป์แขนงต่างๆ ที่สอนโดยผู้เชี่ยวชาญจากศาสตร์แต่ละแขนงครบวงจร ',
        image: '/images/services/service1.jpg',
    },
    {
        title: 'รับทำบายศรีโบราณ และเครื่องบวงสรวง',
        description:
            'รับทำบายศรี โบราณ และเครื่อง บวงสรวง โดย อ.หนุ่ม อัญญาน้อย ไทเลย และคณะ',
        image: '/images/services/service2.jpg',
    },
    {
        title: 'จำหน่ายผลิตภัณฑ์ เครื่องสักการะ',
        description:
            'จัดจำหน่ายผลิตภัณฑ์และเครื่องสักการะแบบโบราณไทย ในโอกาสต่างๆให้การทำบุญเป็นเรื่องง่ายด้วยชุดสังฆทาน จากกฤตธยา สวย ประณีต และใช้ประโยชน์ได้จริง',
        image: '/images/services/service3.jpg',
    },
    {
        title: 'ดูดวง',
        description:
            'ดูดวงไพยิปซี ดูดวงตามราศี โหราศาสตร์ เรื่องการงาน การเงิน ความรัก สุขภาพ โชคลาภ บริวาร โดย อ.หนุ่ม อัญญาน้อย ไทเลย',
        image: '/images/services/service4.jpg',
    },
]
</script>

<style scoped>
.centered-line-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
}
svg {
    width: 70%;
    height: auto;
}
line {
    stroke: #0f4722;
    stroke-width: 2;
}
.grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card {
    background-size: cover;
    width: 244.14px;
    height: 403.13px;
    margin: 0.5rem 1rem;
    border-radius: 10px;
}
</style>
