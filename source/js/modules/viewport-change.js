import {accordion} from './accordion';

const detailsAll = document.querySelectorAll('[data-details]');

function viewportСhange() {
  let viewport = window.innerWidth;
  if (viewport < 767) {
    detailsAll.forEach((item) => {
      item.open = false;
    });
    accordion();
  } else {
    detailsAll.forEach((item) => {
      item.open = true;
    });
  }
}

export {viewportСhange};
