import QuoteCategory from "@/views/QuoteCategory.vue"
import ShowQuote from "@/views/ShowQuote.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: QuoteCategory,
    },
    {
        path: '/quote',
        name: 'Quote',
        component: ShowQuote,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router