<template>
  <div class="two_page">
    <span @click="demo">{{text + $route.params.name}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null
    }
  },
  beforeRouteUpdate(to, from, next) {
    // 路由更新守卫
    console.log(
      '路由更新守卫', to, from
    )
    next()
  },
  mounted() {
    this.text = this.$route.params.id
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
      this.text = to.params.id; // 解决复用组件生命周期没有被调用问题，监听路由更新数据
    }
  },
  methods: {
    demo() {
      this.$router.push({name: 'two', params: {id: 1, name: 'xx'}}) // 测试证明该组件被复用，生命周期钩子没有被调用
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.two_page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
