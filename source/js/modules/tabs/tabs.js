const tabs = () => {
  const tabControls = document.querySelectorAll('[data-tab-control]');
  const tabContent = document.querySelectorAll('[data-tab-content]');

  tabControls.forEach((control) => {
    control.addEventListener('click', (evt) => {
      evt.preventDefault();

      const attr = control.getAttribute('data-tab-control');
      const content = document.querySelector(`[data-tab-content="${attr}"]`);

      for (let i = 0; i < tabControls.length; i++) {
        if (tabControls[i].classList.contains('tabs__item--active')) {
          tabControls[i].classList.remove('tabs__item--active');
          break;
        }
      }
      control.classList.add('tabs__item--active');

      for (let i = 0; i < tabContent.length; i++) {
        if (tabContent[i].classList.contains('membership__sublist--active')) {
          tabContent[i].classList.remove('membership__sublist--active');
          break;
        }
      }
      content.classList.add('membership__sublist--active');
    });
  });
};

export {tabs};
