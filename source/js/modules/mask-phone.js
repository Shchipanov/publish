const dataPhone = document.querySelectorAll('[data-phone]');

function getMaskPhone() {
  if (!dataPhone) {
    // eslint-disable-next-line no-alert
    alert('меня нет на странице');
  } else {
    [].forEach.call(dataPhone, function (input) {
      let keyCode;
      function mask(event) {
        // eslint-disable-next-line no-unused-expressions
        event.keyCode && (keyCode = event.keyCode);

        // eslint-disable-next-line no-invalid-this
        let pos = this.selectionStart;
        if (pos < 3) {
          event.preventDefault();
        }
        let matrix = '+7 (___) ___-__-__';
        let i = 0;
        let def = matrix.replace(/\D/g, '');

        // eslint-disable-next-line no-invalid-this
        let val = this.value.replace(/\D/g, '');
        let newValue = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
        i = newValue.indexOf('_');

        if (i !== -1) {
          // eslint-disable-next-line no-unused-expressions
          i < 5 && (i = 3);
          newValue = newValue.slice(0, i);
        }
        let reg = matrix

            // eslint-disable-next-line no-invalid-this
            .substr(0, this.value.length)
            .replace(/_+/g, function (a) {
              return '\\d{1,' + a.length + '}';
            })
            .replace(/[+()]/g, '\\$&');
        reg = new RegExp('^' + reg + '$');
        // eslint-disable-next-line no-invalid-this
        if (
          // eslint-disable-next-line no-invalid-this
          !reg.test(this.value) ||
            // eslint-disable-next-line no-invalid-this
            this.value.length < 5 ||
            (keyCode > 47 && keyCode < 58)
        ) {
          // eslint-disable-next-line no-invalid-this
          this.value = newValue;
        }

        // eslint-disable-next-line no-invalid-this
        if (event.type === 'blur' && this.value.length < 5) {
          // eslint-disable-next-line no-invalid-this
          this.value = '';
        }
      }

      input.addEventListener('input', mask, false);
      input.addEventListener('focus', mask, false);
      input.addEventListener('blur', mask, false);
      input.addEventListener('keydown', mask, false);
    });

  }
}

export {getMaskPhone};
