let deliveryCount = prompt('Введите название страны для доставки товара');
let del = deliveryCount.toLowerCase();

let china = 'китай';
let chili = 'чили';
let austr = 'австралия';
let india = 'индия';
let yama = 'ямайка';

let chinaCredit = 100;
let chiliCredir = 250;
let austrCredit = 165;
let indiaCredit = 90;
let yamaCredit = 130;

let chinaAlert = `Доставка в ${
  china[0].toUpperCase() + 'итай'
} будет стоить ${chinaCredit} кредитов`;
let chiliAlert = `Доставка в ${
  chili[0].toUpperCase() + 'или'
} будет стоить ${chiliCredir} кредитов`;
let austrAlert = `Доставка в ${
  austr[0].toUpperCase() + 'встралию'
} будет стоить ${austrCredit} кредитов`;
let indiaAlert = `Доставка в ${
  india[0].toUpperCase() + 'ндию'
} будет стоить ${indiaCredit} кредитов`;
let yamaAlert = `Доставка в ${
  yama[0].toUpperCase() + 'майку'
} будет стоить ${yamaCredit} кредитов`;

switch (del) {
  case china:
    alert(chinaAlert);
    break;

  case chili:
    alert(chiliAlert);
    break;

  case austr:
    alert(austrAlert);
    break;

  case india:
    alert(indiaAlert);
    break;

  case yama:
    alert(yamaAlert);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
