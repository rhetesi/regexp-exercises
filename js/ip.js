'use strict';

const ipRegExp = /^(\d{1,3}[.]){3}\d{1,3}$/;
const ipNumber = '123.456.789.123';

console.log(ipNumber.match(ipRegExp));