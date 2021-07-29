// const limit = 5; //
// let currentPage = 1;

// const main = document.querySelector('main');
// const listOFItems = document.querySelector('#list');
// const pagination = document.querySelector('#pagination');

// // const allPages = Math.ceil(list_items.length / limit);
// const allPages = 100;

// function createList(list_items, limit, currentPage, listOFItems) {
//   // (list, currentPage)

//   currentPage--;
//   const start = currentPage * limit;
//   const end = start + limit;

//   const arrayOfItem = list_items.slice(start, end);
//   arrayOfItem.forEach((elem) => {
//     const divList = document.createElement('div');
//     listOFItems.append(divList);
//     divList.innerText = elem;
//   });
// }

// function createButton(limit, currentPage) {
//   // (list, currentPage)
//   const start = currentPage;
//   const end = start + limit >= allPages ? allPages : start + limit;

//   for (let i = start; i <= end; i += 1) {
//     const divMain = document.createElement('div');
//     const aMain = document.createElement('a');
//     divMain.style.cursor = 'pointer';
//     divMain.append(aMain);
//     aMain.append(i);
//     pagination.append(divMain);
//     divMain.setAttribute('id', 'button');
//   }

//   const arrowRight = document.createElement('div');
//   const arrowLeft = document.createElement('div');
//   arrowRight.setAttribute('id', 'buttonRight');
//   arrowLeft.setAttribute('id', 'buttonLeft');
//   arrowRight.innerText = '>';
//   arrowLeft.innerText = '<';
//   pagination.prepend(arrowLeft);
//   pagination.append(arrowRight);

//   arrowRight.addEventListener('click', (event) => {
//     event.stopPropagation();
//     // pagination.addEventListener(...)
//     if (currentPage === allPages && event.target.innerText === '>') {
//       currentPage == allPages;
//     } else {
//       currentPage++;
//     }
//     // clear HTML document
//     pagination.innerHTML = '';
//     listOFItems.innerHTML = '';
//     createList(list_items, limit, currentPage, listOFItems); // generateContent()
//     createButton(limit, currentPage);
//   });

//   arrowLeft.addEventListener('click', (event) => {
//     event.stopPropagation();
//     // pagination.addEventListener(...)
//     // clear HTML document
//     pagination.innerHTML = '';
//     listOFItems.innerHTML = '';
//     if (currentPage === 1 && event.target.innerText === '<') {
//       currentPage = 1;
//     } else {
//       currentPage--;
//     }
//     createList(list_items, limit, currentPage, listOFItems); // generateContent()
//     createButton(limit, currentPage);
//   });
// }

// // function generateContent() {...}
// createList(list_items, limit, currentPage, listOFItems);
// createButton(limit, currentPage);

// pagination.addEventListener('click', (event) => {
//   // pagination.addEventListener(...)
//   currentPage = parseInt(event.target.innerText);
//   // clear HTML document

//   pagination.innerHTML = '';
//   listOFItems.innerHTML = '';
//   createList(list_items, limit, currentPage, listOFItems); // generateContent()
//   createButton(limit, currentPage);
// });

// arrowLeft.addEventListener('click', (event) => {
//   event.stopPropagation();
//   this.divPagination.innerHTML = '';
//   this.divItem.innerHTML = '';

//   if (this.currentPage === 0 && event.target.innerText === '<') {
//     this.currentPage = 1;
//   } else {
//     this.currentPage--;
//   }
//   this.render();
// });
