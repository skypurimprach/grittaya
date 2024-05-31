<template>
    <div class="bg-[#083718] text-white w-full px-4 md:px-20">
        <div
            class="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start lg:h-[120px]"
        >
            <div
                class="flex flex-col items-center md:flex-row gap-4 mt-2 h-full"
            >
                <img
                    src="/images/gritt.png"
                    width="120"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    class="fill-current"
                />
                <div
                    class="mt-16 max-md:mt-10 text-center md:text-left pl-6 h-full"
                >
                    ที่อยู่
                    <br />
                    <div class="text-xs">
                        88/8 หมู่ 12, ตำบลศิลา อำเภอเมืองขอนแก่น
                        <br />จังหวัดขอนแก่น 40000
                    </div>
                </div>
            </div>
            <div class="h-full flex flex-col gap-6 justify-center">
                <div class="h-1/2 mt-8">
                    <nav
                        class="gap-10 flex flex-col items-center md:flex-row mt-5 md:mt-0"
                    >
                        <nuxt-link
                            class="nav-link text-white p-2 rounded-md transition-colors no-underline hover:text-[#eddf82] text-center"
                            exact-active-class="active-link"
                            to="/"
                            >หน้าแรก</nuxt-link
                        >
                        <nuxt-link
                            class="nav-link text-white p-2 rounded-md transition-colors no-underline hover:text-[#eddf82] text-center"
                            exact-active-class="active-link"
                            to="/product"
                            >สินค้าและบริการ</nuxt-link
                        >
                        <nuxt-link
                            class="nav-link text-white p-2 rounded-md transition-colors no-underline hover:text-[#eddf82] text-center"
                            exact-active-class="active-link"
                            to="/aboutus"
                            >เกี่ยวกับเรา</nuxt-link
                        >
                    </nav>
                </div>
                <div class="h-1/2">
                    <div class="icon flex gap-5 max-md:mt-14 justify-end">
                        <a
                            href="https://www.facebook.com/grittaya8?locale=th_TH"
                        >
                            <img
                                class="img w-5 h-4.5 invert"
                                src="/images/icons/fb_black.png"
                            />
                        </a>
                        <a href="https://page.line.me/grittaya">
                            <img
                                class="img w-5 h-4.5 invert"
                                src="/images/icons/line_black.webp"
                            />
                        </a>
                        <a href="mailto:grittaya88@gmail.com">
                            <img
                                class="img w-5 h-4.5 invert"
                                src="/images/icons/gmail_black.png"
                            />
                        </a>
                        <a href="https://www.tiktok.com/@grittaya_official">
                            <img
                                class="img w-5 h-4.5 invert"
                                src="/images/icons/tiktok_black.png"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-2 border-1 border-white" />
        <div class="text-xs text-center md:text-left md:ml-6">
            © 2024 Grittaya. All rights reserved.
        </div>
        <br />
    </div>
</template>

<script setup lang="ts"></script>

<style>
.items {
    margin-left: 20px;
}
</style>
