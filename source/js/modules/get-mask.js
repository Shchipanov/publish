function getMask() {
  if (document.querySelector('[data-phone]')) {
    const inputs = document.querySelectorAll('[data-phone]');

    const prefixNumber = (str) => {
      if (str === '7') {
        return '8';
      }
      if (str === '8') {
        return '8';
      }
      if (str === '9') {
        return '8';
      }
      return '89';
    };

    inputs.forEach((input) =>
      input.addEventListener('input', () => {
        const value = input.value.replace(/\D/g, '');
        const numberLength = 11;

        let result;
        if (input.value.includes('8') || input.value[0] === '8') {
          result = '';
        } else {
          result = '';
        }

        for (let i = 0; i < value.length && i < numberLength; i++) {
          switch (i) {
            case 0:
              result += prefixNumber(value[i]);
              continue;
            case 4:
              result += '';
              break;
            case 7:
              result += '';
              break;
            case 9:
              result += '';
              break;
            default:
              break;
          }
          result += value[i];
        }

        input.value = result;
      })
    );
  } else {
    return;
  }

  const phoneInputs = document.querySelectorAll('[data-phone]');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, getMask);
    }
  }
}

export {getMask};
