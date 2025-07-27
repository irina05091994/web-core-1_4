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
        slidesPerView: 1.3,
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

  if (window.innerWidth >= 768 ) {
      const swiperNone= document.querySelector('.fide-copy');
      swiperNone.classList.remove('swiper');
      const swiperWapperNone= document.querySelector('.card');
      swiperWapperNone.classList.remove('swiper-wrapper');
  }
}


swiperCard();
window.addEventListener("resize", swiperCard);

swiperCardDestroy();
window.addEventListener("resize", swiperCardDestroy);

// Кнопка показать скрыть
const button = document.querySelector('.button-learn-more--show');
const app = document.querySelector('.show-conteiner--hidden');
const buttonImg = document.querySelector('.button-learn-more__img');
const buttonText = document.querySelector('.button-learn-more__text1');
const buttonText2 = document.querySelector('.button-learn-more__text2--hide');

let isOpen = false; // Флаг для отслеживания состояния блока

button.addEventListener('click', () => {
  app.style.transition = "all 0.6s ease-in-out";

  if (!isOpen) {
    // Если блок закрыт, открываем его
    app.classList.add("show-conteiner");
    button.classList.add("button-learn-more--hide");
    buttonImg.classList.add("button-learn-more__img--rotate");
    buttonText.textContent = "Скрыть";
  } else {
    // Если блок открыт, сворачиваем его
    app.classList.remove("show-conteiner");
    button.classList.remove("button-learn-more--hide");
    buttonImg.classList.remove("button-learn-more__img--rotate");
    buttonText.textContent = "Показать все";
  }

  isOpen = !isOpen; // Переключаем состояние
});

