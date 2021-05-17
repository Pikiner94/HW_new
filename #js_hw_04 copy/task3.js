// function findBestEmployee(employees) {
//   let numberOf = 0;

//   for (let i = 0; i < Object.keys(employees).length; i += 1) {
//     if (Object.values(employees)[i] > Object.values(employees)[0]) {
//       numberOf = i;
//     }
//   }
//   return Object.keys(employees)[numberOf];
// }

// console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 })); // lorence

// function findBestEmployee(employees) {
//   let numberOf = Object.keys(employees)[0];

//   for (let value in employees) {
//     if (Object.values(value) > Object.values(employees)[0]) {
//       numberOf = Object.keys(value);
//     }
//   }
//   return numberOf;
// }

// console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

const obj = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

Object.keys(obj).forEach(function());
