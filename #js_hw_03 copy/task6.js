const getSumOfNumbers = (arr = []) => {
  if (!arr.length) {
    return 0;
  }
  let total = 0;
  for (const value of numbers) {
    total += value;
  }
  return total;
};

const numbers = [];

for (;;) {
  const input = prompt('Введите число');
  if (Number(input)) {
    numbers.push(Number(input));
  } else if (input === null) {
    const sum = getSumOfNumbers(numbers);
    console.log(`Общая сумма чисел равна ${sum}`);
    break;
  }
}

// Проверки;

// let a = 1;
// console.log(Number(a));

// let b = [];

// b.push(a);

// console.log(b);

// let c = 2;

// b.push(c);

// console.log(b);
