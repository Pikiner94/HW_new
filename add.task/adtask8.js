// Задание 8

//               Написати гру камінь ножиці папір. Де компютер загадує своє
//               значення потім користувач вводить свій варіант і далі ми бачимо
//               результат на екрані хто виграв (Сделать и через for и через swift)

let arr = ['Бумага', 'Ножницы', 'Колодец'];
let gameRandom = Math.floor(Math.random() * arr.length * 1);

let b = arr[gameRandom];

for (let a = 0; a < 1; ) {
  let userInput = prompt('Введи: Колодец, Ножницы, Бумага');
  if (userInput == arr[gameRandom]) {
    alert(`Ничья. Вы ввели ${userInput}, а я загадал ${arr[gameRandom]}`);
  } else if (userInput == 'Ножницы' && arr[gameRandom] == 'Бумага') {
    alert(`Вы выиграли. Вы ввели ${userInput}, а я загадал ${arr[gameRandom]}`);
  } else if (userInput == 'Бумага' && arr[gameRandom] == 'Колодец') {
    alert(`Вы выиграли. Вы ввели ${userInput}, а я загадал ${arr[gameRandom]}`);
  } else if (userInput == 'Колодец' && arr[gameRandom] == 'Ножницы') {
    alert(`Вы выиграли. Вы ввели ${userInput}, а я загадал ${arr[gameRandom]}`);
  } else {
    alert(
      `Вы проиграли. Вы ввели ${userInput}, а я загадал ${arr[gameRandom]}`
    );
  }
}
