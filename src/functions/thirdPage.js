// * Function to organize the list of certificates keeping the ones with a heart in front * //
const sortList = (list, newElement) => {
  let check = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i][1]) {
      check = i + 1;
    }
  }
  check ? list.splice(check, 0, newElement) : list.splice(0, 0, newElement);
  return list;
};

// * Function to check if have more to 5 certificates, if not have insert the certificate in the array, if have show alert  * //
export const moreCertificate = (certificate, certificateList, heart) => {
  if (certificate !== '') {
    if (certificateList.length < 5) {
      let aux = certificateList;
      heart
        ? (aux = sortList(aux, [certificate, heart]))
        : aux.push([certificate, heart]);
      return aux;
    } else {
      return false;
    }
  }
};
