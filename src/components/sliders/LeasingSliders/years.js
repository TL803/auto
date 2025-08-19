document.addEventListener("DOMContentLoaded", function () {
  const downPaymentSlider = document.getElementById('downPaymentSlider');
  const downPaymentValue = document.getElementById('downPaymentValue');

  const termSlider = document.getElementById('termSlider');
  const termValue = document.getElementById('termValue');

  function formatNumber(num) {
    return num.toLocaleString('ru-RU');
  }

  function getYearWord(year) {
    if (year % 10 === 1 && year % 100 !== 11) return 'год';
    if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) return 'года';
    return 'лет';
  }

  if (downPaymentSlider && downPaymentValue) {
    downPaymentSlider.min = 100000;
    downPaymentSlider.max = 5000000;
    downPaymentSlider.step = 100000;
    downPaymentSlider.value = 100000;

    function updateDownPaymentDisplay() {
      const value = parseInt(downPaymentSlider.value);
      downPaymentValue.textContent = formatNumber(value) + ' ₽';

      const percent = ((value - downPaymentSlider.min) / (downPaymentSlider.max - downPaymentSlider.min)) * 100;
      downPaymentSlider.style.setProperty('--progress', `${percent}%`);
    }

    downPaymentSlider.addEventListener('input', updateDownPaymentDisplay);

    downPaymentValue.addEventListener('mousedown', function (e) {
      e.preventDefault();
      this.focus();
    });

    downPaymentValue.addEventListener('focus', function () {
      if (!this.dataset.originalValue) {
        this.dataset.originalValue = this.textContent;
      }
      this.textContent = '';
    });

    downPaymentValue.addEventListener('input', function () {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const cursorPosition = range.startOffset;

      let value = this.textContent;
      let cleaned = value.replace(/[^0-9]/g, '');

      this.textContent = cleaned;

      try {
        const newRange = document.createRange();
        const textNode = this.firstChild;
        newRange.setStart(textNode, Math.min(cursorPosition, textNode.length));
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      } catch (e) {
        const rangeEnd = document.createRange();
        rangeEnd.selectNodeContents(this);
        rangeEnd.collapse(false);
        selection.removeAllRanges();
        selection.addRange(rangeEnd);
      }
    });

    downPaymentValue.addEventListener('blur', function () {
      let inputText = this.textContent.trim();
      let num = parseInt(inputText.replace(/[^0-9]/g, ''));

      if (isNaN(num)) {
        num = parseInt(downPaymentSlider.value);
      } else {
        num = Math.max(parseInt(downPaymentSlider.min), Math.min(parseInt(downPaymentSlider.max), num));
        num = Math.round(num / parseInt(downPaymentSlider.step)) * parseInt(downPaymentSlider.step);
      }

      downPaymentSlider.value = num;
      downPaymentValue.textContent = formatNumber(num) + ' ₽';

      const percent = ((num - downPaymentSlider.min) / (downPaymentSlider.max - downPaymentSlider.min)) * 100;
      downPaymentSlider.style.setProperty('--progress', `${percent}%`);

      delete this.dataset.originalValue;
    });

    updateDownPaymentDisplay();
  }

  if (termSlider && termValue) {
    termSlider.min = 1;
    termSlider.max = 8;
    termSlider.value = 1;

    function updateTermDisplay() {
      const term = parseInt(termSlider.value);
      termValue.textContent = `${term} ${getYearWord(term)}`;

      const percent = ((term - termSlider.min) / (termSlider.max - termSlider.min)) * 100;
      termSlider.style.setProperty('--progress', `${percent}%`);
    }

    termSlider.addEventListener('input', updateTermDisplay);

    termValue.addEventListener('mousedown', function (e) {
      e.preventDefault();
      this.focus();
    });

    termValue.addEventListener('focus', function () {
      if (!this.dataset.originalValue) {
        this.dataset.originalValue = this.textContent;
      }
      this.textContent = '';
    });

    termValue.addEventListener('input', function () {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const cursorPosition = range.startOffset;

      let value = this.textContent;
      let cleaned = value.replace(/[^0-9]/g, '');

      this.textContent = cleaned;

      try {
        const newRange = document.createRange();
        const textNode = this.firstChild;
        newRange.setStart(textNode, Math.min(cursorPosition, textNode.length));
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      } catch (e) {
        const rangeEnd = document.createRange();
        rangeEnd.selectNodeContents(this);
        rangeEnd.collapse(false);
        selection.removeAllRanges();
        selection.addRange(rangeEnd);
      }
    });

    termValue.addEventListener('blur', function () {
      let inputText = this.textContent.trim();
      let num = parseInt(inputText.replace(/[^0-9]/g, ''));

      if (isNaN(num)) {
        num = parseInt(termSlider.value);
      } else {
        num = Math.max(parseInt(termSlider.min), Math.min(parseInt(termSlider.max), num));
      }

      termSlider.value = num;
      termValue.textContent = `${num} ${getYearWord(num)}`;

      const percent = ((num - termSlider.min) / (termSlider.max - termSlider.min)) * 100;
      termSlider.style.setProperty('--progress', `${percent}%`);

      delete this.dataset.originalValue;
    });

    updateTermDisplay();
  }
});