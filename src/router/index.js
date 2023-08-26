import { createRouter, createWebHistory } from 'vue-router'
import App from "../App.vue";
import UserManagmentView from "../views/UserManagmentView.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: UserManagmentView
        }
    ]
})

export default router