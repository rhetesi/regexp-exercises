'use strict';

const macRegExp = /^([A-F0-9]{2}-){5}[A-F0-9]{2}$/;
const macAddress = 'A1-01-5F-3E-17-2C';

console.log(macAddress.match(macRegExp));