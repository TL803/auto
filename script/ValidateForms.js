// function InitInputsAndButton() {
//     const fields = document.querySelectorAll('.important-input-field');
//     const button = document.getElementById('order-call');
//     const form = document.querySelector('form');

//     function validateForm() {
//         let isValid = true;

//         fields.forEach(field => {
//             if (field.type === 'checkbox') {
//                 if (!field.checked) {
//                     isValid = false;
//                 }
//             } else if (field.tagName === 'SELECT') {
//                 const selectedOption = field.options[field.selectedIndex];
//                 // Если селект пуст или выбран disabled option — ошибка
//                 if (!field.value || selectedOption?.disabled) {
//                     isValid = false;
//                 }
//             } else {
//                 if (!field.value || field.value.trim() === '') {
//                     isValid = false;
//                 }
//             }
//         });

//         button.disabled = !isValid;
//         button.style.opacity = isValid ? "1" : "0.6";
//     }


//     fields.forEach(field => {
//         field.addEventListener('input', validateForm);
//         field.addEventListener('change', validateForm);
//     });

//     // Обработка отправки формы
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (!button.disabled) {
//             alert('Спасибо! Ваша заявка отправлена.');
//         }
//     });

//     // Инициализация валидации при загрузке
//     validateForm();
// }

// // Запускаем после загрузки DOM
// document.addEventListener('DOMContentLoaded', InitInputsAndButton);