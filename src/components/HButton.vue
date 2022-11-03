<template>
  <mu-button>{{btnName}}</mu-button>
</template>
<script>
export default {
  name: 'hl-button',
  data() {
    return {
      btnName: null
    }
  },
  created() {
    // this.$bus.$once('submit', (val) => { // 只监听一次，后移除
    //   this.btnName = val;
    // })
    this.$bus.$on('submit', (val) => {
      this.btnName = val;
      this.$bus.$off('submit'); // 移除监听器
    })
  }
}
</script>