// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и
// уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее
// значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление
// интерфейса

const counterResultElement = document.querySelector('#result');
let counterResult = counterResultElement.textContent;

let plusBtn = document.querySelector('[data-action= increment]');

let minBtn = document.querySelector('[data-action= decrement]');

minBtn.addEventListener('click', (event) => {
  counterResultElement.innerHTML = --counterResult;
});

plusBtn.addEventListener('click', (event) => {
  counterResultElement.innerHTML = ++counterResult;
});

// Событи

// 1. Можно написаить ивент прямов файле html - Такое не используется
// addEventListener = Будет работать несколько кликов

// mouseover = выш на объекте

// Можно передавать несколько Аргументов addEventListener(event, listener...)

// target = доступ к элементу

// В JS есть зарезервированые имена delete...

// Всплытие события - это когда код срабатывает на самом вложенном событии, а потом на родителе
