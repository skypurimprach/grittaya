<template>
    <div class="bg-[#0f4722] text-white w-full px-4 md:px-20">
        <div class="flex justify-between">
            <div class="flex gap-4">
                <img src="\images\gritt.png" width="120" />
                <div class="mt-10">
                    ที่อยู่
                    <br />
                    <div class="text-xs">
                        88/8 หมู่ 12, ตำบลศิลา อำเภอเมืองขอนแก่น
                        <br />จังหวัดขอนแก่น 40000
                    </div>
                </div>
            </div>
            <div class="w-[200px]">
                <nav
                    class="gap-10 flex mt-3"
                    style="position: absolute; right: 0"
                >
                    <nuxt-link
                        class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                        exact-active-class="active-link"
                        to="/"
                        >หน้าแรก</nuxt-link
                    >
                    <nuxt-link
                        class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                        exact-active-class="active-link"
                        to="/product"
                        >สินค้าและบริการ</nuxt-link
                    >
                    <nuxt-link
                        class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                        exact-active-class="active-link"
                        to="/aboutus"
                        >เกี่ยวกับเรา</nuxt-link
                    >
                    <nuxt-link
                        class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                        exact-active-class="active-link"
                        to="/contactus"
                        >ติดต่อเรา</nuxt-link
                    >
                    <br />
                </nav>
                <div class="flex gap-10 float-end">
                    <a href="https://www.facebook.com/grittaya8?locale=th_TH">
                        <img
                            class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                            src="/images/icon facebook black.png"
                        />
                    </a>
                    <a href="https://page.line.me/grittaya">
                        <img
                            class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                            src="/images/icon line black.webp"
                        />
                    </a>
                    <a href="grittaya88@gmail.com">
                        <img
                            class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                            src="/images/icon gmail black.png"
                        />
                    </a>
                    <a href="https://www.tiktok.com/@grittaya_official">
                        <img
                            class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                            src="/images/icon tiktok black.png"
                        />
                    </a>
                </div>
            </div>
        </div>
        <hr class="my-2 border-1 border-white" />
        <div class="text-xs ml-6">© 2024 Grittaya. All rights reserved.</div>
    </div>
</template>

<script setup lang="ts"></script>

<style>
.logo {
    font-size: 1.5rem;
    font-weight: bold;
}
.items {
    margin-left: 20px;
}
</style>
