<template>
    <header class="header">
        <div class="logo">กฤตธยา</div>
        <nav class="nav">
            <nuxt-link class="nav-link" exact-active-class="active-link" to="/"
                >หน้าแรก</nuxt-link
            >
            <nuxt-link
                class="nav-link"
                exact-active-class="active-link"
                to="/product"
                >สินค้าและบริการ</nuxt-link
            >
            <nuxt-link
                class="nav-link"
                exact-active-class="active-link"
                to="/aboutus"
                >เกี่ยวกับเรา</nuxt-link
            >
            <nuxt-link
                class="nav-link"
                exact-active-class="active-link"
                to="/contactus"
                >ติดต่อเรา</nuxt-link
            >
        </nav>
    </header>
</template>

<script setup lang="ts"></script>

<style>
.header,
.nav-link {
    font-family: 'Athiti', sans-serif;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #0f4722;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    color: #eddf82;
}

.active-link {
    color: #eddf82;
}
</style>
