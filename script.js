// Creating a gallery in html:
const gallery = document.querySelector('.gallery');

fetch('./assets/images.json')
  .then(res => res.json())
  .then(data => displayImages(data));

function displayImages(data) {
  for (let i = 0; i < data.length; i++) {
    const link = `./assets/images/${data[i]}`;

    const a = document.createElement('a');
    a.href = link;
    a.target= '_blank';

    const img = document.createElement('img');
    img.src = link;
    img.classList.add('gallery__img');
    img.loading = 'lazy';

    a.appendChild(img);
    gallery.append(a);
  }
}