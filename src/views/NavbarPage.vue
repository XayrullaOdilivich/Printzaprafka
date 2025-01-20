<script setup lang="ts">
</script>
<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-black">
            <!-- Logo chap tomonda qoladi -->
            <div class="logo">
                <img src="/assets/Image/img.png" alt="Logo" />
            </div>

            <!-- Burger menyu tugmasi (kichik ekranlar uchun) -->
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar ichidagi barcha linklar -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <!-- Главная link -->
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/about">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/services">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/sales-brand">Продажа и Бренды</a>
                    </li>
                </ul>
                <!-- Tugma -->
                <a class="btn" href="/registration">Вызвать мастера</a>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.container-fluid {
    background-color: #3a3e50;
    align-items: center;
    padding: 10px 20px;
}

.logo img {
    width: 120px;
    left: 250%;
}

.navbar-nav {
    align-items: center;
}

.nav-link {
    color: white !important;
    font-size: 16px;
    text-decoration: none;
}

/* O'ng tomondagi tugma */
.btn {
    border: 2px solid blue;
    color: white;
    background-color: transparent;
    padding: 5px 20px;
    margin-left: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.btn:hover {
    border: 2px solid blue;
    color: white;
    transform: scale(1.1);
}


</style>
