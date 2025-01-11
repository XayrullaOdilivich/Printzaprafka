<script>
export default {
    name: "FooterPage",
};
</script>

<template>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="col-3">
                <img alt="" src="/assets/Image/img.png" />
            </div>
            <div class="col-3">
                <div class="title">Компания</div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">О нас</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Продажа и Бренды</a>
                    </li>
                </ul>
            </div>
            <div class="col-3">
                <div class="title">Контакты</div>
                <p>tafakkurxizmatsamarasimchj@gmail.com</p>
                <a href="tel:+998940511494">+998940511494</a> <br />
                <a href="https://www.google.com/maps/place//@41.2423931,69.2797347,52m/data=!3m2!1e3!4b1!4m6!1m5!3m4!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!8m2!3d41.2423889!4d69.2798333?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D">
                    Адрес Сиргалийский район, махалля Номданак, улица Файзли, дом 11.
                </a>
            </div>
            <div class="col-3">
                <div class="title">Вызов мастера</div>
                <p>
                    Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши
                    специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и
                    ремонта.
                </p>
                <a class="btn" href="/registration">На Выезд</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Footer qoplamasi */
.wrapper {
    background-color: #3c3e50;
    padding: 20px 0;
}

.container-fluid {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    color: white;
}

.col-3 {
    flex: 1 1 20%;
    margin: 10px;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 15px;
    min-height: 50px;
}

.btn {
    background-color: #1a2e60;
    color: white;
    padding: 10px 30px;
}

.btn:hover {
    background-color: #1a2e80;
}

img {
    max-width: 100%;
    height: auto;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* RESPONSIVE DESIGN */

/* Mobil uchun (576px dan kichik ekranlar) */
@media (max-width: 576px) {
    .container-fluid {
        flex-direction: column;
        align-items: center;
    }

    .col-3 {
        max-width: 100%;
        margin: 10px 0;
        text-align: center;
    }

    .btn {
        width: 100%;
        text-align: center;
    }
}

/* Planshet uchun (768px dan kichik ekranlar) */
@media (max-width: 768px) {
    .container-fluid {
        flex-wrap: wrap;
        justify-content: center;
    }

    .col-3 {
        max-width: 45%; /* Yarim ekran kengligi */
        margin: 10px;
    }
}

/* O'rta o'lchamli ekranlar uchun (992px dan kichik ekranlar) */
@media (max-width: 992px) {
    .col-3 {
        max-width: 30%; /* Uchdan bir ekran kengligi */
    }
}
</style>
