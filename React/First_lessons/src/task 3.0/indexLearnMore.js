var employers = [
  'Alex',
  '',
  'ludmila',
  'Viktor',
  '',
  'oleg',
  'iNna',
  'Ivan',
  'Alex',
  'Olga',
  ' Ann',
];
const employersName = employers
  .filter((elem) => elem.length > 1 && elem.length != '')
  .map((elem) => elem.toLowerCase().trim());
const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO'],
};

const calcCash = ({ cash }, own = 0) => {
  return cash.reduce((currentValue, own) => currentValue + own, own);
};

const finalInput = (
  owner,
  employersName,
  { eu, rus },
  director = 'Victor',
  total = calcCash(sponsors, 1000)
) => {
  console.log(
    `We have a business. Owner: ${owner}, director: Victor. Our Budjet: ${total}, And our employers: ${employersName}.And we have a sponsors:${
      (eu, rus)
    }. Note. Be careful with ${eu[0]}. It's a huge risk.`
  );
};

finalInput('Sam', employersName, sponsors);
