import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'


//定义routes规则
const routes = [
    {
        path: '/element',
        name: 'home',
        component: HomeView
    },
    {
        path: '/',
        name: 'articles',
        component: ArticlesView
    },
]

//构建router对象
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//模块化暴露
export default router