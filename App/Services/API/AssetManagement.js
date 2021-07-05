import { getAPICall } from './axiosWrapper';

export function getBikes(category) {
  return new Promise((success, failure) => {
    getAPICall('search/' + category)
      .then((response) => {
        success(response);
      })
      .catch((message) => {
        failure(message);
      });
  });
}
