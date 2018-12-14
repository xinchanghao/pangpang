var env = process.env.ODIN_ENV;
var baseURL = '';
var PANGKey = '';

var sharePublic= '';
if (env === 'development') {
  baseURL = '';
  PANGKey = 'devPANGPANG';
} else {
  baseURL = '';
  PANGKey = 'PANGPANG';
}

module.exports = {
  baseURL,
  PANGKey
}