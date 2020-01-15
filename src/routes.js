import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from './views/Work'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/work',
            name: 'home',
            component: Work
        },
        {
            path: '/editing',
            name: 'editing',
            component: () => import('./views/Editing.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/',
            name: 'Home',
            component: () => import('./views/Abida.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact.vue')
        },
        {
            path: '/*',
            name: '404',
            component: () => import('./views/NotFound.vue')
        }
    ]
})