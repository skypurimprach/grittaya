<template>
    <div class="bg-[#0f4722] h-[65px] t-0 w-full">
        <div class="flex justify-between items-center h-full">
            <nuxt-link to="/">
                <img src="/images/gritt-lay.png" class="w-48" />
            </nuxt-link>

            

            <div
                class="text-white block md:hidden mr-8 cursor-pointer"
                @click="store.$state.openSidebar = !store.$state.openSidebar"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-7 h-7 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </div>

            <div class="hidden md:flex gap-10 pr-8">
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
            </div>
        </div>
    </div>

    <!-- <header
        class="header flex p-1 bg-[#0f4722] text-white h-[65px] fixed w-full z-10"
    >
        <div class="flex justify-between">
            <div class="flex gap-4">
                <img src="/images/gritt-lay.png" />
            </div>
            <button class="hamburger-button md:hidden" aria-label="เปิดเมนู">
                <div class="dropdown dropdown-hover">
                    <button class="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                    <ul
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                    >
                        <nuxt-link class="text-black hover:text-gray-600" to="/"
                            >หน้าแรก</nuxt-link
                        >
                        <nuxt-link
                            class="text-black hover:text-gray-600"
                            to="/product"
                            >สินค้าและบริการ</nuxt-link
                        >
                        <nuxt-link
                            class="text-black hover:text-gray-600"
                            to="/aboutus"
                            >เกี่ยวกับเรา</nuxt-link
                        >
                        <nuxt-link
                            class="text-black hover:text-gray-600"
                            to="/contactus"
                            >ติดต่อเรา</nuxt-link
                        >
                    </ul>
                </div>
            </button>
        </div>
        <nav
            class="gap-10 flex mt-3 md:block md:mt-5 md:space-x-10 md-justify-end mr-10"
            :style="{ position: 'absolute', right: 0 }"
            :class="{ hidden: !isMenuOpen }"
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
    </header> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useIndexStore } from '~/store/main'

const store = useIndexStore()
// const isMenuOpen = ref(false)

// function toggleMenu() {
//     isMenuOpen.value = !isMenuOpen.value
// }
</script>

<style>
.active-link {
    color: #eddf82;
}
</style>
