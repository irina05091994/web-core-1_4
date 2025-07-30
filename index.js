//свайпер

var init = false;
var swiper;


function swiperCard() {
  const swiperContainer = document.querySelector('.swiper'); 

  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        slideToClickedSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        grabCursor: true,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      });
    }
  } else if (init) { 
    if (swiper) {
      swiper.destroy();
    }
    init = false;
  }
}


function swiperCardDestroy() {
const swiperNone = document.querySelector('.fide-copy');
const swiperWapperNone = document.querySelector('.card');

console.log('Ширина окна:', window.innerWidth); // Для отладки

if (window.innerWidth >= 768) {
if (swiperNone && swiperWapperNone) {
swiperNone.classList.remove('swiper');
swiperWapperNone.classList.remove('swiper-wrapper');
}
} else {
if (swiperNone && swiperWapperNone) {
console.log('Добавляем классы'); // Для отладки
swiperNone.classList.add('swiper');
swiperWapperNone.classList.add('swiper-wrapper');
swiperNone.classList.remove('card--temporary');

}
}
}





swiperCard();
window.addEventListener("resize", swiperCard);

swiperCardDestroy();
window.addEventListener("resize", swiperCardDestroy);

// Бургер меню

const buttonOpen = document.getElementById('buttonOpen');
const buttonClose = document.getElementById('buttonClose');
const burgerMenu = document.getElementById('burgerMenu');

buttonOpen.addEventListener('click', () => {
burgerMenu.classList.remove('burger-menu--hide');
});

buttonClose.addEventListener('click', () => {
burgerMenu.classList.add('burger-menu--hide');
});

// Кнопка показать скрыть
const button = document.querySelector('.button-learn-more--show');
const app = document.querySelector('.show-conteiner--hidden');
const buttonImg = document.querySelector('.button-learn-more__img');
const buttonText = document.querySelector('.button-learn-more__text1');
const buttonText2 = document.querySelector('.button-learn-more__text2--hide');

let isOpen = false; // Флаг для отслеживания состояния блока

button.addEventListener('click', () => {
  app.style.transition = "all 0.6s ease-in-out";
  app.classList.toggle("show-conteiner");
  button.classList.toggle("button-learn-more--hide");
  buttonImg.classList.toggle("button-learn-more__img--rotate");

  if (!isOpen) {
    buttonText.textContent = "Скрыть";
  } else{
    buttonText.textContent = "Показать все";
  }

  isOpen = !isOpen; // Переключаем состояние
});




