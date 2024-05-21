<template>
    <header
        class="footer flex p-1 bg-[#0f4722] text-white border rounded-t-[30px]"
    >
        <aside class="items-center grid-flow-col">
            <nav class="nav grid grid-flow-col gap-4" style="text-align: right">
                <img src="/images/gritt.png" width="60" height="60" />
            </nav>
        </aside>
        <h2>
            ที่อยู่<br />88/8 หมู่ 12, ตำบลศิลา อำเภอเมืองขอนแก่น
            <br />จังหวัดขอนแก่น 40000
        </h2>
        <nav class="nav" style="position: absolute; right: 0">
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
.footer,
.nav-link {
    font-family: 'Athiti', sans-serif;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav {
    align-items: right;
    gap: 1rem;
    justify-content: space-between;
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
