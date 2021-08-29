import { RouteRecordRaw } from 'vue-router'

const cars: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "Detail" */ '@/views/Detail.vue'),
    },
    {
        path: '/manage',
        name: 'Manage',
        component: () => import(/* webpackChunkName: "Manage" */ '@/views/Manage.vue'),
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "Manage" */ '@/views/NotFound.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
]
export { cars }
