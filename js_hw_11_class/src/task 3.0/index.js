import { result } from 'lodash';
import './style.css';
const _ = require('lodash');

class SeachCountry {
  constructor(url) {
    this.divForCards = document.createElement('div');
    this.body = document.querySelector('body');
    this.body.append(this.divForCards);
    this.allUrl = url;
    this.divEnter = document.querySelector('.input');
    this.input = document.querySelector('.enter');
    this.divCardQuary = document.querySelector('.card');
    this.input.addEventListener(
      'input',
      _.debounce(this.observeFunction.bind(this), 1000)
    );
  }

  incertDataForEach(dataOfarray) {
    dataOfarray.forEach(({ name, capital, population, languages, flag }) => {
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
  }

  onlyOne(result) {
    this.divForCards.innerHTML = '';
    const divCard = document.createElement('div');
    const divInfor = document.createElement('div');
    const imgFlag = document.createElement('img');
    this.body.append(this.divForCards);
    this.divForCards.setAttribute('class', 'divForCard');
    this.divForCards.innerHTML = '';
    this.divForCards.append(divCard);
    divCard.setAttribute('class', 'card');
    divCard.append(divInfor);
    divInfor.setAttribute('class', 'describeInformation');
    imgFlag.setAttribute('class', 'flag');
    const pName = document.createElement('p');
    const pCapital = document.createElement('p');
    const pPopulation = document.createElement('p');
    const pLang = document.createElement('p');
    pName.setAttribute('class', 'name');
    pCapital.setAttribute('class', 'capital');
    pPopulation.setAttribute('class', 'population');
    pLang.setAttribute('class', 'lang');
    divInfor.setAttribute('class', 'describeInformation');

    divInfor.append(imgFlag, pName, pCapital, pPopulation, pLang);

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
  }

  moreThanOne(result) {
    this.divForCards.innerHTML = '';
    result.forEach(({ name }) => {
      const pCreate = document.createElement('p');
      pCreate.append(name);
      this.divForCards.prepend(pCreate);
    });
  }

  observeFunction() {
    fetch(this.allUrl)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        const result = datas.filter((data) =>
          data.name.toLowerCase().includes(this.input.value.toLowerCase())
        );
        console.log(result);

        if (result.length === 1) {
          this.onlyOne(result);
        } else if ((result.length > 1) & (result.length <= 10)) {
          this.moreThanOne(result);
        }
      });
  }
}

const Url = 'https://restcountries.eu/rest/v2/all';
const b = new SeachCountry(Url);
