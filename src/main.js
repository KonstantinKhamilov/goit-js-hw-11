import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('#loader'); // Добавлено

let lightbox; // Объявите переменную lightbox здесь

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) {
    alert('Пожалуйста, введите ключевое слово для поиска');
    return;
  }

  // Показать индикатор загрузки
  loader.classList.remove('hidden'); // Добавлено

  fetchImages(query)
    .then(images => {
      // Скрыть индикатор загрузки
      loader.classList.add('hidden'); // Добавлено

      renderImages(images, gallery);

      // Инициализируйте lightbox после добавления новых изображений
      lightbox = new SimpleLightbox('.image-card a', {
        /* опции */
      });
      input.value = '';
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message:
          'Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз.',
      });
    });
});

// Добавьте обработчик событий для клика по изображению
gallery.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') return;
  lightbox.show();
});