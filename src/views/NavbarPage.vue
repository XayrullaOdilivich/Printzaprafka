<script>
export default {
  name: "NavbarPage",
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-black">
    <div class="container-fluid">
      <div class="logo">
        <img src="@/assets/Image/img.png" alt="">
      </div>
      <a class="navbar-brand" href="#">Главная</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Услуги</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Продажа и Бренды</a>
          </li>
        </ul>
        <button type="button" class="btn">Large button</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container-fluid {
  background-color: #3a3e50;
}

.btn {
  border: 2px solid blue;
  color: white;
  background-color: transparent;
  padding: 5px 20px;
  margin-right: 350px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.btn:hover {
  border: 2px solid blue;
  color: white;
  transform: scale(1.1);
}

.navbar a {
  color: white !important;
}

img {
  width: 140px;
  margin-right: 550px;
  margin-left: 300px;
}
</style>

