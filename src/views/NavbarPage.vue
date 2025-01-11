<template>
    <nav class="navbar navbar-expand-lg bg-body-black">
        <div class="container-fluid">
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
        </div>
    </nav>
</template>

<style scoped>
/* Navbar asosiy dizayni */
.container-fluid {
    background-color: #3a3e50;
    display: flex;
    align-items: center;
    padding: 10px 20px;
}

/* Logo chap tomonda qoladi */
.logo img {
    width: 120px;
}

/* Navbar menyu tarkibi */
.navbar-nav {
    display: flex;
    justify-content: flex-end; /* Linklarni o'ng tomonga surish */
    align-items: center;
}

.nav-item {
    margin-left: 20px;
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

/* RESPONSIVE DESIGN */
@media (max-width: 576px) {
    .container-fluid {
        flex-direction: column;
        align-items: flex-start;
    }

    .logo img {
        width: 80px;
    }

    .navbar-nav {
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
    }

    .nav-item {
        margin: 5px 0;
    }

    .btn {
        margin: 10px 0;
        padding: 5px 15px;
    }
}

/* Planshet uchun (768px dan kichik ekranlar) */
@media (max-width: 768px) {
    .logo img {
        width: 100px;
    }

    .navbar-nav {
        justify-content: flex-end;
    }
}
</style>
