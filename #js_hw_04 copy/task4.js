let totalSaler = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

// function countTotalSalary(text) {
//   let total = 0;

//   for (let i = 0; i < Object.keys(text).length; i += 1) {
//     if (Object.values(text)) {
//       total += Object.values(text)[i];
//     }
//   }
//   return total;
// }

// console.log(countTotalSalary(totalSaler));

// Через forEach

// let total = 0;
// Object.values(totalSaler).forEach(function (item) {
//   total += item;
// });

function countTotalSalary(text) {
  let total = 0;
  Object.values(text).forEach(function (item) {
    total += item;
  });
  return total;
}

console.log(countTotalSalary(totalSaler));
