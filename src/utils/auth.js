import request from './request';
import * as Cookie from 'tiny-cookie';
import { PANGKey } from '../../config';

/** Cookie 过期时间默认为一年 */
var expiresTime = new Date();
expiresTime.setFullYear(expiresTime.getFullYear() + 1);
expiresTime = expiresTime.toGMTString();

/** 用户登录页地址 */
const LOGIN_URL = '/';

/** 登陆鉴权 Cookie */
const AuthKey = 'PANG_USER';

const __uidMatch = /\?uid\=(\w+)/;

/**
 * 从 URL 中获取 uid
 */
function getRequestUid() {
  var queryUid = location.href.match(__uidMatch);
  if (!queryUid) { return false; }
  return queryUid[1];
}

/**
 * 跳转到登陆界面
 */
function redirectLogin() {
  var href = LOGIN_URL;
  window.location.href = href;
  return Promise.reject();
}

/**
 * 登陆根据 uid 换取用户信息接口
 */
function getUserInfoByUid(uid) {
  return request(
    '/user/login/auth',
    { uid }
  );
}

var userContext;

var Auth = {
  login() {
    return Auth.__Login();
  },
  __Login() {
    var uid = getRequestUid();  //获取url中的uid
    if (!uid) { return redirectLogin(); }  
    return getUserInfoByUid(uid); 
  },
  logout() {
    return request('/user/login/logout').then(redirectToLogin);
  },

  getUserContext() {
    if (!userContext) {
      let text = Cookie.get(PANGKey);
      if (!text) { return Auth.logout(); }
      userContext = text.split('&').reduce((context, str) => {
        let [k, v] = str.split('=');
        context[decodeURIComponent(k)] = decodeURIComponent(v);
        return context;
      }, {});

    }
    return userContext;
  },

  isLogin() {
    return Cookie.get(AuthKey) && Cookie.get(PANGKey);
  },
};

module.exports = Auth;
