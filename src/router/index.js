import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: "/services",
    name: "Services",
    component: () => import('@/views/ServicesPage.vue')
  },
  { path: "/sales-brand",
    name: "SalesBrand",
    component: () => import('@/views/SalesBrandPage')
  },
  {
    path: "/brand",
    name: "Brand",
    component: () => import('@/views/BrandPage')
  },
  {
    path: "/commit",
    name: "Commit",
    component: () => import('@/views/CommitPage')
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import('@/views/RegistrationPage')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
