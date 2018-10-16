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
  return ajax.post('/kiss-console/service/account/login', data, options);
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
  return ajax.get('/kiss-console/service/account/account', data, options);
};

// 添加部门
export const PostAccountsGroups = (data, options) => {
  return ajax.post('/kiss-console/service/account/group', data, options);
};

// 编辑部门
export const PutAccountsGroups = (data, options) => {
  return ajax.put('/kiss-console/service/account/group', data, options);
};

// 添加用户
export const PostAccounts = (data, options) => {
  return ajax.post('/kiss-console/service/account', data, options);
};

// 更改用户
export const PutAccounts = (data, options) => {
  return ajax.put('/kiss-console/service/account', data, options);
};

// 添加权限
export const PostPermissions = (data, options) => {
  return ajax.post('/kiss-console/service/account/permission', data, options);
};

// 添加权限模块
export const PostPermissionsModules = (data, options) => {
  return ajax.post('/kiss-console/service/account/permission/module', data, options);
};

// 添加角色
export const PostRoles = (data, options) => {
  return ajax.post('/kiss-console/service/account/role', data, options);
};

// 编辑角色
export const PutRoles = (data, options) => {
  return ajax.put('/kiss-console/service/account/role', data, options);
};

// 获取角色绑定的账户和权限
export const GetRolePermissionIdsAndAccountIds = (data, options) => {
  return ajax.get('/kiss-console/service/account/role/accountIds/permissionIds', data, options);
};

// 绑定角色权限
export const PostRolePermissions = (data, options) => {
  return ajax.post('/kiss-console/service/account/role/permissions', data, options);
};

// 绑定角色用户
export const PostRolesAccounts = (data, options) => {
  return ajax.post('/kiss-console/service/account/role/accounts', data, options);
};
