for (a = 0; a < 1; ) {
  let userInput = prompt('Введите число');
  if (userInput < 55) {
    alert('Вы ввели не корректное число');
  } else if (userInput > 99) {
    alert('Вы ввели не корректное число');
  } else {
    alert('Число попадает в диапазон от 55 до 99');
    a += 1;
  }
}
