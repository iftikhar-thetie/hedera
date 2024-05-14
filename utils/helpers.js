import { DateTime } from 'luxon';

export function percentage(val) {
  if (typeof val === 'undefined' || val === null || val === '' || val === 'N/A') {
    return '';
  }
  return parseFloat(val) > 0 ? `+${val}%` : `${val}%`;
}

export function decimals(value, minDecimals = 4, maxDecimals = 4) {
  if (typeof value === 'undefined' || value === null || value === '' || isNaN(value)) {
    return '';
  }
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals
  }).format(value);
}

export function truncate(value, maxChars) {
  if (value && value.length > maxChars) {
    return value.slice(0, maxChars) + '...';
  }
  return value;
}

export function rounded(value, decimalPlaces = 2) {
  if (typeof value === 'undefined' || value === null || value === '' || isNaN(value)) {
    return '';
  }
  var decimalNumber = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  }).format(decimalNumber);
}

export function roundedPercent(value, decimalPlaces = 2) {
  const r = rounded(value, decimalPlaces);
  return r ? r + '%' : '';
}

export function readableDate(date, utc = false) {
  if (!date) {
    return '';
  }
  if (utc) {
    return DateTime.fromISO(date).setZone('UTC').toFormat('LLL dd, yyyy');
  } else {
    return DateTime.fromISO(date).toFormat('LLL dd, yyyy');
  }
}

export function minimalTimeWithinToday(date) {
  if (!date) {
    return '';
  }
  // if today then remove YYYY-MM-DD
  let datetime = null;
  if (isNaN(date)) {
    datetime = DateTime.fromISO(date);
  } else {
    datetime = DateTime.fromMillis(date);
  }
  if (datetime.toFormat('yyyy-MM-dd') === DateTime.now().toFormat('yyyy-MM-dd')) {
    return datetime.toFormat('h:mma');
  }

  // if same year, remove the year
  if (datetime.toFormat('yyyy') === DateTime.now().toFormat('yyyy')) {
    return datetime.toFormat('LLL dd, h:mm a');
  }

  return datetime.toFormat('LLL dd, yyyy h:mm a');
}

export function formatPrice(num) {
  const precision = 6;
  const dec = Math.pow(10, precision);
  var price = (Math.round(Number(num) * dec) / dec).toLocaleString(undefined, {
    minimumFractionDigits: precision
  });
  if (price != 0) return price;

  return formatSmallNumbers(num);
}

export function formatNumber(n) {
  if (typeof n === 'undefined' || n === null) return '';
  return n.toLocaleString();
}

export function formatBigNumber(n) {
  if (typeof n === 'undefined' || n === null) return '';
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
}

export function formatSmallNumbers(num) {
  var i = 1;
  let n = num,
    limit = Math.pow(10, 12);
  while (n < 10 && i <= limit) {
    n = n * 10;
    i *= 10;
  }
  if (i > limit) return 0;
  return (parseInt(n) / i).toFixed(Math.round(Math.log(i) / Math.log(10)));
}

export function randomSeries(low, high, n = 25) {
  const s = [];
  const min = Math.floor(low);
  const max = Math.ceil(high);
  for (let i = 0; i < n; i++) {
    s.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return s;
}

export default {
  percentage,
  truncate,
  decimals,
  rounded,
  roundedPercent,
  readableDate,
  minimalTimeWithinToday,
  formatPrice,
  formatNumber,
  formatBigNumber,
  formatSmallNumbers,
  randomSeries
};
