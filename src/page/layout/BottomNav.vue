<template>
  <div class="nav_container">
    <!-- <mu-flex class="nav_menu" justify-content="around" align-items="center" align-content="start">
      <mu-flex
        class="nav_box"
        justify-content="center"
        v-for="(item, index) in route"
        :key="index"
        @click="navTo(item)"
        >{{ item.name }}</mu-flex
      >
    </mu-flex> -->
    <router-view></router-view>
  </div>
</template>

<script>
import routerArr from "@/router/router";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  computed: {
    route() {
      return routerArr[0].children;
    },
  },
  methods: {
    navTo(item) {
      console.log(item);
      this.$router.push({name: item.name})
    },
  },
};
</script>

<style scoped lang="less">
.nav_container {
  // width: 100%;
  // min-height: 100%;
  // padding-top: 90px;
  // padding-bottom: 100px;
  position: relative;
  overflow: hidden;
  .nav_menu {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    background-color: rgba(102,153,204, 1);
    color: #fff;
    margin: auto;
    z-index: 9999;
    .nav_box {
      display: inline-block;
      width: 100%;
      height: 100%;
      line-height: 50px;
      cursor: pointer;
      &:not(:last-child) {
        border-style: none dashed none none;
      }
    }
  }
  .layout-bottom-nav-box {
    width: 100%;
    position: fixed;
    top: 0;
    text-align: center;
    z-index: 9999;
    transition: all 0.3s ease-in;
  }
  .layout-bottom-nav {
    display: inline-block;
    padding: 0 50px;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>
