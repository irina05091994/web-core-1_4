import '../css/style.scss';
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

document.addEventListener('DOMContentLoaded', () => {
if (window.innerWidth < 768) {
swiperCard(); // Инициализация свайпера
}
});



// Запуск при загрузке и ресайзе
window.addEventListener('load', swiperCard);
window.addEventListener('resize', swiperCard);







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
  appRepair.style.transition = "all 0.2s ease-in-out";
  appRepair.classList.toggle("section-repair__show-conteiner");
  buttonImgRepair.classList.toggle("button-learn-more__img--rotate");
  

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
  app.style.transition = "all 0.2s ease-in-out";
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


buttonOpenFeedMob.addEventListener('click', (e) => {
  e.stopPropagation();
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

// Кнопка чиать далее скрыть текст
const ButtonNext = document.querySelector('.button-next');
const appText = document.querySelector('.one-block__text4');
const appText2 = document.querySelector('.one-block__text2');
const appText3 = document.querySelector('.one-block__text3');
const buttonImgText = document.querySelector('.button-next__img');
const buttonTextReadmore = document.querySelector('.button-next__text');


let OpenText = false; // Флаг для отслеживания состояния блока

  ButtonNext.addEventListener('click', () => {
  appText.classList.toggle("one-block__text--hide");
  appText2.classList.toggle("one-block__text2--hide");
  appText3.classList.toggle("one-block__text3--hide");
    
  if (!OpenText) {
    buttonTextReadmore.textContent = "Скрыть";
    buttonImgText.classList.add("rotate");
  } else{
    buttonTextReadmore.textContent = "Читать далее";
    buttonImgText.classList.remove("rotate");
  }

  OpenText = !OpenText; // Переключаем состояние
});
