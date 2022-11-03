import Vue from 'vue'
import Router from 'vue-router'
import routerArr from './router'

// 跳转重复路由时防止报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router)
const routes = [].concat(routerArr);

const routeObj = new Router({
  routes,
  scrollBehavior(to, from, savedPostion) {
    console.log(savedPostion, 'savedPostion')
    if(savedPostion) {
      return { ...savedPostion, behavior: 'smooth' }
    } else {
      return { x: 0, y: 0, behavior: 'smooth'}
    }
  }
})

routeObj.beforeEach((to, from, next) => {
  console.log('全局前置守卫!') // 全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
  next()
  // next(new Error('凑五'))
})

routeObj.beforeResolve((to, from, next) => {
  console.log('全局解析守卫') // 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
  next()
})

routeObj.afterEach((to, from) => {
  console.log('全局后置钩子') // 不接受next，不会改变导航本身
})

routeObj.onError(err => {
  console.log('守卫回调 error', err)
})
// 导出router对象
export default routeObj
