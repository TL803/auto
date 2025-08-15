// const brandSelect = document.querySelector('select[name="brand"]');
// const modelSelect = document.querySelectorAll('.custom-select.brand')[1];
// const trimSelect = document.querySelectorAll('.custom-select.brand')[2];
// const carSection = document.getElementById('carSection');

// modelSelect.disabled = true;
// trimSelect.disabled = true;

// function checkFormFilled() {
//     if (brandSelect.value) {
//         modelSelect.disabled = false;
//     } else {
//         modelSelect.disabled = true;
//         trimSelect.disabled = true;
//         modelSelect.value = "";
//         trimSelect.value = "";
//     }

//     if (modelSelect.value) {
//         trimSelect.disabled = false;
//     } else {
//         trimSelect.disabled = true;
//         trimSelect.value = "";
//     }

//     if (brandSelect.value && modelSelect.value && trimSelect.value) {
//         carSection.classList.remove('hidden');
//         carSection.classList.add('animate-fade-in');
//     } else {
//         carSection.classList.add('hidden');
//         carSection.classList.remove('animate-fade-in');
//     }
// }

// brandSelect.addEventListener('change', checkFormFilled);
// modelSelect.addEventListener('change', checkFormFilled);
// trimSelect.addEventListener('change', checkFormFilled);

// const style = document.createElement('style');
// style.textContent = `
//     .animate-fade-in {
//         animation: fadeIn 0.6s ease-in;
//     }
//     @keyframes fadeIn {
//         from { opacity: 0; transform: translateY(10px); }
//         to   { opacity: 1; transform: translateY(0); }
//     }
//     select:disabled {
//         opacity: 0.6;
//         cursor: not-allowed;
//     }
// `;
// document.head.appendChild(style);