import Vue from "vue";
import Router from "vue-router";
import Nprogress from 'nprogress'; //提供页面加载进度条效果
import findLast from 'lodash/findLast';
import 'nprogress/nprogress.css';
import {check, isLogin} from './utils/auth';
import {notification} from 'ant-design-vue';

// import RenderRouterView from './components/RenderRouterView.vue'
import NotFound from './views/404.vue';
import Forbidden from './views/403.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',  // 嵌套路由
      hideInMenu: true,
      // component: RenderRouterView, // 方法一：挂载router-view
      // component: {render: h => h('router-view')}, // 方法二：render函数挂载router-view
      component: () => //异步加载组件
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout.vue" ),
      children: [
        {
          path: '/user',
          redirect: '/user/login' //重定向到登录
        },
        {
          path: '/user/login',
          name: 'login',
          component: () => //异步加载组件
            import(/* webpackChunkName: "user" */ "./views/User/Login.vue") 
        },
        {
          path: '/user/register',
          name: 'register',
          component: () => //异步加载组件
            import(/* webpackChunkName: "user" */ "./views/User/Register.vue") 
        },
      ]
    },
    {
      path: "/",
      meta: {authority: ['user', 'admin']},
      component: () => 
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout.vue"),
      children: [
        //dashboard仪表盘
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘"},
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () => 
                import(/* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis.vue"),
            }
          ]
        },
        //form 表单
        {
          path: "/form",
          name: "form",
          meta: { icon: "form", title: "表单", authority: ["admin"]},
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: { title: "基础表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm.vue"),
            },
            {
              path: "/form/step-form",
              name: "stepform",
              hideChildrenInMenu: true,
              meta: { title: "分布表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/index.vue"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1.vue"),
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2.vue"),
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(/* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3.vue"),
                },
              ]
            },
          ]
        }
      ]
    },
    {
      path: "/403",
      name: "403",
      hideInMenu: true,
      component: Forbidden
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
    
  ]
});

router.beforeEach((to, from, next) =>{
  if (to.path !== from.path) {
    Nprogress.start();
  }
  const record = findLast(to.matched, record => record.meta.authority)
  if(record && !check(record.meta.authority)) {
    if(!isLogin() && to.path !== '/user/login') {
      next({
        path: '/user/login'
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有权限访问，请联系管理员咨询。"
      });
      next({
        path: "/403"
      });
    }
    Nprogress.done();
  }
  
  next();
});

router.afterEach(() => {
  Nprogress.done();
});



export default router;
