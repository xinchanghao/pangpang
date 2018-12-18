import reqwest from 'reqwest';
import { baseURL } from './config';
import { Alert } from 'antd';
// import Auth from './auth';

export default (router, criteria = {}, method = 'get',processData=true) => {
  return new Promise((resolve, reject) => {
    reqwest({
      url: baseURL + router,
      method,
      data: criteria,
      processData:processData,
      type: 'json',
      crossOrigin: true, //是否跨域
      withCredentials: true, //携带cookie
    }).then(resp => {
      if (resp.errno === 1018 || resp.errno === 404) {
        // Auth.clearCookie();
        window.location.href = '/';
        return;
      }
      if(resp.errno === 403) {
        Alert.error(resp.msg)
        // return Auth.logout();
      }
      if(resp.errno === 601){
        reject(resp);
      }
      resolve(resp.data);
    }).catch(resp => {
      console.log(resp, router);
      reject(resp);
    });
  });

}
