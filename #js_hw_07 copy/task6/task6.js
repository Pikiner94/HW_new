// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', () => {
  if (inputElement.value.length > +inputElement.getAttribute('data-length')) {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
    // inputElement.style.borderColor = 'green';
    // inputElement.style.borderWidth = '5px';
  } else {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  }
  // inputElement.style.borderColor = 'red';
});
