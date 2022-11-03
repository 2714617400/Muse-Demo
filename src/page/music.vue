<template>
  <div class="music">
    <img :src="url" class="beijin" />

    <mu-paper class="demo-paper panel" :z-depth="1">
      <!-- <aplayer autoplay :music="myMusic"></aplayer> -->
    </mu-paper>
  </div>
</template>

<script>
// import Aplayer from 'vue-aplayer'
export default {
  components: {
    // Aplayer
  },
  data () {
    return {
      url: require('../assets/demo1.jpg'),
      myMusic: {
        title: 'secret base~君がくれたもの~',
        artist: 'Silent Siren',
        // src: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        src: require('../assets/01.mp3'),
        // pic: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        pic: require('../assets/logo.png'),
        theme: 'pic'
      }
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
.music {
  overflow: hidden; // 解决子元素的margin-top重合问题，表现为顶开父元素与父元素相邻元素的间距
  position: relative;
  .beijin {
      position: absolute;
  }
}
</style>
