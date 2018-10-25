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
export const GetPageDashboardParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/dashboard', data, options);
};

// 获取客户端页面参数
export const GetPageClientsParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/clients', data, options);
};

// 获取用户页面参数
export const GetPagePermissonsAccountsParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/accounts', data, options);
};

// 获取角色页面参数
export const GetPagePermissionRolesParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/roles', data, options);
};

// 获取角色页面参数
export const GetPagePermissionPermissionsParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/permissions', data, options);
};

// 获取角色页面参数
export const GetPagePermissionLogsParams = (data, options) => {
  return ajax.get('/kiss-console/page/account/logs', data, options);
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

export const DeleteAccountsGroups = (groupId, options) => {
  return ajax.delete(`/kiss-console/service/account/group?id=${groupId}`, options);
};

// 添加用户
export const PostAccounts = (data, options) => {
  return ajax.post('/kiss-console/service/account', data, options);
};

// 更改用户
export const PutAccounts = (data, options) => {
  return ajax.put('/kiss-console/service/account', data, options);
};

// 用户离职
export const PutAccountDimission = (data, options) => {
  return ajax.put('/kiss-console/service/account/dimission', data, options);
};

// 用户复职
export const PutAccountResume = (data, options) => {
  return ajax.put('/kiss-console/service/account/resume', data, options);
};

// 用户重置密码
export const PutAccountResetPassword = (accountId, data, options) => {
  return ajax.put(`/kiss-console/service/account/reset/password?id=${accountId}`, data, options);
};

// 添加权限
export const PostPermissions = (data, options) => {
  return ajax.post('/kiss-console/service/account/permission', data, options);
};

export const PutPermission = (data, options) => {
  return ajax.put(`/kiss-console/service/account/permission?id=${data.id}`, data, options);
};

export const DeletePermission = (id, options) => {
  return ajax.delete(`/kiss-console/service/account/permission?id=${id}`, options);
};

// 添加权限模块
export const PostPermissionsModules = (data, options) => {
  return ajax.post('/kiss-console/service/account/permission/module', data, options);
};

// 更新权限模块
export const PutPermissionsModule = (data, options) => {
  return ajax.put('/kiss-console/service/account/permission/module', data, options);
};

// 删除权限模块
export const DeletePermissionModule = (id, options) => {
  return ajax.delete(`/kiss-console/service/account/permission/module?id=${id}`, options);
};

// 添加角色
export const PostRoles = (data, options) => {
  return ajax.post('/kiss-console/service/account/role', data, options);
};

// 编辑角色
export const PutRoles = (data, options) => {
  return ajax.put(`/kiss-console/service/account/role?id=${data.id}`, data, options);
};

// 删除角色
export const DeleteRole = (id, options) => {
  return ajax.delete(`/kiss-console/service/account/role?id=${id}`, options);
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

// 添加授权客户端
export const PostClient = (data, options) => {
  return ajax.post('/kiss-console/service/account/client', data, options);
};

// 更新授权客户端
export const PutClient = (data, options) => {
  return ajax.put('/kiss-console/service/account/client', data, options);
};

// 删除授权客户端
export const DeleteClient = (id, options) => {
  return ajax.delete(`/kiss-console/service/account/client?id=${id}`, options);
};

// 绑定客户端权限模块
export const PutClientModules = (data, options) => {
  return ajax.put(`/kiss-console/service/account/client/modules`, data, options);
};

// 获取客户端权限模块
export const GetClientModules = (data, options) => {
  return ajax.get(`/kiss-console/service/account/client/modules?id=${data.id}`, options);
};

// 获取客户端权限模块
export const GetOperationLogs = (query, options) => {
  return ajax.get(`/kiss-console/service/account/operation/logs?page=${query.page}&size=${query.size}`, options);
};
