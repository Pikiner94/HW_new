import users from './users.js';

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).
// const getUserWithEmail = (users, email) => {
//   // твой код
// };
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// for

// const getUserWithEmail = (users, email) => {
//   for (let eResult of users) {
//     if (eResult.email === email) {
//       return eResult.name;
//     }
//   }
// };

// console.log(getUserWithEmail(users, 'sharlenebush@tubesys.com'));

const getUserWithEmail = (users, email) => {
  let user = users.find((item) => item.email == email);
  console.log(user.name);
};

getUserWithEmail(users, 'sharlenebush@tubesys.com');
