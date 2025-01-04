<template>
  <div class="app">
    <!-- Navbar -->
    <NavbarPage />

    <!-- Asosiy kontent -->
    <main class="main-content">
        <AboutPage />
    </main>

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script>
import NavbarPage from "@/views/NavbarPage.vue";
import FooterPage from "@/views/FooterPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import SalesBrandPage from "@/views/SalesBrandPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import AboutPage from "@/views/AboutPage.vue";

export default {
  name: "App",
  components: {
      AboutPage,
      ServicesPage,
    SalesBrandPage,
    RegistrationPage,
    NavbarPage,
    FooterPage,
  },
};
</script>

<style scoped>
/* Ilova qoplamasi */
.app {
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* Gorizontal scrollni yo'q qilish */
}

/* Asosiy kontent */
.main-content {
  flex: 1; /* O'rtadagi qism joyni to'ldiradi */
  padding: 20px;
}

/* Footerni yashirish */
footer {
  position: fixed;
  bottom: -100%; /* Tashqarida saqlash */
  left: 0;
  width: 100%;
  background-color: #3c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  transition: bottom 0.3s ease-in-out;
}

footer.visible {
  bottom: 0; /* Ko'rinadigan holat */
}
</style>

