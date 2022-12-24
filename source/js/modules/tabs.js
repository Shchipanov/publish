const tabsControl = document.querySelectorAll('[data-tab-control]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

const selectTab = () => {
  if (tabsControl.length >= 1) {
    for (let i = 0; i < tabsControl.length; i++) {
      const tubControl = tabsControl[i];
      const tabContent = tabsContent[i];
      tubControl.addEventListener('click', (evt) => {
        evt.preventDefault();
        tabsControl.forEach((tub) => {
          tub.classList.remove('tabs__item--active');
        });
        tabsContent.forEach((content) => {
          content.classList.remove('subscriptions__sublist--active');
        });
        tubControl.classList.add('tabs__item--active');
        tabContent.classList.add('subscriptions__sublist--active');
      });
    }
  }
};

const removeNotJsTab = (elements) => {
  if (elements.length >= 1) {
    elements.forEach((element) => {
      element.classList.remove('is-not-js');
    });
  }
};

export {selectTab, removeNotJsTab, tabsControl, tabsContent};
