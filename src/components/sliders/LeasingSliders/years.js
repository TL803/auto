document.addEventListener("DOMContentLoaded", function () {
  const downPaymentSlider = document.getElementById('downPaymentSlider');
  const downPaymentValue = document.getElementById('downPaymentValue');

  const termSlider = document.getElementById('termSlider');
  const termValue = document.getElementById('termValue');

  // Формат числа с пробелами (1 200 000)
  function formatNumber(num) {
    return num.toLocaleString('ru-RU');
  }

  // Склонение слова "год"
  function getYearWord(year) {
    if (year % 10 === 1 && year % 100 !== 11) return 'год';
    if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) return 'года';
    return 'лет';
  }

  // === Настройка слайдера "Первоначальный взнос" ===
  if (downPaymentSlider && downPaymentValue) {
    // Устанавливаем параметры через JS (если не заданы в HTML)
    downPaymentSlider.min = 100000;
    downPaymentSlider.max = 5000000;
    downPaymentSlider.step = 100000;
    downPaymentSlider.value = 100000; // начальное значение

    downPaymentSlider.addEventListener('input', function () {
      const value = parseInt(this.value);
      downPaymentValue.textContent = formatNumber(value) + ' ₽';

      // Обновление прогресс-бара
      const percent = ((value - this.min) / (this.max - this.min)) * 100;
      this.style.setProperty('--progress', `${percent}%`);
    });

    // Инициируем событие, чтобы отобразить начальное значение
    downPaymentSlider.dispatchEvent(new Event('input'));
  }

  // === Настройка слайдера "Срок кредита" ===
  if (termSlider && termValue) {
    termSlider.min = 1;
    termSlider.max = 8;
    termSlider.value = 1; // начальное значение

    termSlider.addEventListener('input', function () {
      const term = parseInt(this.value);
      termValue.textContent = `${term} ${getYearWord(term)}`;

      const percent = ((term - this.min) / (this.max - this.min)) * 100;
      this.style.setProperty('--progress', `${percent}%`);
    });

    termSlider.dispatchEvent(new Event('input'));
  }
});