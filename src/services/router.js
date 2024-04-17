import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import Page1 from '../pages/Page1.vue';
import Page2 from '../pages/Page2.vue';
import Page3 from '../pages/Page3.vue';


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/page1',
        name: 'Page1',  // Nom de la route
        component: Page1  // Composant à afficher
    },
    {
        path: '/page2',
        name: 'Page2',  // Nom de la route
        component: Page2  // Composant à afficher
    },
    {
        path: '/page3',
        name: 'Page3',  // Nom de la route
        component: Page3  // Composant à afficher
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;