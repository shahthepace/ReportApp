import {createWebHistory, createRouter} from "vue-router";
import Home from "./Pages/Home.vue";
import About from "./Pages/About.vue";

const routes = [];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
