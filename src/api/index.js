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

// 邮箱登录
export const AuthEmailLogin = (data, options) => {
  return ajax.post('/api/auth/email/login', data, options)
}

// 邮箱注册
export const AuthEmailRegister = (data, options) => {
  return ajax.post('/api/auth/email/register', data, options)
}

// 下单
export const PlaceOrder = (data, options) => {
  return ajax.post('/api/order', data, options)
}

// 获取交易页面参数
export const GetPageTradeParams = (data, options) => {
  return ajax.get('/api/page/trade', data, options)
}

// 获取账户余额
export const GetTradeAccountBalances = (data, options) => {
  return ajax.get('/api/transfer/trade/account/balances', data, options)
}
