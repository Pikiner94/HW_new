import users from './users.js';

// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// const getSortedUniqueSkills = users => {
//   // твой код
// };
// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

const getSortedUniqueSkills = (users) => {
  let b = users
    .map(({ skills }) => skills)
    .reduce((prev, item) => prev.concat(item), []);

  return b.filter((item, index) => b.indexOf(item) === index).sort();
};

// console.log(getSortedUniqueSkills(users));
