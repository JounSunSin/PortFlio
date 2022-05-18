import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from './routers/index';
import globleMethod from './js/common';
import 'aos/dist/aos.css';

const app = createApp(App);

app.use(globleMethod);
app.use(Vuex);
app.use(Router);
app.mount('#app');
