// Напиши скрипт который, при наборе текста в инпуте input#name-input
// (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// {
/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */
// }

const outputElement = document.querySelector('#name-output');
const inputElement = document.querySelector('#name-input');

inputElement.addEventListener('input', (event) => {
  if (!inputElement.value) {
    outputElement.textContent = 'Незнакомец';
    return;
  }
  outputElement.textContent = inputElement.value;
});
