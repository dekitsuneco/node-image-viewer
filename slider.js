// Working with slider:
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderLine = document.querySelector('.slider-line');
let slideImages;
let width, count = 0;

fetch('./assets/slideImages.json')
  .then(res => res.json())
  .then(data => {
    addSlideImages(data);
    initSlider();
  });


function addSlideImages(data) {
  data.forEach(slideImage => {
    const link = `./assets/slideImages/${slideImage}`;

    const img = document.createElement('img');
    img.src = link;

    sliderLine.append(img);
  });

  slideImages = document.querySelectorAll('.slider .slider-line img');
}

function initSlider() {
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = (width * slideImages.length) + 'px';
  slideImages.forEach(slideImage => {
    slideImage.style.width = width +'px';
    slideImage.style.height = 'auto';
  });

  slide();
}

function slide() {
  sliderLine.style.transform = `translate(-${count * width}px)`;
}


sliderPrev.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = slideImages.length - 1;
  }
  
  slide();
});

sliderNext.addEventListener('click', () => {
  count++;
  if (count >= slideImages.length) {
    count = 0;
  }
  
  slide();
});

window.addEventListener('resize', initSlider);