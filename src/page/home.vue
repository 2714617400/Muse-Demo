<template>
  <div class="hello">
    <mu-appbar style="width: 100%;" title="Title" color="primary" z-depth="2">
      <mu-avatar slot="right">
        <img src="../assets/logo.png">
      </mu-avatar>
    </mu-appbar>
    <h1>好久不见，MASTER</h1>
    <mu-container class="button-wrapper">
        <mu-button color="primary">Primary</mu-button>
        <mu-button color="secondary">Secondary</mu-button>
        <mu-button color="success">Success</mu-button>
        <mu-button color="warning">Warning</mu-button>
        <mu-button color="info">Info</mu-button>
        <mu-button color="error">Error</mu-button>
        <mu-button disabled>disabled</mu-button>
      </mu-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  font-size: 96px; font-weight: 300; padding-left: 30px;
}
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
