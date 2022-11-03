import Vue from 'vue';
import Vuex from 'vuex';
import store from './store.js';

Vue.use(Vuex);

const demo = new Vuex.Store(
  store
)

export default demo