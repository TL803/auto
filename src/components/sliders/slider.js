// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector('.thick-blue-slider');
//     const percentValue = document.getElementById('percentValue');
//     const amountValue = document.getElementById('amountValue');
//     const propertyPrice = 5_000_000;

//     function formatNumber(num) {
//         return num.toLocaleString('ru-RU');
//     }

//     if (!slider) {
//         console.warn("Ползунок .thick-blue-slider не найден");
//         return;
//     }

//     slider.min = 0;
//     slider.max = 90;
//     slider.step = 10;

//     function updateSlider() {
//         const value = Number(slider.value);
//         const min = Number(slider.min);
//         const max = Number(slider.max);
//         const percent = ((value - min) / (max - min)) * 100;
//         slider.style.setProperty('--fill-percent', `${percent}%`);
//         percentValue.textContent = `${Math.round(value)}%`;
//         const amount = propertyPrice * (value / 100);
//         amountValue.textContent = formatNumber(Math.round(amount));
//     }

//     slider.addEventListener('input', updateSlider);
//     updateSlider(); // Инициализация начального состояния
// });