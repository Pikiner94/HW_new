function calculateEngravingPrice(message, price) {
  console.log(
    `Кол-во слов: ${
      message.split(' ').length
    }, Стоимость одного слова: ${price}, Итоговая стоимость: ${
      message.split(' ').length * price
    }`
  );
}
// calculateEngravingPrice(
//   'Proin sociis natoque et magnis parturient montes mus',
//   10
// );

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
