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

// 登录
export const AuthLogin = (data, options) => {
  return ajax.post('/kiss-account/auth/username/login', data, options);
};

// 获取用户页面参数
export const GetPagePermissonsAccountsParams = (data, options) => {
  return ajax.get('/kiss-console/page/permission/accounts', data, options);
};

// 获取角色页面参数
export const GetPagePermissionRolesParams = (data, options) => {
  return ajax.get('/kiss-console/page/permission/roles', data, options);
};

// 获取角色页面参数
export const GetPagePermissionPermissionsParams = (data, options) => {
  return ajax.get('/kiss-console/page/permission/permissions', data, options);
};

// 获取角色页面参数
export const GetPagePermissionLogsParams = (data, options) => {
  return ajax.get('/kiss-console/page/permission/logs', data, options);
};

// 获取用户列表
export const GetAccounts = (data, options) => {
  return ajax.get('/kiss-account/accounts', data, options);
};

// 添加部门
export const PostAccountsGroups = (data, options) => {
  return ajax.post('/kiss-account/accounts/groups', data, options);
};

// 添加用户
export const PostAccounts = (data, options) => {
  return ajax.post('/kiss-account/accounts', data, options);
};

// 添加权限
export const PostPermissions = (data, options) => {
  return ajax.post('/kiss-account/permissions', data, options);
};

// 添加权限模块
export const PostPermissionsModules = (data, options) => {
  return ajax.post('/kiss-account/permissions/modules', data, options);
};

// 添加角色
export const PostRoles = (data, options) => {
  return ajax.post('/kiss-account/roles', data, options);
};

// 绑定角色权限
export const PostRolePermissions = (data, options) => {
  return ajax.post('/kiss-account/roles/permissions', data, options);
};

// 绑定角色用户
export const PostRolesAccounts = (data, options) => {
  return ajax.post('/kiss-account/accounts/roles', data, options);
};
