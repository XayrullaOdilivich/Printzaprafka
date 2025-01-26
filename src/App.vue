<template>
  <div class="app">
    <!-- Navbar -->
    <NavbarPage />
    <!-- Asosiy kontent -->
        <router-view />

      <div class="phone-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M6.62,10.79A15.464,15.464,0,0,0,13.21,17.38l2.11-2.11a1,1,0,0,1,1.09-.21,11.644,11.644,0,0,0,3.62,1,1,1,0,0,1,1,.99v3.67a1,1,0,0,1-1,1A19.974,19.974,0,0,1,2.5,3.5a1,1,0,0,1,1-1H7.17a1,1,0,0,1,1,.99,11.644,11.644,0,0,0,1,3.62,1,1,0,0,1-.21,1.09L6.62,10.79Z"></path>
          </svg>
      </div>
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* Gorizontal scrollni yo'q qilish */
}
/* Telefon ikonka */
.phone-icon {
    position: fixed;
    bottom: 20px; /* Ekranning pastidan 20px yuqorida */
    right: 30px; /* O'ng tomondan 20px ichkarida */
    background-color: #3a3e50;
    color: white !important;
    border: none;
    border-radius: 50%;
    width: 60px; /* Ikonkaning o'lchami */
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    box-shadow: 0 8px 20px rgba(0, 0, 255, 1);
    cursor: pointer;
    z-index: 30;
    transition: transform 0.3s ease;
    animation: pulse 2s infinite ease-in-out;
}


footer {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  background-color: #3c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  transition: bottom 0.3s ease-in-out;
}

footer.visible {
  bottom: 0;
}


@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 8px 20px rgba(0, 0, 255, 1);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 12px 60px mediumblue;
    }
    100% {
        transform: scale(1);
        box-shadow: 0 8px 20px rgba(0, 0, 255, 1);
    }
}
</style>

