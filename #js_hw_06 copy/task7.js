import users from './users.js';

// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = (users) => {
  let sum = 0;
  users.map((item) => (sum += item.balance));
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916
