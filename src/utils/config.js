var env = process.env.NODE_ENV;
var baseURL = '';
var PANGKey = '';


if (env === 'development') {
  baseURL = 'http://dev.pangpang.net:8080';
  PANGKey = 'devPANGPANGKey';
} else {
  baseURL = 'http://pangpang.net:8080';
  PANGKey = 'PANGPANGKey';
}

module.exports = {
  baseURL,
  PANGKey
}
