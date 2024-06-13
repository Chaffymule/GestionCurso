import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('../views/Login.vue')
		  },
		  {
			path: '/home',
			component: Home,
			meta: { requiresAuth: true },
		},
		{
			path: '/generales',
			component: () => import('../views/Generales.vue')
		},
		{
			path: '/comisiones',
			component: () => import('../views/Comisiones.vue')
		},
		{
			path: '/seguimientodepartamental',
			component: () => import('../views/SeguimientoDepartamental.vue')
		},
		{
			path: '/proyectosindividuales',
			component: () => import('../views/ProyectosIndividuales.vue')
		},
		{
			path: '/liberaciondeactividades',
			component: () => import('../views/LiberacionActividades.vue')
		},
		{
			path: '/tutorias',
			component: () => import('../views/Tutorias.vue')
		},
		{
			path: '/seguimientomaestros',
			component: () => import('../views/SeguimientoMaestros.vue')
		},
		{
			path: '/revisiondocumentos',
			component: () => import('../views/RevisionDocumentos.vue')
		},
		{
			path: '/carpetas',
			component: () => import('../views/Carpetas.vue')
		},
	],
})

export default router