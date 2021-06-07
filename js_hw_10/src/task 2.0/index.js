import './style.css';

// Напиши скрипт, который после нажатия кнопки Start,
//  раз в секунду меняет цвет фона body на случайное значение
//  из массива используя инлайн-стиль. При нажатии на кнопку Stop,
//  изменение цвета фона должно останавливаться.
let sietm;

const ChangeValue = () => {
  const colors = ['red', 'green', 'violet', 'gray', 'blue', 'yellow'];
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const valueBody = colors[randomIntegerFromInterval(0, 5)];
  const body = document.querySelector('body');
  body.style.background = valueBody;
};

const ClickApp = (event) => {
  if (event.target.getAttribute('data-action') === 'start') {
    sietm = setInterval(ChangeValue, 1000);
  } else if (event.target.getAttribute('data-action') === 'stop') {
    clearInterval(sietm);
  }
};

document.addEventListener('click', ClickApp);
