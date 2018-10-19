import axios from 'axios';
import merge from "merge";
import * as codes from "../codes";

const defaults = {
  config() {
    return {
      headers: {}
    }
  }
}

const setOption = {
  /**
   * 设置 axios.defaults 配置
   * @param {Object} options
   * @param {Object} instance axios 实例
   */
  setConfig(options, instance) {
    const config = {
      headers: {}
    }
    // 处理 headers 中文等非法字符
    if (options && options.headers) {
      for (var k in options.headers) {
        var el = options.headers[k];
        options.headers[k] = encodeURI(el);
      }
    }
    if (instance) {
      return merge(instance.defaults, config, options);
    }
    return merge(config, options);
  }
}

// 全局错误
const handleError = error => {
  const errMsg = error.message.indexOf('timeout') > -1 ? '请求超时' : '网络错误';
  window.toast.error({
    message: errMsg,
    position: 'topRight',
    class: 'globleToast'
  });
}

const handleRequestSuccess = config => {
  /* 在发送请求之前做某事 */
  config.headers['X-Access-Token'] = localStorage.getItem("accessToken");
  return config;
}

const handleResponseSuccess = async response => {
  let res = response.data;
  // 登录过期
  if (res.code === codes.AccessTokenIsInvalid) {
    // window.location.href = '/login'
    return Promise.reject(res);
  }

  return res;
}

const setGlobal = instance => {
  /* 添加请求拦截器 */
  instance.interceptors.request.use(handleRequestSuccess,
    error => {
      /* 请求错误时做些事 */
      handleError(error);
      return Promise.reject(error);
    }
  )

  /* 添加响应拦截器 */
  instance.interceptors.response.use(handleResponseSuccess,
    error => {
      /* 请求错误时做些事 */
      handleError(error);
      return Promise.reject(error);
    }
  )
}

class Ajax {
  constructor(options) {
    this.options = merge(true, defaults, options)
    this.instance = axios.create({
      baseURL: window.config.API_HOST,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setGlobal(this.instance)
  }
  all() {
    return axios.all
  }
  spread() {
    return axios.spread
  }
  get(url, params, options) {
    const instance = this.instance.get(url, merge({
      params
    }, setOption.setConfig(this.options.config()), options))
    return instance
  }
  delete(url, params, options) {
    const instance = this.instance.delete(url, merge({
      params
    }, setOption.setConfig(this.options.config()), options))
    return instance
  }
  post(url, params, options) {
    const instance = this.instance.post(url, params, merge(setOption.setConfig(this.options.config()), options))
    return instance
  }
  put(url, params, options) {
    const instance = this.instance.put(
      url,
      params,
      merge(setOption.setConfig(this.options.config()), options)
    )
    return instance
  }
}

export default Ajax
