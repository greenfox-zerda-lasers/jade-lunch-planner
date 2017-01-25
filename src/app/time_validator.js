
const lengthChecker = (number) => {
  return number.toString().length == 2 ? number : '0' + number;
};


const timeValidator = (time) => {
  const dateNow = new Date();
  const year = 1900 + dateNow.getYear();
  const month = lengthChecker(1 + dateNow.getMonth());
  const day = lengthChecker(dateNow.getDate());
  const hour = time.split(':')[0];
  const min = time.split(':')[1];

  return `${year}-${month}-${day} ${hour}:${min}:00`;
};


export default timeValidator;
