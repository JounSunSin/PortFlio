import { createApp } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import Router from './routers/index.js';

const app = createApp(App);

app.use(Vuex);
app.use(Router);
app.mount('#app');
