<template>
    <div
        v-if="store.$state.openSidebar"
        class="h-screen relative flex flex-col md:hidden"
    >
        <div
            class="modal-overlay absolute top-0 w-full h-full bg-black/40"
            @click="store.$state.openSidebar = !store.$state.openSidebar"
        ></div>
        <div class="w-[300px] absolute top-0 right-0 bg-[#0f4722] h-full">
            <div class="flex flex-col">
                <img src="/images/gritt.png" class="w-32 mt-4 self-center" />

                <div class="flex flex-col text-center gap-10 text-xl mt-10">
                    <nuxt-link
                        class="nav-link text-white hover:text-yellow-400"
                        to="/"
                        >หน้าแรก</nuxt-link
                    >

                    <nuxt-link
                        class="nav-link text-white hover:text-yellow-400"
                        to="/product"
                        >สินค้าและบริการ</nuxt-link
                    >
                    <nuxt-link
                        class="nav-link text-white hover:text-yellow-400"
                        to="/aboutus"
                        >เกี่ยวกับเรา</nuxt-link
                    >
                
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineStore } from 'pinia'
import { useIndexStore } from '~/store/main'

const store = useIndexStore()
</script>

<style scoped></style>
