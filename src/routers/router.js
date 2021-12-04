import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login')
        },
        {
            path: '/cadastro',
            name: 'register',
            component: () => import('@/views/register/RegisterStudent')
        },
        {
            path: '/',
            component: () => import('@/views/Home'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/Dashboard')
                }
            ]
        },
        {
            path: '#',
            redirect: '/'
        }
    ]
})