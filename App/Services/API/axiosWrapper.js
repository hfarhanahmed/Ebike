const axios = require('axios');
const BaseUrl = 'https://fair-dev.otoz.biz/api/';
const Token = '';
import getErrorMessage from './ServerErrorHandler';

const config = {
  headers: {
    Authorization: 'Bearer ' + Token,
    // tenantId: 'drivemate',
  },
};

export function getAPICall(apiSubUrl) {
  return new Promise((success, failure) => {
    axios
      .get(BaseUrl + apiSubUrl, config)
      .then(function (response) {
        // handle success
        console.log(BaseUrl + apiSubUrl, config);
        console.log('response getAPICall ', response);
        success(response);
      })
      .catch(function (error) {
        // handle error
        console.log(BaseUrl + apiSubUrl, config);
        console.log('error getAPICall', error);
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
