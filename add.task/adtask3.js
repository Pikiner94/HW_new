for (a = 0; a < 1; a += 1) {
  let userInputA = prompt('Введите первое число');
  let userInputB = prompt('Введите второе число');
  let operation = prompt('Введите условие');
  if (operation == '+') {
    let sumN = userInputA + userInputB;

    alert(
      `Сумма числе ${userInputA} и ${userInputB} = ${
        Number(userInputA) + Number(userInputB)
      }`
    );
  } else if (operation == '-') {
    alert(
      `Разница чисел ${userInputA} и ${userInputB} = ${
        Number(userInputA) - Number(userInputB)
      }`
    );
  } else if (operation == '*') {
    alert(
      `Перемножение чисел ${userInputA} и ${userInputB} = ${
        Number(userInputA) * Number(userInputB)
      }`
    );
  } else if (operation == '/') {
    alert(
      `Деление чисел ${userInputA} и ${userInputB} = ${
        Number(userInputA) / Number(userInputB)
      }`
    );
  }
}
