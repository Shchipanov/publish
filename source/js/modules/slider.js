/* eslint-disable no-unused-vars */
import Swiper, {Navigation} from 'swiper';

const sliderCoaches = () => {
  const swiperCoaches = new Swiper('.swiper-coaches', {
    modules: [Navigation],
    observer: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-btn-next--coaches',
      prevEl: '.swiper-btn-prev--coaches',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};


const sliderFeedback = () => {
  const swiperFeedback = new Swiper('.swiper-feedback', {
    modules: [Navigation],
    observer: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    infinite: false,
    loop: true,
    navigation: {
      nextEl: '.reviews__button-next--feedback',
      prevEl: '.reviews__button-prev--feedback',
    },
    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 40,
      },
    },
  });
  // swiperFeedback.on('slideChange', function () {
  //   swiperFeedback.el.children[0].style.height = '';
  // });
};

export {sliderCoaches, sliderFeedback};
