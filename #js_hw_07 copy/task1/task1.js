// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории
// (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const getNumberOfCategory = (category) => {
  const itemNodes = document.querySelectorAll('.item');
  let countOfItems = 0;

  itemNodes.forEach((item) => {
    const itemTitle = item.getElementsByTagName('h2')[0].textContent;

    if (itemTitle === category) {
      countOfItems = item.querySelectorAll('li').length;
    }
  });

  console.log('count - ', countOfItems, 'Category:', countOfItems);
};

getNumberOfCategory('Технологии');
