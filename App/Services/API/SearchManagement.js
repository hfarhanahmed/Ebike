import { getAPICall, postAPICall } from './axiosWrapper';

//inventory-management/get-vehicle/
export function search(params) {
  return new Promise((success, failure) => {
    postAPICall('search', params)
      .then((response) => {
        success(response);
      })
      .catch((errorResponse) => {
        failure(errorResponse);
      });
  });
}



export function getVehicleDetail(assetId) {
  // return new Promise((success, failure) => {
    return new Promise((success, failure) => {
      getAPICall('inventory-management/get-vehicle/' + assetId)
        .then((response) => {
          console.log('response ',response);
          success(response);
        })
        .catch((errorResponse) => {
          console.log('failure ',errorResponse);
          failure(errorResponse);
        });
    });

}
