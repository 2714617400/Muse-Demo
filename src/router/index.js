import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const lazyLoad = function (path) {
  return () => import(/* webpackChunkName: "chunk" */ '@/page/' + path)
}

// 主页面布局
const LayoutBottom = lazyLoad('layout/BottomNav') // 顶部一级导航栏

const home = lazyLoad('home')

export default new Router({
  routes: [
    {
      path: '/',
      component: LayoutBottom,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            group: 'MyHome',
            first_level: 2
          },
          component: home
        }
      ]
    }
  ]
})
