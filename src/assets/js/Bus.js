import Vue from 'vue';

// 中央事务总线：用于组件间的通信，需要通信的组件调用bus的$emit触发事件，将数据带入。接收端使用bus的on方法监听事件，并获取数据。
const bus = new Vue();
export default bus;