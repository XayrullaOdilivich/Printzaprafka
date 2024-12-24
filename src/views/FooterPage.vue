<script>
export default {
  name: "FooterPage"
}
</script>

<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="col-3">
        <img alt="" src="@/assets/Image/img.png">
      </div>
      <div class="col-3">
        <div class="title">Компания</div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="#">Услуги</a>
          </li>
          <li class="nav-item">
            <a aria-current="page" class="nav-link active" href="#">Продажа и Бренды</a>
          </li>
        </ul>
      </div>
      <div class="col-3">
        <div class="title">Контакты</div>
        <p>tafakkurxizmatsamarasimchj@gmail.com</p>
        <a href="tel:+998940511494">+998940511494</a> <br/>
        <a href="https://www.google.com/maps/place//@41.2423931,69.2797347,52m/data=!3m2!1e3!4b1!4m6!1m5!3m4!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!8m2!3d41.2423889!4d69.2798333?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D">
          Адрес
          Сиргалийский район, махалля Номданак, улица Файзли, дом 11.</a>
      </div>
      <div class="col-3">
        <div class="title">Вызов мастера</div>
        <p>
          Сломался ли ваш принтер или другая техника? Если у вас нет возможности привезти оборудование в мастерскую, наши
          специалисты готовы помочь! Все, что вам нужно сделать — это позвонить, и мы приедем к вам для диагностики и
          ремонта.
        </p>
        <button class="btn">На Выезд</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #3c3e50;
  padding: 20px 0;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: calc(100% - 600px);
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
</style>

