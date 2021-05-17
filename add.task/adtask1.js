for (let a = 0; a < 1; a += 1) {
  let Year = prompt('Введите свой год рождения');

  if (Year === null) {
    alert('Вы что, вообще не роделись?');
    a -= 1;
  } else if (Year % 4 == 0) {
    alert('Вы родились в высокостный год');
    a -= 1;
  } else {
    alert('Вам повезло');
    a -= 1;
  }
}
