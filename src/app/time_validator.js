'use strict';


module.exports = {
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
    const hello = new Date(parseInt(time));
    console.log(hello.toLocaleString());
  }
};
