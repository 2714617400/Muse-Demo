<template>
  <div>
    one
    <mu-button @click="onClick">click me</mu-button>
    <mu-button @click="refresh">刷新</mu-button>
    <mu-button @click="updateRoute">更新路由</mu-button>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
  data () {
    return {
      text: 'hei'
    }
  },
  watch: {
    '$route': 'onClick' // ?估计是作为key在this里查找
  },
  created() {
    console.log('创建前')
  },
  mounted() {
    console.log('加载后')
  },
  beforeRouteEnter(to, from, next) {
    console.log('组价内 路由进入守卫')
    // console.log('路由记录', to.matched.some(val => val.mete.requireAuth)) // $route.matched内包括 路由匹配到的所有路由记录!
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建

    next(vm => { // 可以通过回调访问组件实例 (beforceRouteEnter 是唯一支持给next传递回调的守卫)
      console.log('回调访问组件实例: ', vm.text)
    })
  },
  beforeRouteUpdate(to, from, next) {
    console.log('组件内 路由更新守卫')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('组件内 路由离开守卫')
    next()
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'decouplingB',
        params: {
          text: '哦呢酱~'
        }
      })
    },

    refresh() {
      this.reload()
    },

    updateRoute() {
      this.$router.push({
        name: 'decouplingA',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>