import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { cars } from './routes/cars'
const routes: Array<RouteRecordRaw> = [...cars]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
