<template>
    <header class="header flex p-1 bg-[#0f4722] text-white">
        <aside class="items-center grid-flow-col">
            <nav
                class="nav grid grid-flow-col gap-10"
                style="text-align: right"
            >
                <img
                    src="C:\Users\WINDOWS 11\Desktop\grittaya_project\images\gritt lay.png"
                    width="130"
                    height="130"
                />
            </nav>
        </aside>
        <nav class="nav gap-10 flex" style="position: absolute; right: 0">
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
    </header>
</template>

<script setup lang="ts"></script>

<style>
.nav {
    display: flex;
}
.active-link {
    color: #eddf82;
}
</style>
