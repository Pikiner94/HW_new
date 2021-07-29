import { differenceBy, isArrayLikeObject } from 'lodash';
import './style.css';
const _ = require('lodash');

const input = document.querySelector('.enter');
const divEnter = document.querySelector('.input');
const body = document.querySelector('body');
const divForCards = document.createElement('div');
body.append(divForCards);
divForCards.setAttribute('class', 'forCards');

console.log(input.value);

function seachOfName() {
  const allUrl = 'https://restcountries.eu/rest/v2/all';
  fetch(allUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (datas) {
      const result = datas.filter((data) =>
        data.name.toLowerCase().includes(input.value.toLowerCase())
      );

      console.log(input.value);

      if (result.length === 1) {
        divForCards.innerHTML = '';
        const divCard = document.createElement('div');
        const divInfor = document.createElement('div');

        divCard.setAttribute('class', 'card');
        divEnter.insertAdjacentElement('afterend', divCard);

        const imgFlag = document.createElement('img');
        imgFlag.setAttribute('class', 'flag');
        divForCards.append(divCard);
        divCard.append(divInfor);
        divInfor.append(imgFlag);

        const pName = document.createElement('p');
        const pCapital = document.createElement('p');
        const pPopulation = document.createElement('p');
        const pLang = document.createElement('p');

        pName.setAttribute('class', 'name');
        pCapital.setAttribute('class', 'capital');
        pPopulation.setAttribute('class', 'population');
        pLang.setAttribute('class', 'lang');
        divInfor.append(pName, pCapital, pPopulation, pLang);
        divInfor.setAttribute('class', 'describeInformation');

        result.forEach(({ name, capital, population, languages, flag }) => {
          document.querySelector('.name').textContent = 'Country: ';
          document.querySelector('.capital').textContent = 'Capital: ';
          document.querySelector('.population').textContent = 'Population: ';
          document.querySelector('.lang').textContent = 'Languages: ';
          document.querySelector('.name').append(name);
          document.querySelector('.capital').append(capital);
          document.querySelector('.population').append(population);
          const img = document.querySelector('.flag');
          img.setAttribute('src', flag);
          languages.forEach((elem) => {
            document.querySelector('.lang').append(elem.name);
          });
        });
      } else if ((result.length > 1) & (result.length <= 10)) {
        divForCards.innerHTML = '';
        result.forEach(({ name }) => {
          const pCreate = document.createElement('p');
          pCreate.append(name);
          divForCards.prepend(pCreate);
        });
      }
    });
}

input.addEventListener('input', _.debounce(seachOfName, 1500));
