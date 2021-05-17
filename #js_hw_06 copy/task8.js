import users from './users.js';

// Массив имен всех пользователей у которых есть друг с указанным именем.
// const getUsersWithFriend = (users, friendName) => {
//   // твой код
// };
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony']

// console.log(b);

const getUsersWithFriend = (users, friendName) => {
  // let arrfriends = users.filter(({ friends }) => friends.includes(friendName));
  // return arrfriends.map((item) => item.name);

  return users
    .filter(({ friends }) => friends.includes(friendName))
    .map((item) => item.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony']

// let b = users.map(({ name }) => name);
// console.log(b);

// let c = users.map((item) => item.name);
// console.log(c);
