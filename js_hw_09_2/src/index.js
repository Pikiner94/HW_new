import './style.css';
import menu from './menu.json';

const menuJs = document.querySelector('.menu');

menuJs.append();

menu.forEach(({ image, name, description, price, ingredients }) => {
  const li = document.createElement('li');
  const article = document.createElement('article');
  const img = document.createElement('img');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const i = document.createElement('i');
  const pCardprice = document.createElement('p');
  const pCard__descr = document.createElement('p');
  const ul = document.createElement('ul');

  ingredients.forEach((elem) => {
    const liElem = document.createElement('li');
    liElem.innerText = elem;
    ul.append(liElem);
  });

  li.append(article);
  article.append(img);
  img.insertAdjacentElement('afterend', div);
  div.insertAdjacentElement('afterbegin', h2);
  h2.insertAdjacentElement('afterend', pCardprice);
  pCardprice.insertAdjacentElement('afterbegin', i);
  pCardprice.insertAdjacentElement('afterbegin', i);
  i.insertAdjacentText('afterend', price + ` кредитов`);
  i.insertAdjacentText('beforeend', 'monetization_on');
  pCardprice.insertAdjacentElement('afterend', pCard__descr);
  pCard__descr.insertAdjacentElement('afterend', ul);
  const button = document.createElement('button');
  const iButtom = document.createElement('i');
  ul.insertAdjacentElement('afterend', button);
  button.append(iButtom);
  iButtom.insertAdjacentText('afterend', 'В корзину');

  li.setAttribute('class', 'menu__item');
  article.setAttribute('class', 'card');
  img.setAttribute('src', image);
  div.setAttribute('class', 'card__content');
  h2.setAttribute('class', 'card__name"');
  pCardprice.setAttribute('class', 'card__price');
  pCard__descr.setAttribute('class', 'card__descr');
  i.setAttribute('class', 'material-icons');
  button.setAttribute('class', 'card__button button');
  iButtom.setAttribute('class', 'material-icons button__icon');

  h2.innerHTML = name;
  pCard__descr.innerHTML = description;
  iButtom.innerText = 'shopping_cart';
  menuJs.append(li);
});

// {
/* <li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>
      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>
      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>
    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li> */
// }
const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const input = document.querySelector('.theme-switch__toggle');

const onToogleTheme = (event) => {
  const currentTheme = event.target.checked ? theme.DARK : theme.LIGHT;
  body.classList.toggle('dark-theme');

  localStorage.setItem('theme', currentTheme);
};

input.addEventListener('click', onToogleTheme);
window.addEventListener('load', () => {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === theme.DARK) {
    input.checked = true;
    body.classList.toggle('dark-theme');
  }
});
