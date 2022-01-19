import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
            path: '/cursos',
            component: () => import('@/views/Course'),
            meta: {
				requiresAuth: true,
			},
            children: [
                {
                    path: '',
                    name: 'search',
                    component: () => import('@/components/courses/Search'),
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: 'meu-aprendizado',
                    name: 'apprenticeship',
                    component: () => import('@/components/courses/Apprenticeship'),
                    meta: {
                        requiresAuth: true,
                    },
                    
                },
                {
                    path: 'atividades',
                    name: 'activity',
                    component: () => import('@/components/courses/Activity'),
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: 'ranking',
                    name: 'ranking',
                    component: () => import('@/components/courses/Ranking'),
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: 'conteudo/:id',
                    name: 'countentCourse',
                    component: () => import('@/components/courses/CountentCourse'),
                    meta: {
                        requiresAuth: true,
                    },
                },
                {
                    path: 'detalhes',
                    name: 'detail',
                    component: () => import('@/components/courses/Detail'),
                    meta: {
                        requiresAuth: true,
                    },
                }
            ]
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
            ]
        },
        {
            path: '#',
            redirect: '/'
        }
    ]
});

router.beforeEach(async (to, from, next) => {
	if (to.meta.requiresAuth) {
		const token = window.localStorage.getItem('userToken');
		if (token) {
			next();
		} else {
			next({ path: '/login', query: { redirect: to.fullPath } });
		}
	} else {
        next();
    }
});

export default router;