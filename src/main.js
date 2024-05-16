import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',        name: 'Home',       component: Home },
        { path: '/about',   name: 'About',      component: About },
        { path: '/contact', name: 'Contact',    component: Contact},
    ],
});

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
