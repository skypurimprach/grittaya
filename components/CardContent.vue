<template>
    <body>
        <p
            class="Content"
            style="
                font-weight: 700;
                line-height: 1;
                font-size: 24px;
                text-align: center;
                color: #0f4722;
            "
        >
            บทความที่น่าสนใจ
        </p>
        <div class="centered-line-container">
            <svg height="50" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
        <div class="grid-container">
            <div
                v-for="(card, index) in cards"
                :key="index"
                class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
                <img class="card-img" :src="card.image" alt="" />
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold text-[#0F4722]">
                        {{ card.title }}
                    </h5>
                    <p
                        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                    >
                        {{ card.description }}
                    </p>
                    <div class="flex justify-center">
                        <button
                            type="button"
                            style="width: 13rem"
                            class="text-white bg-[#0F4722] hover:bg-green-900 focus:ring-2 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            อ่านต่อ
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div class="centered-line-container">
            <svg height="50" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="100%" y2="10" />
            </svg>
        </div>
    </body>
</template>

<script setup lang="ts">
const cards = [
    {
        title: 'พิธีไหว้ดาวพฤหัสย้ายราศี',
        description:
            'เพื่อความเป็นสิริมงคล และขอพรจากพระพฤหัสบดี ให้กลับร้ายกลายเป็นดี แม้นดีอยู่แล้วก็ให้ดียิ่งขึ้น สมปราถนาทุกประการ ซึ่งดาวพฤหัสบดี จะย้ายจากราศีเมษเข้าสู่ราศีพฤษภ จนถึงวันที่ 13 พฤษภาคม 2568 ส่งผลให้แต่ละราศี...',
        image: '/images/content1.jpg',
        link: '#',
    },
    {
        title: 'เอาบุญมาฝาก',
        description:
            'คุณเกรส ชิดชลธาร เจ้าของกฤตธยา และ อาจารย์หนุ่ม อัญญาน้อย ไทเลย ผู้ร่วมก่อตั้ง เป็นประธานร่วมในพิธีบรรจุพระบรมสารีริกธาตุในองค์พระประธานอุโบสถ วัดป่ากิตติญาณ์ อ.ภูเวียง จ.ขอนแก่น และในโอกาสนี้ กฤตธยาได้เจ้า...',
        image: '/images/content2.jpg',
        link: '#',
    },
    {
        title: '“พิธีหุงสีผึ้งเมตตามหานิยม” ตามแบบโบราณ ',
        description:
            'เพื่อประโยชน์ในการอนุเคราะห์ผู้ที่มีจิตศรัทธาต่อศาสนาและคุณพ่อแม่คุณครูบาอาจารย์ผู้ประสิทธิ์ประสาทวิชา ด้วยพระเวทย์คาถาอันเป็นคุณ ให้ซื้อง่ายขายคล่องกำไรงาม การแสดงร้องรำทำเพลงคนนิยมชมชอบ เมตตาเอ็นดู...',
        image: '/images/content3.jpg',
        link: '#',
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
    width: 300px;
    margin: 0.5rem 1rem;
    border-radius: 20px;
}

.card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
</style>
