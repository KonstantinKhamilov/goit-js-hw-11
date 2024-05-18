import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images, container) {
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Изображения, соответствующие вашему запросу, не найдены. Пожалуйста, попробуйте еще раз.',
    });
    return;
  }

  const markup = images
    .map(
      image => `
    <div class="image-card">
      <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" title=""/></a>
      <div class="image-info">
        <p><span>Просмотры: </span>${image.views}</p>
        <p><span>Загрузки: </span>${image.downloads}</p>
        <p><span>Лайки: </span>${image.likes}</p>
        <p><span>Комментарии: </span>${image.comments}</p>
      </div>
    </div>
  `
    )
    .join('');
  container.innerHTML = markup;
}
