// * Function to check if infosForms is undefined and is a empty object  * //
export const navValidation = (infosForms) => {
  if (infosForms !== undefined && Object.entries(infosForms).length !== 0) {
    return true;
  }
  return false;
};
