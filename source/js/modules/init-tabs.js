export const initTabs = () => {
  const tabControls = document.querySelectorAll('[data-tab-control]');
  const tabContent = document.querySelectorAll('[data-tab-content]');

  tabControls.forEach((control) => {
    control.addEventListener('click', (evt) => {
      evt.preventDefault();

      const attribute = control.getAttribute('data-tab-control');
      const content = document.querySelector(
          `[data-tab-content="${attribute}"]`
      );

      for (let i = 0; i < tabControls.length; i++) {
        if (tabControls[i].classList.contains('tabs__item--active')) {
          tabControls[i].classList.remove('tabs__item--active');
          break;
        }
      }
      control.classList.add('tabs__item--active');

      for (let i = 0; i < tabContent.length; i++) {
        if (
          tabContent[i].classList.contains('subscriptions__sublist--active')
        ) {
          tabContent[i].classList.remove('subscriptions__sublist--active');
          break;
        }
      }
      content.classList.add('subscriptions__sublist--active');
    });

    control.addEventListener('keyup', (event) => {

      const attribute = control.getAttribute('data-tab-control');
      const content = document.querySelector(
          `[data-tab-content="${attribute}"]`
      );

      if (event.code === 'Enter') {
        for (let i = 0; i < tabControls.length; i++) {
          if (tabControls[i].classList.contains('tabs__item--active')) {
            tabControls[i].classList.remove('tabs__item--active');
            break;
          }
        }
        control.classList.add('tabs__item--active');

        for (let i = 0; i < tabContent.length; i++) {
          if (
            tabContent[i].classList.contains('subscriptions__sublist--active')
          ) {
            tabContent[i].classList.remove('subscriptions__sublist--active');
            break;
          }
        }
        content.classList.add('subscriptions__sublist--active');
      }
    });

  });
};

