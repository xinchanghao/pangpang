import api from 'utils/api';
import { Alert } from 'antd';


const test = (param) => {
  return () => {
    api.test(param).then(() => {
        console.log("修改成功");
        // adminHistory.goBack();
    })
  }
};

export default {
  test
}
