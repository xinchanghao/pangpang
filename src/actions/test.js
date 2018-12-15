import api from 'utils/api';

const test = (param) => {
  return () => {
    api.test(param).then(() => {
        Alert.info("修改成功");
        adminHistory.goBack();
    })
  }
};

export default {
  test
}
