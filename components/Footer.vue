<template>
    <header class="footer flex p-1 bg-[#0f4722] text-white">
        <aside class="items">
            <nav class="nav gap-4">
                <img
                    class="img ml-6"
                    src="C:\Users\WINDOWS 11\Desktop\internship\internship\images\gritt.png"
                    width="80"
                    height="80"
                />
                <h3>
                    <br />
                    <span>ที่อยู่</span>
                    <br />
                    <span class="text-xs"
                        >88/8 หมู่ 12, ตำบลศิลา อำเภอเมืองขอนแก่น
                        <br />จังหวัดขอนแก่น 40000</span
                    >
                </h3>
            </nav>

            <h2 class="text-xs ml-6">© 2024 Grittaya. All rights reserved.</h2>
        </aside>

        <nav
            class="nav justify-between gap-10"
            style="position: absolute; right: 0"
        >
            <nuxt-link
                class="nav-link text-white p2 mt-2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/"
                >หน้าแรก</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 mt-2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/product"
                >สินค้าและบริการ</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 mt-2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/aboutus"
                >เกี่ยวกับเรา</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 mt-2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/contactus"
                >ติดต่อเรา</nuxt-link
            >
            <br />
        </nav>
        <div
            class="flex justify-between gap-10"
            style="position: absolute; right: 0"
        >
            <a href="https://www.facebook.com/grittaya8?locale=th_TH">
                <img
                    class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                    src="C:\Users\WINDOWS 11\Desktop\grittaya_project\images\icon facebook black.png"
                />
            </a>
            <a href="https://page.line.me/grittaya">
                <img
                    class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                    src="C:\Users\WINDOWS 11\Desktop\grittaya_project\images\icon line black.webp"
                />
            </a>
            <a href="grittaya88@gmail.com">
                <img
                    class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                    src="C:\Users\WINDOWS 11\Desktop\grittaya_project\images\icon gmail black.png"
                />
            </a>
            <a href="https://www.tiktok.com/@grittaya_official">
                <img
                    class="img w-5 h-4.5 invert mt-14 justify-end gap-4"
                    src="C:\Users\WINDOWS 11\Desktop\grittaya_project\images\icon tiktok black.png"
                />
            </a>
            <br />
        </div>
    </header>
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
