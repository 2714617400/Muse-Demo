<template>
  <div class="container" id="container"></div>
</template>
<script>
/**
 * 使用: 设置容器宽高，设置image变量和style背景图路径
 */
export default {
  data() {
    return {
      image: require("../assets/bg.jpg"),
    };
  },
  mounted() {
    this.loadImg();
  },
  methods: {
    loadImg() {
      let img = new Image();
      img.src = this.image;
      img.onload = () => {
        this.init(img.width, img.height);
      };
    },
    init(imgWidth, imgHeight) {
      const cliendWidth = Number(document.body.clientWidth);
      const cliendHeight = Number(document.body.clientHeight);
      const container = document.getElementById("container");
      const boundary = [imgWidth - cliendWidth, imgHeight - cliendHeight];

      let startX, startY, X, Y;
      let origin = [0, 0];

      container.addEventListener("touchstart", function (e) {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        let backgroundPosition = container.style.backgroundPosition;
        let position = backgroundPosition.split(" ");
        origin[0] = Number(position[0] && position[0].slice(0, -2)) || 0;
        origin[1] = Number(position[1] && position[1].slice(0, -2)) || 0;
      });
      container.addEventListener("touchmove", function (e) {
        X = e.changedTouches[0].pageX - startX;
        Y = e.changedTouches[0].pageY - startY;

        if (origin[0] + X >= 0 || origin[0] + X <= -boundary[0]) return;
        if (origin[1] + Y >= 0 || origin[1] + Y <= -boundary[1]) return;

        container.style.backgroundPosition = `${origin[0] + X}px ${
          origin[1] + Y
        }px`;
      });
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("../assets/bg.jpg");
  background-repeat: no-repeat;
}
</style>