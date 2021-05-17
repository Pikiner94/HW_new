for (let a = 0; a < 1; ) {
  let userInput = prompt('Введите ваше число');
  let randomGame = Math.ceil(Math.random() * 10);
  if (userInput == randomGame) {
    alert(`Вы угадали число. Я загадал ${randomGame}`);
    a += 1;
  } else {
    alert(`Не угадали, я загадал ${randomGame}, а вы ввели ${userInput}`);
  }
}
