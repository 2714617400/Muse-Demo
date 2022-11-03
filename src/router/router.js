const lazyLoad = function (path) {
  return () => import(/* webpackChunkName: "chunk" */ '@/page/' + path) // 路由懒加载的用法 （路由下的所有组件都打包在同个异步块 (chunk) 中）
}

const login = lazyLoad('login/login')

// 导出router对象
const routes = [
  {
    path: '/',
    component: lazyLoad('layout/BottomNav'),
    redirect: '/home', // 路由重定向
    // redirect: { name: 'home' }, // 路由重定向 (url替换为me，路由匹配为me)
    // redirect: to => {
    //   // 方法接收 目标路由 作为参数
    //   // return 重定向的 字符串路径/路径对象
    // },
    children: [
      {
        path: 'home',
        name: 'home',
        icon: 'home',
        alias: 'me', // 别名 (url保持为me，但路由匹配为home)
        meta: { // 路由元信息
          requires: true,
          group: 'MyHome',
          first_level: 2
        },
        component: lazyLoad('home'), // 路由懒加载
        beforeEnter: (to, from, next) => {
          console.log('路由独享的守卫')
          next()
        }
      },
      {
        path: 'ms',
        name: 'ms',
        icon: 'ms',
        alias: 'mstow', // 别名 (url保持为me，但路由匹配为home)
        meta: { // 路由元信息
          requires: true,
          group: 'MyHome',
          first_level: 2
        },
        component: lazyLoad('ms'), // 路由懒加载
        beforeEnter: (to, from, next) => {
          console.log('路由独享的守卫')
          next()
        }
      },
      {
        path: 'musicDemo',
        name: 'musicDemo',
        meta: {
          group: 'MyHome',
          first_level: 2
        },
        component: lazyLoad('music')
      },
      {
        path: 'map',
        name: 'map',
        meta: {
          group: 'MyHome',
          first_level: 2
        },
        component: lazyLoad('GEOMapDemo/map')
      },
      {
        path: 'one',
        name: 'one',
        meta: {
          group: 'MyHome',
          first_level: 2
        },
        component: lazyLoad('SecondaryPage/one') // 路由懒加载
      },
      {
        path: 'two/:id/three/:name',
        name: 'two',
        meta: {
          group: 'MyHome',
          first_level: 3
        },
        component: lazyLoad('SecondaryPage/two') // 路由懒加载
      },
      {
        path: 'draggableDemo',
        name: 'draggableDemo',
        meta: {
          group: 'MyHome',
          first_level: 3
        },
        component: lazyLoad('draggableDemo') // 路由懒加载
      },
      {
        path: 'decouplingA',
        name: 'decouplingA',
        component: lazyLoad('decoupling/one') // 路由懒加载
      },
      {
        path: 'decouplingB/:text',
        name: 'decouplingB',
        props: true, // 解耦
        component: lazyLoad('decoupling/two') // 路由懒加载
      },
      // {
      //   path: 'decouplingC',
      //   name: 'decouplingC',
      //   props: {newValue: 'hahaha'}, // 静态 不可变
      //   component: lazyLoad('decoupling/three') // 路由懒加载
      // },
      {
        path: 'decouplingC',
        name: 'decouplingC',
        props: route => ({params: route.params}), // params和query都可
        component: lazyLoad('decoupling/three') // 路由懒加载
      },
      {
        path: 'nodeTest',
        name: 'nodeTest',
        component: lazyLoad('nodeTest') // 路由懒加载
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      group: 'login',
      first_level: 1
    }
  },
  {
    path: '/register',
    name: 'register',
    component: lazyLoad('login/register')
  },
  {
    path: '*',
    component: lazyLoad('404')
  }
]

export default routes;