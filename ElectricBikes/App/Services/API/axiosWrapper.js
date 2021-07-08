const axios = require('axios');
const BaseUrl = 'https://45459224-27db-4c10-8958-d7e4fab2a75f.mock.pstmn.io/';
const Token = '';
import getErrorMessage from './ServerErrorHandler';

const config = {
  headers: {
    Authorization: 'Bearer ' + Token,
  },
};

export function getAPICall(apiSubUrl) {
  return new Promise((success, failure) => {
    axios
      .get(BaseUrl + apiSubUrl, config)
      .then(function (response) {
        // handle success
        success(response.data);
      })
      .catch(function (error) {
        // handle error
        failure({
          status: error.response.status,
          message: getErrorMessage(error),
        });
      });
  });
}

export function postAPICall(apiSubUrl, paramsJson) {
  return new Promise((success, failure) => {
    axios
      .post(BaseUrl + apiSubUrl, paramsJson, config)
      .then(function (response) {
        success(response);
      })
      .catch(function (error) {
        console.log('error', error);
        failure({
          status: error.response.status,
          message: getErrorMessage(error),
        });
      });
  });
}

export function putAPICall(apiSubUrl, paramsJson) {
  return new Promise((success, failure) => {
    axios
      .put(BaseUrl + apiSubUrl, paramsJson, config)
      .then(function (response) {
        success(response);
      })
      .catch(function (error) {
        failure({
          status: error.response.status,
          message: getErrorMessage(error),
        });
      });
  });
}

export function patchAPICall(apiSubUrl, paramsJson) {
  return new Promise((success, failure) => {
    axios
      .patch(BaseUrl + apiSubUrl, paramsJson, config)
      .then(function (response) {
        success(response);
      })
      .catch(function (error) {
        failure({
          status: error.response.status,
          message: getErrorMessage(error),
        });
      });
  });
}
