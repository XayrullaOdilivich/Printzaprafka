<template>
  <div class="container">
    <div class="form">
      <h1>Связаться с нами</h1>
      <div class="col-6">
        <form>
          <input class="form-control-lg" type="text" placeholder="Имя" aria-label=".form-control-lg example">
          <input class="form-control-lg" type="text" placeholder="Фамилия" aria-label=".form-control-lg example">
          <input class="form-control-lg" type="number" placeholder="+998 94 051 14 94" aria-label=".form-control-lg example">
          <button type="submit" class="form-button">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: none;
}

.form {
  width: 1000px;
  height: 450px;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 20px;
  background-color: #3c3e50;
  transition: transform 0.3s ease;
}

.form:hover {
  transform: scale(1.05);
}

input {
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #3c3e50;
  color: white;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #0056b3;
  outline: none;
}

/* Number input tugmalarini yashirish */
input[type="number"] {
  -moz-appearance: textfield; /* Firefox uchun */
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Chrome, Safari uchun */
  margin: 0; /* Tugmani olib tashlash */
}

/* Button uslubi */
.form-button {
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0056b3; /* Ko'k rang */
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.form-button:hover {
  transform: scale(1.05); /* Kattalashish */
  background-color: #007bff; /* Quyuqroq ko'k rang */
}

/* H1 uslubi */
h1 {
  margin: 15px;
  color: white;
  text-align: center;
  font-weight: bold; /* Qalin matn */
}
</style>

<script setup lang="ts">
</script>

