<template>
  <div class="hello">
    <!-- <mu-appbar style="width: 100%;" title="Title" color="primary" z-depth="2">
      <mu-avatar slot="right">
        <img src="../assets/logo.png" />
      </mu-avatar>
    </mu-appbar> -->
    <mu-paper class="demo-paper" :z-depth="1">
      <h1>好久不见，MASTER</h1>
      <mu-container class="button-wrapper">
        <mu-tooltip content="主要按钮哦~">
          <mu-button color="primary" @click="demo">Primary</mu-button>
        </mu-tooltip>
        <mu-button color="secondary">Secondary</mu-button>
        <mu-button color="success">Success</mu-button>
        <mu-button color="warning">Warning</mu-button>
        <mu-button color="info">Info</mu-button>
        <mu-button color="error">Error</mu-button>
        <mu-button disabled>disabled</mu-button>
      </mu-container>
    </mu-paper>

    <mu-paper class="demo-paper" :z-depth="1">
      <span class="tit">一缕青丝为君剪 一缕青丝缠绕君 望君不负我倾心 如若辜负 万劫不复</span>
      <img src="../assets/demo1.jpg" />
      <p>一缕青丝一缕魂，一缕悲切一缕尘，一缕青丝为君剪，一缕青丝缠君魂，一缕青丝 一缕魂 红锦系命送爱人。 </p>
    </mu-paper>

    <mu-paper class="demo-paper panel" :z-depth="1">
      <mu-container>
        <mu-expansion-panel>
          <div slot="header">Panel 1</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          <mu-button slot="action" flat>Cancel</mu-button>
          <mu-button slot="action" flat color="primary">Save</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">Panel 2</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </mu-expansion-panel>
        <mu-expansion-panel>
          <div slot="header">Panel 3</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </mu-expansion-panel>
      </mu-container>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    demo () {
      this.$toast.message('hello world')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  overflow: hidden; // 解决子元素的margin-top重合问题，表现为顶开父元素与父元素相邻元素的间距
}
h1 {
  font-size: 96px;
  font-weight: 300;
  padding-left: 30px;
  font-family: 'shaonv';
}
.button-wrapper {
  text-align: center;
  .mu-button {
    margin: 8px;
  }
}
.demo-paper {
  max-width: 1200px;
  margin: 3% auto;
  box-sizing: border-box;
  overflow: hidden;
  .tit {
    font-size: 2.0rem;
  }
  img {
    width: 100%;
  }
}
.panel {
  padding: 50px 0;
}
</style>
