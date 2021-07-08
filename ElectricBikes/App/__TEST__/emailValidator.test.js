export const modulo = (n, m) => {
  return ((n % m) + m) % m;
};

export const clamp = (min, mid, max) => {
  return Math.min(Math.max(min, mid), max);
};

export const emailValidator = (stringInput) => {
  // return Math.min(Math.max(min, mid), max);

  // const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  // const result = pattern.test(email);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(stringInput) === false) {
    console.log('Email is Not Correct');
    return false;
  } else {
    console.log('Email is Correct');
    return true;
  }
};

//TODO: rename to MathUtils
export default emailValidator;
