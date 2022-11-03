<template>
  <div class="swipe" :style="{height: '120vw'}">
    <div
      class="track"
      @touchstart="touchstart"
      @touchend="touchend"
      @touchmove="touchmove"
      id="track"
      :style="{ left: 0, ...trackStyle }"
    >
      <slot>
        <div class="item" v-for="v in 4" :key="v">
          <van-image
            width="100%"
            height="50vw"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          >
          </van-image>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Swipe',
  data() {
    return {
      height: 0,
      startX: null,
      movePoint: 0,
      swiping: false,
      offset: 0
    };
  },
  computed: {
    track() {
      return document.getElementById("track");
    },
    // trackStyle() {
    //   return {
    //     transitionDuration: `${this.swiping ? 0 : 500}ms`,
    //     transform: `translateX(${this.offset}px)`,
    //   };
    // },
    trackStyle() {
      return {
        transition: `left ${this.swiping ? 0 : 0.5}s`
      }
    },
    startPoint() {
      let clientWidth = parseInt(document.body.clientWidth);
      let itemWidth = clientWidth * 0.6
      return (clientWidth - itemWidth) / 2
    },
    endPoint() {
      let clientWidth = parseInt(document.body.clientWidth);
      let trackWidth = parseInt(document.getElementById("track").clientWidth);
      return trackWidth - clientWidth + (clientWidth * 0.4 / 2)
    }
  },
  mounted() {
    this.track.style.left = this.startPoint + "px";
  },
  methods: {
    touchstart(e) {
      this.startX = e.touches[0].pageX;
      this.movePoint = e.touches[0].pageX; // 初始滑动坐标
      this.swiping = true;
      e.preventDefault(); // 阻止默认事件(只允许左右滑动，禁止上下滑动)
    },
    touchend(e) {
      // let endX = e.changedTouches[0].pageX;
      // let diff = this.startX - endX;
      this.movePoint = 0;
      this.swiping = false;

      let left = parseInt(this.track.style.left);
      let width = parseInt(this.track.clientWidth);
      let clientWidth = parseInt(document.body.clientWidth);
      // console.log('this.track.style.width', this.track.clientWidth, this.track.style.left, width, clientWidth, clientWidth + width)
      // let left = this.track.getBoundingClientRect().left;

      // 首尾判断是否越界
      if (left > this.startPoint) this.track.style.left = this.startPoint + "px";
      else if (left < -(this.endPoint)) this.track.style.left = -(this.endPoint) + "px";
      // else this.offset = 0;
      // console.log(this.track.getBoundingClientRect().left, 'offset')
      // console.log(diff, diff > 0 ? '左' : '右')
    },
    touchmove(e) {
      let pageX = e.touches[0].pageX;
      this.changePoint(pageX - this.movePoint);
      this.movePoint = pageX; // 上一帧坐标
    },

    changePoint(pageX) {
      let left = parseInt(this.track.style.left);
      left += pageX;
      this.track.style.left = left + "px";
    },
  },
}
</script>
<style lang="less" scoped>
.swipe {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 3vw 0;
  .track {
    display: flex;
    // white-space: nowrap;
    position: absolute;
    left: 0;
    .item {
      max-width: 100vw;
      width: 60vw;
      height: 120vw;
      margin: 0 5vw;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
}
</style>