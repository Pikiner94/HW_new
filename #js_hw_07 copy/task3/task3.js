// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = (array) => {
  const galleryRef = document.querySelector('#gallery');
  galleryRef.style.display = 'flex';
  galleryRef.style.backgroundColor = 'green';
  galleryRef.style.justifyContent = 'center';

  array.forEach(({ url, alt }) => {
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', alt);
    li.append(img);
    galleryRef.append(li);
    img.style.height = '200px';
    li.style.padding = '10px';
    img.style.border = '5px solid';
    img.style.borderColor = 'orange';
  });
};

createGallery(images);
