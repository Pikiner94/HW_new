import users from './users.js';

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
// const getUsersWithAge = (users, min, max) => {
//   // твой код
// };
// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const getUsersWithAge = (users, min, max) => {
  let result = users.filter((item) => item.age > min && item.age < max);
  return result.map((item) => item.name);
};

console.log(getUsersWithAge(users, 30, 40));
