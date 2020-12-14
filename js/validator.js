'use strict';

const Validator = {
    rules: {
        visa: /^(\d{4} ){3}\d{4}$/,
        ip: /^(\d{1,3}[.]){3}\d{1,3}$/,
        mac: /^([A-F0-9]{2}-){5}[A-F0-9]{2}$/,
    },

    validate(text, type) {
        return text.match(this.rules[type]) ? true : false;
    }
}

console.log(Validator.validate('1234 5678 1234 5678', 'visa'));
console.log(Validator.validate('123.456.789.123', 'ip'));
console.log(Validator.validate('123.1.1.123', 'ip'));
console.log(Validator.validate('12-54-EF-5C-6D-87', 'mac'));