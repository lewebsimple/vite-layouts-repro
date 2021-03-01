import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "pages-generated";
import { setupLayouts } from "layouts-generated";
import App from './App.vue'

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);
const router = createRouter({ history: createWebHistory(), routes });
app.use(router);

app.mount("#app");
