import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../components/my_home.vue')
    },
    {
        path: '/skill',
        name: 'skill',
        component: () => import(/* webpackChunkName: "about" */ '../components/my_skill.vue')
    },
    {
        path: '/website',
        name: 'website',
        component: () => import(/* webpackChunkName: "about" */ '../components/my_site.vue')
    },
    {
        path: '/phone',
        name: 'phone',
        component: () => import(/* webpackChunkName: "about" */ '../components/my_phone.vue')
    },
    {
        path: '',
        name: 'nav',
        component: () => import(/* webpackChunkName: "about" */ '../components/my_nav.vue')
    }
]
    
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;