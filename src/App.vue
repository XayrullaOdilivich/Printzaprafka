<template>
  <div class="app">
    <!-- Navbar -->
    <NavbarPage />

    <!-- Asosiy kontent -->
    <main class="main-content">
        <router-view />
    </main>

    <!-- Footer -->
    <FooterPage />
  </div>
</template>

<script>
import NavbarPage from "@/views/NavbarPage.vue";
import FooterPage from "@/views/FooterPage.vue";
import SalesBrandPage from "@/views/SalesBrandPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import BrandPage from "@/views/BrandPage.vue";
import CommitPage from "@/views/CommitPage.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import Home_1Component from "@/components/Home_1Component.vue";
import HomePage from "@/views/HomePage.vue";

export default {
  name: "App",
  components: {
      HomePage,
      Home_1Component,
      HomeComponent,
      ServicesComponent,
      CommitPage,
      BrandPage,
      AboutPage,
      ServicesPage,
    SalesBrandPage,
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

