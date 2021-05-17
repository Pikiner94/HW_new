let feroP = prompt('Какое кол-во дроидов вы хотите купить?');
let credit = 35500;
let PricePerDroid = 3000;
let total_price = PricePerDroid * feroP;
let cop = `Вы купили: ${feroP} дроидов, на счету осталось: ${
  credit - total_price
}`;

if (feroP == null) {
  alert('Отменено пользователем!');
}
if (total_price > credit) {
  alert('Недостаточно средств на счету');
} else {
  alert(cop);
}
