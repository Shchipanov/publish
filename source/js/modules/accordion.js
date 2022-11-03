const elementOpen = document.querySelectorAll('[data-details][open]');
const elementClose = document.querySelectorAll('[data-details]');

function accordion() {
  function onToggle(event) {
    if (!elementOpen) {
      // eslint-disable-next-line no-alert
      alert('меня нет на странице');
    } else {
      if (event.target.open) {
        elementOpen.forEach((el) => {
          // Исключаем из перебора елемент который мы только что открыли
          if (el === event.target) {
            return;
          }

          // Закрываем все остальные елементы <details>
          el.open = false;
        });
      }
    }
  }

  // Вешаем наблюдатель на все елементы <details> внутри акордеона
  if (!elementClose) {
    // eslint-disable-next-line no-alert
    alert('меня нет на странице');
  } else {
    elementClose.forEach((el) => el.addEventListener('toggle', onToggle));
  }
}

export {accordion};
