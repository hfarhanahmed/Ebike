import {getAPICall} from './axiosWrapper';

//inventory-management/get-vehicle/
export function loginWithEmail(assetId) {
  return new Promise((success, failure) => {
    getAPICall(
      'inventory-management/get-vehicle/' + assetId,
      (response) => {
        success(response);
      },
      (message) => {
        failure(message);
      },
    );
  });
}
