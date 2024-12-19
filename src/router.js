import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Wildlife from "./components/Wildlife.vue";
import Event from "./components/Event.vue";
import Resources from "./components/Resources.vue";
import Possum from "./components/Possum.vue";
import NotFound404 from "./components/NotFound404.vue";
import WildlifeDetails from "./components/extra/WildlifeDetails.vue";



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
            path: '/possum',
            name: 'Possum',
            component: Possum,
            meta: {
                title: 'Possum'
            }
        },
        {
            path: '/event',
            name: 'Event',
            component: Event,
            meta: {
                title: 'Event'
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
            path: '/resources',
            name: 'Resources',
            component: Resources,
            meta: {
                title: 'Resources'
            }
        },
        {
            path: '/wildlife',
            name: 'Wildlife',
            component: Wildlife,
            children: [
                {
                path: 'details/:id',
                name: 'WildlifeDetails',
                component: WildlifeDetails
                }
            ]
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