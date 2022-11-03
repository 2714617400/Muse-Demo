// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font_icon/material-icons.css'
import Api from './api/index.js'
import VueAMap from 'vue-amap'
import './components/museUi.js' // 按需引入
import store from './store'
import * as filters from './utils/filters.js'
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import Bus from './assets/js/Bus'; // 中央事务总线
Vue.prototype.$bus = Bus;

//demo
import demo from './components/jsExport/b'
// import { bfile } from './components/jsExport/b'

demo()
console.log(require.resolve('./assets/js/Bus'), "取得模块路径")
// console.log(bfile, 'b')
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

Vue.prototype.$api = Api; // api对象挂载到vue实例上
Vue.config.productionTip = false
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: 'f3d598ed0bb42ea1956d1053db2fbde0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

const driver = new Driver({
  className: "scoped-class", // className to wrap driver.js popover
  animate: true, // Animate while changing highlighted element
  opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
  padding: 5, // Distance of element from around the edges
  allowClose: false, // Whether clicking on overlay should close or not
  overlayClickNext: false, // Should it move to next step on overlay click
  doneBtnText: "完成", // Text on the final button
  closeBtnText: "关闭", // Text on the close button for this step
  nextBtnText: "下一步", // Next button text for this step
  prevBtnText: "上一步", // Previous button text for this step
  // Called when moving to next step on any step
  stageBackground: 'rgba(255,255,255,.7)',
})
Vue.prototype.$driver = driver;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
