import moment from 'moment-timezone';

export function getFormattedTime(time) {
  return moment(time).tz('America/Fortaleza').format('HH[h]mm');
}
