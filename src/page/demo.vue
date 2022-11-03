<template>
  <div class="container">
    <div class="components" :style="style">
      <div class="item"> 页面组件 </div>
    </div>
    <div class="nav">
      固定组件
    </div>
  </div>
</template>
<script>
/**
 * 使用: 设置容器宽高，设置image变量和style背景图路径
 */
export default {
  data() {
    return {
      image: require("../assets/bg.jpg"),
      width: "",
      height: "",
      ElX: 0,
      ElY: 0,
    };
  },
  mounted() {
    this.loadImg();
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
        transform: `translate(${this.unitToMobile(this.ElX)}px, ${this.unitToMobile(this.ElY)}px)`,
        // transform: `translate(${this.ElX}px, ${this.ElY}px)`,
      };
    },
  },
  methods: {
    loadImg() {
      let img = new Image();
      img.src = this.image;
      img.onload = () => {
        this.init(this.unitToConvert(img.width), this.unitToConvert(img.height));
        this.width = this.unitToConvert(img.width) + "vw"
        this.height = this.unitToConvert(img.height) + "vw"
      };
    },
    init(imgWidth, imgHeight) {
      const cliendWidth = this.unitToConvert(Number(document.body.clientWidth));
      const cliendHeight = this.unitToConvert(Number(document.body.clientHeight));
      const boundary = [imgWidth - cliendWidth, imgHeight - cliendHeight];
      const that = this;

      let startX, startY, X, Y;
      let origin = [-boundary[0] / 2, -boundary[1] / 2];
      this.ElX = origin[0];
      this.ElY = origin[1];

      window.addEventListener("touchstart", function (e) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        origin[0] = that.ElX;
        origin[1] = that.ElY;
      });
      window.addEventListener("touchmove", function (e) {
        X = e.changedTouches[0].pageX - startX;
        Y = e.changedTouches[0].pageY - startY;
        X = that.unitToConvert(X)
        Y = that.unitToConvert(Y)

        if (!(origin[0] + X >= 0 || origin[0] + X <= -boundary[0])) {
          that.ElX = origin[0] + X;
        };
        if (!(origin[1] + Y >= 0 || origin[1] + Y <= -boundary[1])) {
          that.ElY = origin[1] + Y;
        };
      });
    },
    unitToConvert(num) {
      return (num / 750) * 100;
    },
    unitToMobile(num) {
      return window.devicePixelRatio * num
    }
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 0;

  .components {
    background: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item {
    width: 100px;
    height: 100px;
    background-color: blue;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .nav {
    width: 100%;
    height: 60px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    line-height: 60px;
  }
}
</style>