const SECOND = 1000;
const MINUTE = 60*1000;
const HOUR = 60*MINUTE;
const DAY = 24*HOUR;

const times = {
  days: DAY,
  hours: HOUR,
  minutes: MINUTE,
}


export const intervalToObject = ms => {

  const obj = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  ms = Math.abs(ms);
  Object.keys(times).forEach(k => {
    obj[k] = Math.floor(ms/times[k]);
    ms -= obj[k]*times[k];
  });

  obj.seconds = Math.round(ms/SECOND);

  return obj;
}