<template>
  <div class="hello">
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
