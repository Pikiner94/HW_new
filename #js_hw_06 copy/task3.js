import users from './users.js';

// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// const getUsersWithEyeColor = (users, color) => {
//   // твой код
// };
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (users, color) => {
  if (color === 'blue') {
    return users.filter((item) => item.eyeColor == 'blue');
  } else if (color === 'green') {
    return users.filter((item) => item.eyeColor == 'green');
  }
};

// getUsersWithEyeColor(users, 'blue');

console.log(getUsersWithEyeColor(users, 'blue'));
console.log(getUsersWithEyeColor(users, 'green'));
