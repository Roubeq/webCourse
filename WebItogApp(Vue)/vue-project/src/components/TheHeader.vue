<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <RouterLink to ="/">
    <div class="image-up"></div>
    </RouterLink>
    <header id="main-header" class="site-header" data-role="navigation">
        <nav>
            <RouterLink to = "/courses">View Courses</RouterLink>
            <RouterLink to ="/info">View Info</RouterLink>
        </nav>
    </header>
    <RouterView/>
</template>

<style scoped>
    .site-header {
        position: absolute;
        height: 75px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        top: 0;
    }

        .site-header nav a {
            margin-right: 15px;
            text-decoration: none;
            color: #000;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
        }

    .image-up {
        width: 222px;
        height: 186px;
        background-image: url('@/assets/logo.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
    }
</style>
