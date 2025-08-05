//свайпер
var init = false;
var swiper;
function swiperCard() {
  const swiperContainer = document.querySelector('.swiper'); 
  
  
  if (window.innerWidth < 784) {
    if (!init) {
      init = true;
      swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        breakpoints: {
              320: { slidesPerView: 1.3, spaceBetween: 0},
              400: {slidesPerView: 2,spaceBetween: 90},
              500: {slidesPerView: 2.5,spaceBetween: 120},
              600: {slidesPerView: 3,spaceBetween: 140},
          },
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

document.addEventListener('DOMContentLoaded', () => {
if (window.innerWidth < 768) {
swiperCard(); // Инициализация свайпера
}
});

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



console.log('Ширина окна:', window.innerWidth); // Для отладки

// Бургер меню

const buttonOpen = document.getElementById('buttonOpen');
const buttonClose = document.getElementById('buttonClose');
const burgerMenu = document.getElementById('burgerMenu');
const body = document.querySelector('.body-flow');

buttonOpen.addEventListener('click', () => {
burgerMenu.classList.remove('burger-menu--hide');
body.classList.add("burger-menu--blur");
});

buttonClose.addEventListener('click', () => {
burgerMenu.classList.add('burger-menu--hide');
body.classList.remove("burger-menu--blur");
});

// Кнопка показать скрыть блок Repair
const buttonRepair = document.getElementById('showButtonTwo');
const appRepair = document.querySelector('.section-repair__show-conteiner--hidden');
const buttonImgRepair = document.querySelector('.button-learn-more__img-repair');
const buttonTextRepair = document.querySelector('.button-learn-more__text-repair');

let Open = false; // Флаг для отслеживания состояния блока

buttonRepair.addEventListener('click', () => {
  appRepair.style.transition = "all 0.6s ease-in-out";
  appRepair.classList.toggle("section-repair__show-conteiner");
  buttonImg.classList.toggle("button-learn-more__img--rotate");
  

  if (!Open) {
    buttonTextRepair.textContent = "Скрыть";
  } else{
    buttonTextRepair.textContent = "Показать все";
  }

  Open = !Open; // Переключаем состояние
});
 
// Кнопка показать скрыть
const button = document.querySelector('.button-learn-more--show');
const app = document.querySelector('.show-conteiner--hidden');
const buttonImg = document.querySelector('.button-learn-more__img');
const buttonText = document.querySelector('.button-learn-more__text1');


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

// Обратная связь

const buttonOpenFeed = document.getElementById('buttonOpenFeed');
const buttonOpenFeedMob = document.getElementById('buttonOpenFeedMob');
const buttonCloseFeed = document.getElementById('buttonCloseFeed');
const feedback = document.querySelector('.feedback-con');
const feedbackBlur = document.querySelector('.feedback--blur--hide');


buttonOpenFeedMob.addEventListener('click', () => {
feedback.classList.remove('feedback--hide');
feedbackBlur.classList.add("feedback--blur");
}); 

buttonOpenFeed.addEventListener('click', () => {
feedback.classList.remove('feedback--hide');
feedbackBlur.classList.add("feedback--blur");

});

buttonCloseFeed.addEventListener('click', () => {
feedback.classList.add('feedback--hide');
feedbackBlur.classList.remove("feedback--blur");
});


// Заказать звонок

const buttonOpenCall = document.getElementById('buttonOpenCall');
const buttonOpenCallMob = document.getElementById('buttonOpenCallMob');
const buttonCloseCall = document.getElementById('buttonCloseCall');
const feedCall = document.querySelector('.feedback-call');



buttonOpenCallMob.addEventListener('click', () => {
feedCall.classList.remove('feedback--hide');
feedbackBlur.classList.add("feedback--blur");
}); 

buttonOpenCall.addEventListener('click', () => {
feedCall.classList.remove('feedback--hide');
feedbackBlur.classList.add("feedback--blur");

});

buttonCloseCall.addEventListener('click', () => {
feedCall.classList.add('feedback--hide');
feedbackBlur.classList.remove("feedback--blur");
});


