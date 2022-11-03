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
    (function () {
      if (window.localStorage) {
        if (!localStorage.getItem('firstLoad')) {
          localStorage['firstLoad'] = true;
          window.location.reload();
        } else {
          localStorage.removeItem('firstLoad');
        }
      }
    })();
    detailsAll.forEach((item) => {
      item.open = true;
    });
  }
}

export {viewportСhange};
