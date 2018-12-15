import request from 'utils/request';

const apiHome = {
  test(criteria) {
    return request("/cars-sale/user/login", criteria, "post")
  },

}
export default {
  ...apiHome
}

