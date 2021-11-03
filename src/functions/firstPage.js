// * Function to implement mask in phone input * //
export function phoneMask(e) {
  let phone_aux = e.target.value
    .replace(/\D/g, '')
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  let phone = `(${phone_aux[1]}) ${phone_aux[2]}-${phone_aux[3]}`;
  return phone;
}

// * Function to calculate the age * //
export function calcAge(day, month, year) {
  if (day && month && year) {
    let dateString = `${year}/${month}/${day}`;
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age >= 0 && age < 110) {
      return age;
    } else {
      return 'Invalid Age';
    }
  }
}
