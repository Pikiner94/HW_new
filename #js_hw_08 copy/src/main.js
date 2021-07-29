import galleryItems from './gallery-items.js';

const ulRef = document.querySelector('.gallery_js-gallery');
ulRef.classList.remove('gallery_js-gallery');
ulRef.classList.toggle('gallery');

galleryItems.forEach(({ original, description, preview }) => {
  const liRef = document.createElement('li');
  const aRef = document.createElement('a');
  const imgElem = document.createElement('img');
  aRef.setAttribute('class', 'gallery__link');
  liRef.setAttribute('class', 'gallery__item');
  imgElem.setAttribute('class', 'gallery__image');
  imgElem.setAttribute('data-source', original);
  imgElem.setAttribute('alt', description);
  imgElem.setAttribute('src', preview);
  liRef.append(aRef);
  aRef.append(imgElem);
  ulRef.append(liRef);

});

const btnGallery = document.querySelectorAll('.gallery__item');
const btnImg = document.querySelector('.lightbox__image');
const lightbox = document.querySelector('.lightbox');
const lightboxContent = document.querySelector('.lightbox__content');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const btnClose = document.querySelector('.lightbox__button');
const ArrayOfImg = document.querySelectorAll('.gallery__image');
console.log(ArrayOfImg);

const openElem = () => {
  btnImg.remove();
  lightbox.classList.add('is-open');

  let cloneImg = event.target.cloneNode(false);
  cloneImg.setAttribute('class', 'lightbox__image');
  lightboxContent.append(cloneImg);
};

btnGallery.forEach((elem) => {
  elem.addEventListener('click', openElem);
});

const closeElem = () => {
  lightbox.classList.remove('is-open');
  lightboxContent.firstElementChild.remove();
};

document.addEventListener('keydown', (event) => {
  if (event.code == 'Escape') {
    closeElem();
  }
});

const nextEl = (event) => {
  if (event.code === 'ArrowRight' && lightbox.classList.contains('is-open')) {
    // lightboxContent.firstElementChild.remove();
    const imageContainer = event.target
      .querySelector('.lightbox')
      .querySelector('.lightbox__image');
    const currentImgIndex = Array.from(ArrayOfImg).findIndex(
      (elem, index) => elem.getAttribute('src') === imageContainer.src
    );
    const nextImg = ArrayOfImg[currentImgIndex + 1];
    imageContainer.src = nextImg.src;
  }
};

const prevEl = (event) => {
  if (event.code === 'ArrowLeft' && lightbox.classList.contains('is-open')) {
    // lightboxContent.firstElementChild.remove();
    const imageContainer = event.target
      .querySelector('.lightbox')
      .querySelector('.lightbox__image');
    const currentImgIndex = Array.from(ArrayOfImg).findIndex(
      (elem, index) => elem.getAttribute('src') === imageContainer.src
    );
    const nextImg = ArrayOfImg[currentImgIndex - 1];
    imageContainer.src = nextImg.src;
  }
};

document.addEventListener('keydown', nextEl);
document.addEventListener('keydown', prevEl);
btnClose.addEventListener('click', closeElem);
lightboxOverlay.addEventListener('click', closeElem);
