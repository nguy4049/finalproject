import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Wildlife from "./components/Wildlife.vue";
import NotFound404 from "./components/NotFound404.vue";
import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0, left: 0 }
    },
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Welcome to my site!'
            }
        },
        {
            path: '/about-me',
            name: 'AboutMe',
            component: About,
            meta: {
                title: 'About me'
            }
        },
        {
            path: '/wildlife',
            name: 'Wildlife',
            component: Wildlife,
            meta: {
                title: 'Wildlife'
            }
        },
        {
            path: "/:catchAll(.*)",
            name: 'NotFound',
            component: NotFound404,
        },
    ],
})

// "Navigation guard"
router.beforeEach((to, from) => {
    let title = to.meta?.title ?? 'Default Title'
    document.title = title + ' | ' + 'Long Nguyen'
})

export default router