import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ServicesPage from "@/views/ServicesPage.vue";
import SalesBrandPage from "@/views/SalesBrandPage.vue";
import BrandPage from "@/views/BrandPage.vue";
import CommitPage from "@/views/CommitPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Services", component: ServicesPage },
  { path: "/sales-brand", name: "SalesBrand", component: SalesBrandPage },
  { path: "/brand", name: "Brand", component: BrandPage },
  { path: "/commit", name: "Commit", component: CommitPage },
  { path: "/registration", name: "Registration", component: RegistrationPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
