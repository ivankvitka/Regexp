//task #1
var str1 = 'Завтрак в 00:00';
var str2 = 'Завтрак в 23:59';
var str3 = 'Завтрак в 24:00';

console.log(findValidTime(str1));
console.log(findValidTime(str2));
console.log(findValidTime(str3));

//task #2
var multiplication = '2 * 3';
var division = '-1.23 / (-2.16)';
var addition = '18     +    10';
var subtraction = '10 -(-38)';

console.log(findValidOperation(multiplication));
console.log(findValidOperation(division));
console.log(findValidOperation(addition));
console.log(findValidOperation(subtraction));

//task #3
let url = createURL(
  `/api/countries/{country}/regions/{region}/`,
  {country: `Ukraine`, region: `Kiev`}
);

console.log(
  url === '/api/countries/Ukraine/regions/Kiev/'
);

function findValidTime(str) {
  return str.match(/(0\d|1\d|2[0-3]):[0-5]\d/);
}

function findValidOperation(str) {
  return str.match(/(-?\d+\.?\d*)\s*([-+*/])\s*(\(-\d+\.?\d*\)|\d+\.?\d*)/);
}

function createURL(url, obj) {
  for (var key in obj) {
    var regExp = new RegExp('{' + key + '}');
    url = url.replace(regExp, obj[key]);
  }
  return url;
}