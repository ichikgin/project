const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      initialSlide: 0,
      spaceBetween: 0,
      enabled: false
    }
  }
});

// Удаление классов свайпера и добавление слайдов

const clientWidth = document.body.clientWidth;

const buttonExpand = document.querySelector('.button-expand'); //кнопка
const sliderWraper = document.querySelector('.slider__wrapper');
const swiperSlide = document.querySelectorAll('.swiper-slide');

const newSlide = document.querySelector('.newSlide').content.querySelector('.slider__slide'); // шаблон для нового  слайда


const contentAdd = function (link, altLink) {
  newSlide.children[0].src = link;
  newSlide.children[0].alt = altLink;
  return newSlide

}

if (clientWidth > 765)  {
  
  for (let i = 0; i < swiperSlide.length; i++) {
    const element = swiperSlide[i];
    element.classList.remove('swiper-slide')
  }

  document.querySelector('.swiper').classList.remove('swiper');
  document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');
  document.querySelector('.swiper-pagination').remove();

  sliderWraper.appendChild(contentAdd('./icons/swiperLogo/Sony.png', 'Sony').cloneNode(true));
  sliderWraper.appendChild(contentAdd('./icons/swiperLogo/Bosch.png', 'Bosch').cloneNode(true));

}

// Работа кнопки button-expand

buttonExpand.addEventListener('click', function() {
  buttonExpand.classList.toggle('button-narrow');
  sliderWraper.classList.toggle('slider__wrapper-narrow');
  const text = buttonExpand.querySelector('.button__text')
  text.classList.toggle('text-narrow')
  if(buttonExpand.classList.contains('button-narrow')) {
    text.textContent ='Скрыть'
  } else {
    text.textContent ='Показать всё'
  }
})