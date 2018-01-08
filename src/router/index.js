import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    /*mode: 'history',*/
    routes: [
        {
          path: "*",
          redirect: "/"
        },
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: resolve => require(['../view/index.vue'], resolve) //首页
        },
        {
            path: '/detail',
            component: resolve => require(['../view/detail.vue'], resolve) //详情页
        },
        {
            path: '/new',
            component: resolve => require(['../view/newThread.vue'], resolve) //创建帖子
        },
        {
            path: '/login',
            component: resolve => require(['../view/login.vue'], resolve) //登录
        },
        {
            path: '/center',
            component: resolve => require(['../view/userCenter.vue'], resolve) //个人中心
        },
        {
            path: '/edit',
            component: resolve => require(['../view/edit.vue'], resolve) //编辑信息
        },
        {
            path: '/myRemind',
            component: resolve => require(['../view/myRemind.vue'], resolve) //提醒-我的回复
        },
        {
            path: '/systemMessage',
            component: resolve => require(['../view/systemMessage.vue'], resolve) //提醒-系统消息
        },
        {
            path: '/myWrite',
            component: resolve => require(['../view/myWrite.vue'], resolve) //我的讨论-发表
        },
        {
            path: '/myReply',
            component: resolve => require(['../view/myReply.vue'], resolve) //我的讨论-回复
        },
             
    ]
})

router.beforeEach((to, from, next) => {
    /*next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })*/
    next();
})

export default router;
