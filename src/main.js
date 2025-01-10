import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import * as BootstrapVue from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.config.globalProperties.$AOS = AOS;

app.use(router);
app.use(BootstrapVue);

app.mount('#app');

AOS.init();
