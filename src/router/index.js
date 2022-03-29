import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

import ArticlesView from '../views/Article/ArticlesView.vue'
import ArticleView from '../views/Article/ArticleView.vue'
import ArticleAddView from '../views/Article/ArticleAddView.vue'

import UserArticleListView from '../views/User/UserArticleListView.vue'
import UserInfoView from '../views/User/UserInfoView.vue'
import LoginCallbackView from '../views/User/LoginCallbackView.vue'

import FindGameView from '../views/Game/FindGameView.vue'
import GameDetailView from '../views/Game/GameDetailView.vue'

import NotFoundView from '../views/NotFoundView.vue'
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
        path: '/my/articles',
        name: 'myarticles',
        component: UserArticleListView,
        meta: {
            requireAuth: true//表面此路由需要身份认证授权
        }
    },
    {
        path: '/my',
        name: 'userinfo',
        component: UserInfoView,
        meta: {
            requireAuth: true//表面此路由需要身份认证授权
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
        path: '/game',
        name: 'gameList',
        component: FindGameView,
    },
    {
        path: '/game/:id',
        name: 'gameItem',
        component: GameDetailView,
    },
    {
        path: "/callback",
        name: "loginCallBack",
        component: LoginCallbackView,
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
        routerStore.commit("identity/saveToken", window.localStorage.getItem("ACCESS_TOKEN"));
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