"use strict";

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.array.reduce.js");

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employersName = employers.filter(elem => elem.length > 1 && elem.length != '').map(elem => elem.toLowerCase().trim());
const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};

const calcCash = function calcCash(_ref) {
  let {
    cash
  } = _ref;
  let own = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return cash.reduce((currentValue, own) => currentValue + own, own);
};

const finalInput = function finalInput(owner, employersName, _ref2) {
  let {
    eu,
    rus
  } = _ref2;
  let director = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Victor';
  let total = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : calcCash(sponsors, 1000);
  console.log("We have a business. Owner: ".concat(owner, ", director: Victor. Our Budjet: ").concat(total, ", And our employers: ").concat(employersName, ".And we have a sponsors:").concat((eu, rus), ". Note. Be careful with ").concat(eu[0], ". It's a huge risk."));
};

finalInput('Sam', employersName, sponsors);