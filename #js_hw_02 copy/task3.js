let massage;
let show = prompt('Введите пароль');
let pass = 'ADMIN_PASSWORD';

if (show == pass) {
  massage = 'Добро пожаловать!';
  console.log(massage);
  alert(massage);
} else if (show == null) {
  (massage = 'Отменено пользователем'), console.log(massage), alert(massage);
} else if (show != pass) {
  (massage = 'Доступ запрещен, неверный пароль!'),
    console.log(massage),
    alert(massage);
}

massage = "const ADMIN_PASSWORD = 'adminpass'; let message;";
alert(massage);
