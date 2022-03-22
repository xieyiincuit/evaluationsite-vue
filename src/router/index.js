import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleAddView from '../views/ArticleAddView.vue'
import NotFoundView from '../views/NotFoundView.vue'


import LoginCallbackView from '../views/LoginCallbackView.vue'
import applicationUserManager from "../auth/applicationusermanager";

//定义routes规则
const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    {
        path: '/articles',
        name: 'home',
        component: ArticlesView
    },
    {
        path: '/article/:aid',
        name: 'article',
        component: ArticleView,
    },
    {
        path: '/article/create',
        name: 'create',
        component: ArticleAddView,
        meta: {
            requireAuth: true//表面此路由需要身份认证授权
        }
    },
    {
        path: "/callback",
        name: "loginCallBack",
        component: LoginCallbackView
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundView
    }
]

//构建router对象
const router = createRouter({
    history: createWebHistory(),
    routes
})


var routerStore = store
//注册全局前置导航守卫
router.beforeEach((to, from, next) => {
    if (!routerStore.state.identity.token) {
        routerStore.commit("identity/saveToken", window.localStorage.access_token);
    }
    if (to.meta.requireAuth) {
        // 判断该路由是否需要认证授权
        if (routerStore.state.identity.token) {
            // 通过vuex state获取当前的token是否存在
            next();
        } else {
            //发起身份质询
            applicationUserManager.login();
        }
    } else {
        //有Token则放行
        next();
    }
});

//模块化暴露
export default router