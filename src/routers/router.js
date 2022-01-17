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
                },
                {
                    path: 'cursos',
                    component: () => import('@/views/Course'),
                    children: [
                        {
                            path: '',
                            name: 'apprenticeship',
                            component: () => import('@/components/courses/Apprenticeship')
                            
                        },
                        {
                            path: 'andamento',
                            name: 'apprenticeship',
                            component: () => import('@/components/courses/Apprenticeship')
                            
                        },
                        {
                            path: 'atividades',
                            name: 'activity',
                            component: () => import('@/components/courses/Activity')
                        },
                        {
                            path: 'ranking',
                            name: 'ranking',
                            component: () => import('@/components/courses/Ranking')
                        },
                        {
                            path: 'pesquisa',
                            name: 'search',
                            component: () => import('@/components/courses/Search')
                        },
                        {
                            path: 'conteudo',
                            name: 'countentCourse',
                            component: () => import('@/components/courses/CountentCourse')
                        },
                        {
                            path: 'detalhe',
                            name: 'detail',
                            component: () => import('@/components/courses/Detail')
                        }
                    ]
                },
            ]
        },
        {
            path: '#',
            redirect: '/'
        }
    ]
})