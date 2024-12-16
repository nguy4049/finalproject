import Home from "./components/Home.vue";
import About from "./components/About.vue";
import ContactMe from "./components/ContactMe.vue";
import NotFound404 from "./components/NotFound404.vue";
import {createRouter, createWebHistory} from 'vue-router'
import AllStudents from "./components/students/AllStudents.vue";
import StudentDetails from "./components/students/StudentDetails.vue";
import AllStudentsByLevel from "./components/students/AllStudentsByLevel.vue";
import StudentsSearchResults from "./components/students/StudentsSearchResults.vue";

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
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/contactme',
            name: 'ContactMe',
            component: ContactMe,
            meta: {
                title: 'ContactMe'
            }
        },
        {
            path: '/students',
            name: 'Students',
            children: [
                {
                    path: '',
                    name: 'AllStudents',
                    component: AllStudents,
                    meta: {
                        title: 'All My Students',
                    }
                },
                {
                    path: 'level/:level',
                    name: 'AllStudentsByLevel',
                    component: AllStudentsByLevel,
                    meta: {
                        title: 'Filtering by student level',
                    }
                },
                {
                    path: 'details/:id',
                    name: 'StudentDetails',
                    component: StudentDetails,
                    meta: {
                        title: 'Student Details',
                    }
                },
                {
                    path: 'search',
                    name: 'StudentsSearchResults',
                    component: StudentsSearchResults,
                    meta: {
                        title: 'Student Search Results',
                    }
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