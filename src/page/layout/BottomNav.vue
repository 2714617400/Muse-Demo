<template>
  <div class="layout-bottom">
    <div class="layout-bottom-nav-box">
      <mu-bottom-nav class="layout-bottom-nav">
        <mu-bottom-nav-item title="Recents" icon="restore"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Favorites" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Nearby" icon="location_on"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
.layout-bottom {
  width: 100%;
  padding-bottom: 100px;
  .layout-bottom-nav-box {
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
  }
  .layout-bottom-nav {
    display: inline-block;
    padding: 0 50px;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
