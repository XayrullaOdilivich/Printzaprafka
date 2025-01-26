<script>
export default {
    name: "FooterPage",
};
</script>

<template>
    <div class="container-fluid">
        <div class="col-3">
            <img alt="" src="/assets/Image/img.png" />
        </div>
        <div class="col-3">
            <div class="title">Компания</div>
            <ul class="navbar-nav company">
                <li class="nav-item">
                    <a class="nav-link" href="/about">О нас</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/services">Услуги</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/sales-brand">Продажа и Бренды</a>
                </li>
            </ul>
        </div>
        <div class="col-3 contact">
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
</template>

<style scoped>
.container-fluid {
    background-color: #3a3e50;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
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


@media (max-width: 576px) {
    .container-fluid {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
    }

    .title {
        margin: 0 30%;
    }

    .company {
        margin: 0 25%;
        padding: 0;
    }

    .col-3 {
        width: 100%;
        flex: 1 1 calc(50% - 20px);
    }

    .btn {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .container-fluid {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .col-3 {
        flex: 1 1 calc(50% - 20px);
        max-width: 100%;
    }

    .btn {
        width: 80%;
        margin: 0 auto;
    }
}

@media (max-width: 992px) {
    .col-3 {
        flex: 1 1 calc(33.33% - 20px);
    }

    .btn {
        width: auto;
    }
}
</style>
