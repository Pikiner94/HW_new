for (a = 0; a < 1; a += 1) {
  let userInput = prompt('Введите температуру по цельсию');
  if (userInput != isNaN()) {
    alert(`Температу по Фаренгейту равна ${(userInput * 9) / 5 + 32}F`);
  }
}
