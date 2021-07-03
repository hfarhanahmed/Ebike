import { postAPICall } from './axiosWrapper';

//Example of POST API call
/* Import postAPICall function from axios Wrapper as above
use is in the function like below
params will be accoring to your need like is this case we only need email and password 
Succcess and Failure will be the callback functions*/
export function loginWithEmail(email, password) {
  return new Promise((success, failure) => {
    postAPICall('authentication/passport-sign-in', {
      email: email,
      password: password,
    })
      .then((response) => {
        success(response);
      })
      .catch((errorResponse) => {
        failure(errorResponse);
      });
  });
}

export function signup(firstname, lastname, email, password, zipCode, mobile) {
  return new Promise((success, failure) => {
    postAPICall('authentication/signup', {
      email: email,
      password: password,
    })
      .then((response) => {
        success(response);
      })
      .catch((errorResponse) => {
        failure(errorResponse);
      });
  });
}
