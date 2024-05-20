<template>
    <header class="footer flex p-1 bg-[#0f4722] text-white">
        <aside class="items-center flex flex-col">
            <nav class="nav">
                <img
                    src="C:\Users\WINDOWS 11\Desktop\internship\internship\images\gritt.png"
                    width="100"
                    height="100"
                    margin-left="0"
                    display="block"
                />
            </nav>
            <h2>© 2024 Grittaya. All rights reserved.</h2>
        </aside>

        <h2>
            <br />
            ที่อยู่<br />88/8 หมู่ 12, ตำบลศิลา อำเภอเมืองขอนแก่น
            <br />จังหวัดขอนแก่น 40000
        </h2>
        <nav
            class="nav justify-between gap-4"
            style="position: absolute; right: 0"
        >
            <nuxt-link
                class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/"
                >หน้าแรก</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/product"
                >สินค้าและบริการ</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/aboutus"
                >เกี่ยวกับเรา</nuxt-link
            >
            <br />
            <nuxt-link
                class="nav-link text-white p2 rounded-md transition-colors no-underline hover:text-[#eddf82]"
                exact-active-class="active-link text-[#eddf82]"
                to="/contactus"
                >ติดต่อเรา</nuxt-link
            >
            <h1></h1>
            <h1></h1>
        </nav>
    </header>
</template>

<script setup lang="ts"></script>

<style>
.logo {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
