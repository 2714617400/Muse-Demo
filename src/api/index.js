import axios from 'axios';
import Router from "vue-router";
const baseUrl = '';

const errorHandle = (status, msg) => {
  switch(+status) {
    case 401:
      console.log("401");
      Router.push("/login")
      break;
    case 403:
      break;
    case 404:
      break;
    default:
      console.log(msg);
  }
}

// 创建实例
const _axios = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 6
});

//请求拦截
_axios.interceptors.request.use(
  (config) => {
    console.log("请求拦截++++++++++", config);
    // 设置token
    const token = localStorage.getItem("token");
    token && (config.headers["authorization"] = "Bearer " + token);
    return config;
  },
  (error) => {
    error.data = {};
    error.data.msg = '网络异常, 请检查网络';
    return Promise.reject(error);
  }
)

//响应拦截
_axios.interceptors.response.use(
  (response) => {
    console.log("响应拦截++++++++++", response);
    if((response.data ? response.data.code : '') === 401){
      //页面刷新
      Router.push("/login")
      parent.location.reload();
    }
    if(response.status === 200) {
      if(response.data && response.data.data) {
        try {
          const dataObj = JSON.parse(response.data.data);
          if(typeof dataObj == 'object' && dataObj) {
            // 为json字符串将其转化为json对象
            response.data.data = dataObj;
          }
        } catch (e) {
          return response.data;
        }
      }
      return response.data;
    }
    response.data.code = -1;
    response.data.msg = '服务器错误';
    return response;
  },
  (error) => {
    if(error) {
      // 请求已发出，但不在2xx范围内
      Router.push("/login")
      console.log("errrrrrrr", error);
      errorHandle(error.status, error.msg);
      return Promise.reject(error);
    } else {
      // 断网
      return Promise.reject(error);
    }
  }
);
export default _axios