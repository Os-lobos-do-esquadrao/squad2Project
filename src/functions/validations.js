// * Function to check if infosForms is undefined and is a empty object  * //
export const NavValidation = (infosForms) => {
  if (infosForms !== undefined && Object.entries(infosForms).length !== 0) {
    return true;
  }
  return false;
};

// * Function to validate the fullName , true = is valid * //
export const FullNameValidation = (fullName) => {
  return !/\d/.test(fullName);
};

export const NickNameValidation = (nickName) => {
  return /^([a-zA-Z]*)+(([',. -_][a-zA-Z ])?[a-zA-Z]*)*$/.test(nickName);
};

// * Function to validate the email , true = is valid * //
export const EmailValidation = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

// * Function to validate the phone , true = is valid * //
export const PhoneValidation = (phone) => {
  return /^\(?([0-9]{2})\) ?([0-9]{5})[-]?([0-9]{4})$/.test(phone);
};

// * Function to validate the date , true = is valid * //
export const DateValidation = (date) => {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;

  var parts = date.split('/');
  var day = parseInt(parts[1], 10);
  var month = parseInt(parts[0], 10);
  var year = parseInt(parts[2], 10);

  if (year < 1000 || year > 3000 || month === 0 || month > 12) return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;

  return day > 0 && day <= monthLength[month - 1];
};

// * Function to validate the inputValue , true = is valid * //
export const SQLInjectionValidation = (inputValue) => {
  return (
    !/'/.test(inputValue) && !/--/.test(inputValue) && !/;/.test(inputValue)
  );
};

// * Function to validate the githubURL , true = is valid * //
export const GithubValidation = (githubURL) => {
  return /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(?:\.git|\.com)(?:\/|\#)([-\d\w._]+?)$/.test(
    githubURL
  );
};
// (?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$

// * Function to validate the linkedinURL , true = is valid * //
export const LinkedinValidation = (linkedinURL) => {
  return /^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/.test(linkedinURL);
};
