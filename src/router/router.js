import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/paginaUno',
        //component: EstudianteGuardar
        component: () => import('../pages/PaginaUno.vue')
    },
    {
        path: '/paginaDos',
       // component: EstudianteConsultar
         component: () => import('../pages/PaginaDos.vue')
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    }
)

export default router;
