const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// for (let i = 0; i < Object.keys(user).length; i += 1) {
//   if (Object.keys(user) != 'mood') {
//     user.mood = 'happy';
//     user.hobby = 'skydiving';
//     user.premium = 'false';
//   }
// }

// console.log(user);

// Оптимизация

let arrayUser = Object.keys(user);

for (let value of arrayUser) {
  if (Object.keys(value) != 'mood') {
    user.mood = 'happy';
    user.hobby = 'skydiving';
    user.premium = 'false';
  }
}

// console.log(user);

// Оптимизация Вопрос Как использовать тернарный оператор в цикле? (Ниже не работает)

// for (let value of arrayUser) {
//   Object.keys(value) != 'mood'? ((user.mood = 'happy'),(user.hobby = 'skydiving'),(user.premium = 'false'))
// }

console.log(user);
