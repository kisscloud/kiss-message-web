import Ajax from "../services/ajax";

const getLang = () => {
  return 'zh-CN';
}

const config = {
  config() {
    return {
      handleDefaultError: true,
      timeout: 15000,
      baseURL: window.config.API_HOST,
      headers: {
        'Content-Type': 'application/json',
        'X-OS': 'web',
        'X-LANGUAGE': getLang(),
        'X-Access-Token': window.localStorage.getItem('access_token')
      }
    }
  }
}

const ajax = new Ajax(config)

// Ping
export const Ping = (data, options) => {
  return ajax.get('/ping', data, options)
}

// 添加币种
export const PostCurrency = (data, options) => {
  return ajax.post('/pay-core/currency', data, options);
};

// 获取币种列表
export const GetCurrencies = (data, options) => {
  return ajax.get('/pay-core/currencies', data, options);
};

