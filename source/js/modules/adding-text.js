const openParagraph = document.querySelector('[data-about="paragraph"]');

const aboutButton = document.querySelector('[data-about="btn"]');

function addText() {
  if (!aboutButton) {
    openParagraph.classList.add('about__paragraph--open');
    return;
  } else {
    aboutButton.addEventListener('click', function () {
      if (!openParagraph) {
        return;
      } else {
        if (openParagraph.classList.contains('about__paragraph')) {
          openParagraph.classList.remove('about__paragraph');
          openParagraph.classList.add('about__paragraph--open');
          aboutButton.textContent = 'Свернуть';
        } else {
          openParagraph.classList.remove('about__paragraph--open');
          openParagraph.classList.add('about__paragraph');
          aboutButton.textContent = 'Подробнее';
        }
      }
    });
  }

}

export {addText};
