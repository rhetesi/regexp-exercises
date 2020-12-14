'use strict';

const visaRegExp = /^(\d{4} ){3}\d{4}$/;
const bankCardNumber = '1234 5678 1234 5678';

console.log(bankCardNumber.match(visaRegExp));