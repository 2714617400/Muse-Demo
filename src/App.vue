<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () { // provide/inject: 允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style scoped lang="less">
@import './style/public_style.less';
@import './assets/font/shaonv.css';
@import './assets/font/FreebooterScript.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  // min-height: 100%;
  // min-width: 1200px;
  background-color: #eeeeee;
}
* {
  /* font-family: 'shaonv'; */
  /*  字体  */
  font-family: -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif;
  
  /*  字号 */
  font-size: 16px;
  
  /*  字体颜色  */
  color: #333;
  
  /* 行距 */
  line-height: 1.75;
}

</style>
