import './style.css';

const list_items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
  'Item 13',
  'Item 14',
  'Item 15',
  'Item 16',
  'Item 17',
  'Item 18',
  'Item 19',
  'Item 20',
  'Item 21',
  'Item 22',
];

const main = document.querySelector('main');

class Pagination {
  constructor(data, limit, appendElemet) {
    this.data = data;
    this.currentPage = 1;
    this.appendElemet = appendElemet;
    this.limit = limit;
    this.divItem = document.querySelector('#list');
    this.divPagination = document.querySelector('#pagination');
    this.allPages = Math.ceil(this.data.length / this.limit);
    this.nextButton = '>';
    this.previousButton = '<';
    this.divPagination.addEventListener('click', this.onPageClick.bind(this));
  }

  createList() {
    const start = (this.currentPage - 1) * this.limit;
    const end = start + this.limit;
    const arrayOfItem = this.data.slice(start, end);

    arrayOfItem.forEach((elem) => {
      const divList = document.createElement('div');
      this.divItem.append(divList);
      divList.innerText = elem;
    });
  }

  createButton() {
    const start = this.currentPage;
    const end =
      start + this.limit >= this.allPages ? this.allPages : start + this.limit;

    for (let i = start; i <= end; i += 1) {
      const divMain = document.createElement('div');
      const aMain = document.createElement('a');
      divMain.style.cursor = 'pointer';
      divMain.append(aMain);
      aMain.append(i);
      this.divPagination.append(divMain);
      divMain.setAttribute('id', 'button');
    }
    const arrowRight = document.createElement('div');
    const arrowLeft = document.createElement('div');
    arrowRight.setAttribute('id', 'buttonRight');
    arrowLeft.setAttribute('id', 'buttonLeft');
    arrowRight.innerText = this.nextButton;
    arrowLeft.innerText = this.previousButton;
    this.divPagination.prepend(arrowLeft);
    this.divPagination.append(arrowRight);
  }

  // nextPreviousClick() {
  //   this.event.stopPropagation();
  //   this.divPagination.innerHTML = '';
  //   this.divItem.innerHTML = '';
  //   if (this.currentPage === 1 && event.target.innerText === '<') {
  //     this.currentPage = 1;
  //   }
  //   // else if (
  //   //   this.currentPage === this.allPages &&
  //   //   event.target.innerText === "<"
  //   // ) {
  //   //   this.currentPage = this.allPages;
  //   // }
  //   this.render();
  // }

  onPageClick(event) {
    this.divPagination.innerHTML = '';
    this.divItem.innerHTML = '';
    if (event.target.innerText === '<' && this.currentPage === 1) {
      this.currentPage = 1;
    } else if (
      event.target.innerText === '>' &&
      this.currentPage === this.allPages
    ) {
      this.currentPage = this.allPages;
    } else if (event.target.innerText === '>') {
      this.currentPage++;
    } else if (event.target.innerText === '<') {
      this.currentPage--;
    } else if (event.target.innerText === '') {
      this.currentPage = this.currentPage;
    } else {
      this.currentPage = parseInt(event.target.innerText);
    }
    this.render();
  }

  render() {
    this.createButton();
    this.createList();
  }
}
const b = new Pagination(list_items, 5, main);

b.render();
////////////////////???//?/?/?/?/??///////?/?????????
