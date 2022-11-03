import {
  SET_NUM,
  SET_TEXT,
  SUCCESS,
  FAILURE,
  LOADING
} from './mutation-type'
const demo = {
  state: {
    WEB_SITE_NAME: 'FFF ORG',
    text: 'hi~',
    list: [1,2,3,4,5],
    num: 3,
    obj: {
      a: 'a'
    },
    status: 0,
    status_text: '',

    interval_id: null, // 定时器id
  },
  getters: {
    filterList: (state, getters) => { // 接收getters句柄， 用以引用其他getters
      let list = [];
      if(getters.addItem) {
        list.push(getters.addItem)
      }
      list = list.concat(state.list.filter(el => {
        return el > 3
      }))
      return list
    },
    addItem: state => {
      return state.num * 3
    },

    filterMaxValueForList: state => (value) => { // 返回一个方法， 实现给getter传值（这样getters不会缓存结果了）， 有点类似闭包
      return state.list.filter(el => {
        return el > value
      })
    },

    getStatus: state => {
      return state.status_text + '!'
    }
  },
  mutations: {
    [SET_TEXT](state, data) {
      console.log(data)
      state.text = data.text;
    },

    [SET_NUM](state, data) {
      state.num += data
    },

    setObj(state, data) {
      state.obj = {...state.obj, ...data }
    },

    set_interval_id(state, data) {
      state.interval_id = data.id
      console.log('设置定时器id: ', data)
    },

    [SUCCESS](state) {
      state.status = 0
      state.status_text = 'SUCCESS'
    },

    [FAILURE](state) {
      state.status = 0
      state.status_text = 'FAILURE'
    },

    [LOADING](state) {
      state.status = 1
      state.status_text = 'LOADING'
    },
  },
  actions: {
    // increment(context) {
    //   // context.state
    //   // context.getters
    //   context.commit({
    //     type: SET_TEXT,
    //     text: 'nihao~'
    //   })
    // },

    increment({ commit }, data) { // es2015参数解构
      // context.state
      // context.getters
      setTimeout(() => {
        commit({
          type: SET_TEXT,
          text: data.text
        })
      }, 1000)
    },

    pay({commit}) {

      commit(LOADING)
      
      return new Promise((resolve, reject) => {
        let random = Math.floor( Math.random() * 10 );

        setTimeout(() => {
          if(random >= 5) {
            commit(SUCCESS)
            resolve()
          } else {
            commit(FAILURE)
            reject()
          }
        }, 3000)
      })
    },

    async payA() {
      return new Promise((resolve, reject) => {
        let random = Math.floor( Math.random() * 10 );

        setTimeout(() => {
          if(random >= 5) {
            resolve(random)
          } else {
            reject('NAN')
          }
        }, 3000)
      })
    },

    async payA({ dispatch, commit}) {
      commit(LOADING)
      await dispatch('payA')
      commit(SUCCESS)
    }
  }
}

export default demo