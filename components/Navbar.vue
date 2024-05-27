<template>
    <header
        class="header flex p-1 bg-[#0f4722] text-white h-[65px] fixed w-full z-10"
    >
        <div class="flex justify-between">
            <div class="flex gap-4">
                <img src="/images/gritt lay.png" />
            </div>
        </div>
        <!-- <aside class="items-center grid-flow-col">
            <nav
                class="nav grid-flow-col gap-10 flex"
                style="text-align: right"
            >
                <img class="ml-6 h-[53px]" src="/images/gritt lay.png" />
            </nav>
        </aside> -->
        <nav class="gap-10 flex mt-3" style="position: absolute; right: 0">
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
.active-link {
    color: #eddf82;
}
</style>
