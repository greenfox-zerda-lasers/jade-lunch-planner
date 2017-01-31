'use strict';


module.exports = {
  toUTS: (time) => {
    const today = new Date();
    const year = 1900 + today.getYear();
    const month = today.getMonth();
    const day = today.getDate();

    const hour = time.split(':')[0];
    const min = time.split(':')[1];

    const lunchTimeLocale = new Date(
      year, month, day, hour, min);
    const lunchTimeUTS = lunchTimeLocale.getTime();

    return lunchTimeUTS;
  },
  toLocalTime: (time) => {
    const formatOptions = { minute: '2-digit', hour: '2-digit' };
    const localTime = new Date(parseInt(time))
      .toLocaleTimeString('en-GB', formatOptions);

    const hour = localTime.split(':', 1)[0];
    const minute = localTime.split(':', 2)[1];

    return `${hour}:${minute}`;
  }
};
