// Задание 5

//               Написати програму де користувач вводить 3 числа, після вводу всіх
//               трьох чисел йому на екрані показується найбільше з них. Додатково
//               перевіряти чи це взагалі числа

// Я понимаю данную задачу, как делать проверку после каждого ввода цифры и если не корректный ввод, то ввернуть на шаг назад

for (let a = 0; a < 1; a += 1) {
  for (let b = 0; b < 1; b += 1) {
    let userInput1 = prompt('Введите первое число');

    if (isNaN(userInput1)) {
      alert('Вы ввели не число');
      b -= 1;
    } else if (Number(userInput1)) {
    }

    for (let c = 0; c < 1; c += 1) {
      let userInput2 = prompt('Введите второе число');
      if (isNaN(userInput2)) {
        c -= 1;
        alert('Вы ввели не число');
      } else if (Number(userInput2)) {
      }
      for (let d = 0; d < 1; d += 1) {
        let userInput3 = prompt('Введите третье число');

        if (isNaN(userInput3)) {
          alert('Вы ввели не число');
          d -= 1;
        } else if (Number(userInput3)) {
          alert(
            `Вы ввели максимальное значение ${Math.max(
              userInput1,
              userInput2,
              userInput3
            )}`
          );
        }
      }
    }
  }
}
