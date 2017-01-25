
const lengthChecker = (number) => {
  return number.toString().length == 2 ? number : '0' + number;
};


const timestampNormalizer = (time) => {
  const dateNow = new Date();
  const year = 1900 + dateNow.getYear();
  const month = lengthChecker(1 + dateNow.getMonth());
  const day = lengthChecker(dateNow.getDate());
  const hour = time.split(':')[0];
  const min = time.split(':')[1];

  return `${year}-${month}-${day} ${hour}:${min}:00`;
};


const validateHhMm = (inputField) => {
  const isValid =
    /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/
    .test(inputField);

  if (isValid) {
    return timestampNormalizer(inputField);
  } else {
    console.log('Wrong time format! It should look like ==> 12:40');
  }
}


export default validateHhMm;
