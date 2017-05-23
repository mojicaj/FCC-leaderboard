/*eslint-env node*/

var axios = require('axios');

module.exports = {
  fetchCampers: function (view) {

    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/' + view)
    .then(function (response) {
      return response.data;
    });
  }
};
