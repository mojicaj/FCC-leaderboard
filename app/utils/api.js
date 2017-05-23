var axios = require('axios');

function getTop30 () {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(function (response) {
      return response.data;
    });
}

function getTopAll () {
  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(function (response) {
      return response.data;
    });
}

module.exports = {
  fetchTop30: function () {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(function (response) {
      return response.data;
    });
  }
}
