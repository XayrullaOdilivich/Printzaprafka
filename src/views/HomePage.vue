<script>
import HomeComponent from "@/components/HomeComponent.vue";
import Home_1Component from "@/components/Home_1Component.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import BrandPage from "@/views/BrandPage.vue";
import RegistrationPage from "@/views/RegistrationPage.vue";
import CommitPage from "@/views/CommitPage.vue";
import Home_2Component from "@/components/Home_2Component.vue";
import Home_3Component from "@/components/Home_3Component.vue";

export default {
    name: "HomePage",
    components: {
        Home_3Component,
        Home_2Component,
        CommitPage,
        RegistrationPage, BrandPage, ServicesComponent, AboutComponent, Home_1Component, HomeComponent}
}
</script>

<template>

        <HomeComponent />
        <Home_1Component />
        <AboutComponent />
        <Home_2Component />
        <Home_3Component />
        <div class="page">
            <ServicesComponent />
            <BrandPage />
        </div>
        <RegistrationPage />
        <CommitPage />
</template>

<style scoped>

</style>