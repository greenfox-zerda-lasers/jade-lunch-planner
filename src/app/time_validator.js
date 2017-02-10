'use strict';


export const timezoneOffset = () => {
  const date = new Date();
  return date.getTimezoneOffset();
};


export const toUTS = (time, timezoneOffset) => {
  const today = new Date(),
        year = 1900 + today.getYear(),
        month = today.getMonth(),
        day = today.getDate();

  const hour = time.split(':')[0],
        min = time.split(':')[1];

  const lunchTimeLocale = new Date(
    year, month, day, hour, min);

  const lunchTimeUTS = lunchTimeLocale.getTime() + (timezoneOffset * 60000);

  return lunchTimeUTS;
};


export const toLocalTime = time => {
  const formatOptions = { minute: '2-digit', hour: '2-digit' },
        localTime = new Date(parseInt(time))
    .toLocaleTimeString('en-GB', formatOptions);

  const hour = localTime.split(':', 1)[0],
        minute = localTime.split(':', 2)[1];

  return `${hour}:${minute}`;
};
