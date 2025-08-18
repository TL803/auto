// document.addEventListener('DOMContentLoaded', function() {
//   const phoneInput = document.querySelector('input[placeholder="Ваш телефон"]');
  
//   if (!phoneInput) return;

//   // Настройка input
//   phoneInput.type = 'tel';
//   phoneInput.autocomplete = 'tel';
//   phoneInput.inputMode = 'numeric';

//   // Форматирование номера: +7 (999) 999-99-99
//   const formatPhoneNumber = (value) => {
//     const cleaned = value.replace(/\D/g, '');
    
//     if (!cleaned) return '';

//     let formatted = '';
//     if (cleaned.startsWith('8') || cleaned.startsWith('7')) {
//       const match = cleaned.match(/^(\d?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
//       formatted = '+7';
//       if (match[1] && match[1] !== '7' && match[1] !== '8') return '+' + cleaned; // если не 7/8
//       if (match[2]) formatted += ` (${match[2]}`;
//       if (match[3]) formatted += `) ${match[3]}`;
//       if (match[4]) formatted += `-${match[4]}`;
//       if (match[5]) formatted += `-${match[5]}`;
//     } else {
//       formatted = `+${cleaned}`;
//     }
//     return formatted;
//   };

//   // Вспомогательная функция: сколько символов добавлено до позиции
//   const getAddedCharsCount = (str, position) => {
//     const formatChars = str.slice(0, position).replace(/[\d]/g, '').length;
//     return formatChars;
//   };

//   phoneInput.addEventListener('input', function(e) {
//     const start = this.selectionStart;
//     const oldValue = this.value;

//     // Форматируем
//     this.value = formatPhoneNumber(this.value);

//     const newValue = this.value;
//     const oldRawLength = oldValue.replace(/\D/g, '').length;
//     const newRawLength = newValue.replace(/\D/g, '').length;

//     // Если добавили цифру — нужно скорректировать курсор
//     if (newRawLength > oldRawLength) {
//       // Считаем, сколько форматирующих символов появилось ДО новой цифры
//       let expectedCursor = start;
//       // Пересчитываем: где была цифра и где теперь
//       const digitsBefore = oldValue.slice(0, start).replace(/\D/g, '').length;
//       let newCursor = 0;
//       let digitCount = 0;

//       for (let i = 0; i < newValue.length; i++) {
//         if (/\d/.test(newValue[i])) {
//           digitCount++;
//         }
//         if (digitCount <= digitsBefore) {
//           newCursor = i + 1;
//         } else {
//           break;
//         }
//       }
//       this.setSelectionRange(newCursor, newCursor);
//     } else {
//       // При удалении или редактировании — просто сохраняем позицию
//       this.setSelectionRange(start, start);
//     }
//   });

//   // Вставка (paste)
//   phoneInput.addEventListener('paste', function(e) {
//     e.preventDefault();
//     const pastedText = (e.clipboardData || window.clipboardData).getData('text');
//     const cleaned = pastedText.replace(/\D/g, '');
//     const currentValue = this.value.replace(/\D/g, '');
//     const newDigits = currentValue + cleaned;
//     this.value = formatPhoneNumber(newDigits);
//     this.setSelectionRange(this.value.length, this.value.length);
//   });

//   // Ограничение ввода
//   phoneInput.addEventListener('keydown', function(e) {
//     const allowed = [
//       'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
//       'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'
//     ];

//     if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
//       return; // разрешаем Ctrl+A, Ctrl+C и т.д.
//     }

//     if (e.key === 'Backspace') return;

//     if (/\d/.test(e.key)) {
//       const digits = this.value.replace(/\D/g, '');
//       if (digits.length >= 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
//         e.preventDefault();
//       }
//       return;
//     }

//     if (!allowed.includes(e.key)) {
//       e.preventDefault();
//     }
//   });

//   // Валидация при blur
//   phoneInput.addEventListener('blur', function() {
//     const digits = this.value.replace(/\D/g, '');
//     if (digits.length < 11) {
//       this.setCustomValidity('Введите корректный номер телефона');
//     } else {
//       this.setCustomValidity('');
//     }
//   });
// });