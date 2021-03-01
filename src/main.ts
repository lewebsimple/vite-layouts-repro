import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import generatedRoutes from "pages-generated";
import App from './App.vue'

const app = createApp(App);

// With vite-plugin-vue-layouts
import { setupLayouts } from "layouts-generated";
const routes = setupLayouts(generatedRoutes);
const router = createRouter({ history: createWebHistory(), routes });

// Without vite-plugin-vue-layouts
//const router = createRouter({ history: createWebHistory(), routes: generatedRoutes  });

app.use(router);

app.mount("#app");
