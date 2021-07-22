import { entries } from 'lodash';
import './style.css';
const _ = require('lodash');
const basicLightbox = require('basiclightbox');

class SeachImage {
  constructor() {
    this.ArrayOfLi = document.querySelectorAll('li');
    this.divForButton = document.createElement('div');
    this.ul = document.createElement('ul');
    this.queryUl = document.querySelector('ul');
    this.input = document.querySelector('input');
    this.body = document.querySelector('body');
    this.form = document.querySelector('form');
    this.buttonQuary = document.querySelector('button');
    this.buttonLearnMore = document.querySelector('.buttonLearnMore');

    this.Url = `https://pixabay.com/api/?key=22464957-75c263b148a0dcbe3612abfba&q=&image_type=photo&per_page=12&page=1`;

    this.input.addEventListener(
      'input',
      _.debounce(this.fetchOnAPI.bind(this), 1000)
    );

    this.divForButton.addEventListener('click', (e) => {
      if (e.target.className === 'buttonLearnMore') {
        this.LearnMore();
      }
    });

    this.page = 1;
    this.valueOfInput = this.input.value;
    this.counterOfArray = 0;
  }

  observerRoot() {
    const arrLi = document.querySelectorAll('li');
    const lastElemOfUl = arrLi[arrLi.length - 1];

    const option = {
      root: null,
      threshold: 0.1,
    };

    let observer = new IntersectionObserver(this.LearnMore.bind(this), option);
    observer.observe(lastElemOfUl);
  }

  LearnMore() {
    setTimeout(() => {
      this.divForButton.innerHTML = '';
      this.Url = `https://pixabay.com/api/?key=22464957-75c263b148a0dcbe3612abfba&q=${
        this.input.value
      }&image_type=photo&per_page=12&page=${++this.page}`;

      fetch(this.Url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const result = data.hits;
          this.itterateImg(result);
        });
      this.valueOfInput = this.input.value;
      this.counterOfArray = this.counterOfArray + 12;
    }, 1000);

    // setTimeout(() => {
    //   const ArrayOfLi = document.querySelectorAll('li');
    //   console.log(this.counterOfArray);
    //   console.log(ArrayOfLi[this.counterOfArray].getBoundingClientRect());

    //   let valueOfScroll =
    //     ArrayOfLi[this.counterOfArray].getBoundingClientRect().top +
    //     window.scrollY;

    //   let counter = 1;
    //   ArrayOfLi.forEach((elem) => {
    //     elem.setAttribute('type', counter++);
    //   });
    //   window.scrollTo(0, valueOfScroll);
    // }, 500);
  }

  createlightBox() {
    document.querySelectorAll('.webformatURL').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        const instance = basicLightbox.create(
          `
          <img src="${event.target.src}" alt="">
      `
        );
        instance.show();
      });
    });
  }

  itterateImg(result) {
    this.divForButton.innerHTML = '';
    const buttonLearnMore = document.createElement('button');
    this.divForButton.append(buttonLearnMore);
    this.divForButton.setAttribute('class', 'divForButton');
    buttonLearnMore.setAttribute('class', 'buttonLearnMore');
    buttonLearnMore.innerText = 'Learn More';

    this.input.value = '';
    this.body.append(this.ul);
    const button = document.createElement('button');
    this.ul.insertAdjacentElement('afterend', this.divForButton);

    result.forEach(({ webformatURL, comments, downloads, likes, views }) => {
      const li = document.createElement('li');
      this.ul.append(li);
      const divPfotoCard = document.createElement('div');
      li.append(divPfotoCard);
      divPfotoCard.setAttribute('class', 'photo-card');
      const img = document.createElement('img');
      img.setAttribute('src', webformatURL);
      img.setAttribute('class', 'webformatURL');
      divPfotoCard.append(img);
      const divStat = document.createElement('div');
      divStat.setAttribute('class', 'stats');
      divPfotoCard.append(divStat);

      const pStatsItem = document.createElement('p');
      const pVisibility = document.createElement('p');
      const pComment = document.createElement('p');
      const pCloudDownload = document.createElement('p');

      const iCloud = document.createElement('i');
      const iVisibility = document.createElement('i');
      const iStatsItem = document.createElement('i');
      const iComment = document.createElement('i');

      iCloud.setAttribute('class', 'material-icons');
      iVisibility.setAttribute('class', 'material-icons');
      iStatsItem.setAttribute('class', 'material-icons');
      iComment.setAttribute('class', 'material-icons');

      pStatsItem.append(iStatsItem);
      pVisibility.append(iVisibility);
      pComment.append(iComment);
      pCloudDownload.append(iCloud);

      iStatsItem.innerText = 'thumb_up';
      iStatsItem.insertAdjacentText('afterend', likes);

      iComment.innerText = 'visibility';
      iComment.insertAdjacentText('afterend', views);

      iVisibility.innerText = 'comment';
      iVisibility.insertAdjacentText('afterend', comments);

      iCloud.innerText = 'cloud_download';
      iCloud.insertAdjacentText('afterend', downloads);

      pStatsItem.setAttribute('class', 'stats-item');
      pVisibility.setAttribute('class', 'stats-item');
      pComment.setAttribute('class', 'stats-item');
      pCloudDownload.setAttribute('class', 'stats-item');
      pComment.setAttribute('class', 'stats-item');

      divStat.append(pStatsItem, pVisibility, pComment, pCloudDownload);
    });
    this.createlightBox();

    this.observerRoot();
  }

  fetchOnAPI() {
    this.ul.innerHTML = '';
    if (this.valueOfInput !== this.input.value) {
      this.Url = `https://pixabay.com/api/?key=22464957-75c263b148a0dcbe3612abfba&q=${this.input.value}&image_type=photo&per_page=12&page=1`;
      fetch(this.Url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const result = data.hits;
          this.itterateImg(result);
        });
      this.valueOfInput = this.input.value;
    } else if (this.input.value === this.valueOfInput) {
      this.Url = `https://pixabay.com/api/?key=22464957-75c263b148a0dcbe3612abfba&q=${
        this.input.value
      }&image_type=photo&per_page=12&page=${++this.page}`;
      fetch(this.Url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const result = data.hits;
          this.itterateImg(result);
        });
      this.valueOfInput = this.input.value;
    }
  }
}

const b = new SeachImage();
