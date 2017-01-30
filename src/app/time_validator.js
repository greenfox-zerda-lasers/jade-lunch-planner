'use strict';

const lengthChecker = (number) => {
  return number.toString().length == 2 ? number : '0' + number;
 };


module.exports = {
  lengthChecker: (number) => {
    return number.toString().length == 2 ? number : '0' + number;
  },
  dateFormatter: (time, timezoneOffset) => {
    const today = new Date();
    const year = 1900 + today.getYear();
    const month = today.getMonth();
    const day = today.getDate();

    const hour = time.split(':')[0];
    const min = time.split(':')[1];

    const lunchTimeLocale = new Date(Date.UTC(
      year, month, day, hour, min));
    const lunchTimeUTC = lunchTimeLocale.getTime() + (timezoneOffset * 60000);

    return lunchTimeUTC;
  },
  dateLocalizer: (time) => {
    const localTime = new Date(parseInt(time));
    const localHour = lengthChecker(localTime.getHours());
    const localMinute = lengthChecker(localTime.getMinutes());

    return time = {
      hour: localHour,
      minute: localMinute,
    };
  }
};
