<template>
  <div class="geo-map">
    <el-amap
      class="amap-box"
      ref="map"
      vid="amap-vue"
      :amapManager="amapManager"
      :center="center"
      :zooms="zooms"
      :events="events"
    >
      <el-amap-marker vid="component-marker" :position="componentMarker.position"></el-amap-marker>
      <el-amap-info-window
        :position="currentWindow.position"
        :content="currentWindow.content"
        :visible="currentWindow.visible"
        :events="currentWindow.events"
        :isCustom="true"
        :offset="[0, -10]"
      ></el-amap-info-window>
    </el-amap>
  </div>
</template>
<script>
import VueAMap from "vue-amap";

export default {
  name: 'geoMap',
  data() {
    let amapManager = new VueAMap.AMapManager();
    return {
      center: [112.895275, 28.265682],
      zooms: [3, 18],
      amapManager,
      events: {
        init: o => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity(result => {
            console.log(result);
          });
        },
        click: this.handleClick
      },
      componentMarker: {
        position: [112.895275, 28.265682]
      },

      // 信息窗体
      currentWindow: {
        position: [0, 0],
        content: "",
        events: {},
        visible: false
      }
    };
  },
  methods: {
    handleClick(e) {
      // 地图单击事件
      this.componentMarker.position = [e.lnglat.lng, e.lnglat.lat];
      var geocoder = new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: '全国'
      })
      let lnglat = [e.lnglat.lng, e.lnglat.lat]
      let that = this;
      geocoder.getAddress(lnglat, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // result为对应的地理位置详细信息
          console.log(result)
          that.currentWindow.content = that.setInfoWindowContent(result.regeocode.formattedAddress);
          let data = result.regeocode.formattedAddress;
          that.$emit('data', data)
        }
      })
      this.currentWindow.position = [e.lnglat.lng, e.lnglat.lat];
      this.currentWindow.visible = true;
    },

    setInfoWindowContent(val) {
      return `
        <div class="info-window">
          ${val}
        </div>
      `;
    }
  }
};
</script>
<style lang="less">
.geo-map {
  .geo-map-container {
    min-width: 800px;
    height: 500px;
    margin: 0 auto;
    padding: 3px;
  }
}
.info-window {
  min-width: 100px;
  height: 50px;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, .3);
  &::after {
    content: '';
    height: 15px;
    width: 15px;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%,-50%) rotate(-45deg);
    background-color: #fff;
    box-shadow: -2px 2px 2px 0 rgba(178,178,178,.4);
  }
}
</style>
