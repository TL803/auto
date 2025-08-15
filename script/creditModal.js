// document.addEventListener("DOMContentLoaded", function () {
//     // Создание модального окна
//     const creditModal = document.createElement("div");
//     creditModal.id = "creditModal";
//     creditModal.className = "hidden w-full h-full bg-black/50 fixed z-[10] inset-0 flex items-center justify-center";

//     // Содержимое модального окна
//     const modalContent = document.createElement("div");
//     modalContent.className = "bg-white rounded-[14px] w-[1200px] shadow-lg p-12 h-[600px] flex flex-col justify-center relative";

//     // Кнопка закрытия
//     const closeBtn = document.createElement("button");
//     closeBtn.id = "closeCreditModal";
//     closeBtn.className = "absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none";
//     closeBtn.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//     `;

//     // Заголовок
//     const title = document.createElement("h2");
//     title.className = "text-[#4886FF] text-center font-bold text-4xl mb-10";
//     title.textContent = "Введите ваши данные";

//     // Форма
//     const form = document.createElement("form");
//     form.className = "space-y-4 flex flex-col gap-6";

//     // Поле ФИО
//     const nameInput = document.createElement("input");
//     nameInput.type = "text";
//     nameInput.placeholder = "ФИО";
//     nameInput.className = "w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none";

//     // Поле телефона
//     const phoneInput = document.createElement("input");
//     phoneInput.type = "tel";
//     phoneInput.placeholder = "Ваш телефон";
//     phoneInput.className = "w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none";

//     // Блок с чекбоксом
//     const checkboxWrapper = document.createElement("div");
//     checkboxWrapper.className = "flex flex-col gap-6";

//     const checkboxLabelWrapper = document.createElement("div");
//     checkboxLabelWrapper.className = "flex items-center";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.id = "agreeCredit";
//     checkbox.className = "mr-2";

//     const label = document.createElement("label");
//     label.htmlFor = "agreeCredit";
//     label.className = "text-sm text-gray-600 leading-tight";
//     label.innerHTML = `
//         Я соглашаюсь с условиями и даю свое согласие на обработку моих персональных данных,<br>
//         и разрешаю сделать запрос в бюро кредитных историй
//     `;

//     checkboxLabelWrapper.appendChild(checkbox);
//     checkboxLabelWrapper.appendChild(label);
//     checkboxWrapper.appendChild(checkboxLabelWrapper);

//     // Кнопка отправки
//     const submitBtn = document.createElement("button");
//     submitBtn.id = "finish-model";
//     submitBtn.type = "submit";
//     submitBtn.className = "w-full bg-[#4886FF] text-white px-4 py-3 rounded md:text-xl font-medium";
//     submitBtn.textContent = "Получить предложение";

//     // Сборка формы
//     form.appendChild(nameInput);
//     form.appendChild(phoneInput);
//     checkboxWrapper.appendChild(submitBtn);
//     form.appendChild(checkboxWrapper);

//     // Сборка модального окна
//     modalContent.appendChild(closeBtn);
//     modalContent.appendChild(title);
//     modalContent.appendChild(form);
//     creditModal.appendChild(modalContent);

//     // Добавление модального окна в body
//     document.body.appendChild(creditModal);

//     // === Логика открытия/закрытия и замены формы ===

//     const creditButtons = document.querySelectorAll(".credit-button");
//     const closeCreditModal = document.getElementById("closeCreditModal");
//     const finishModel = document.getElementById("finish-model");

//     // Открытие модального окна
//     if (creditButtons.length > 0) {
//         creditButtons.forEach(button => {
//             button.addEventListener("click", function (e) {
//                 e.preventDefault();
//                 creditModal.classList.remove("hidden");
//                 creditModal.classList.add("show");
//             });
//         });
//     }

//     // Закрытие по крестику
//     closeCreditModal.addEventListener("click", () => {
//         creditModal.classList.add("hidden");
//         creditModal.classList.remove("show");
//     });

//     // Закрытие по клику на фон
//     window.addEventListener("click", (e) => {
//         if (e.target === creditModal) {
//             creditModal.classList.add("hidden");
//             creditModal.classList.remove("show");
//         }
//     });

//     // Обработка отправки формы
//     finishModel.addEventListener("click", (e) => {
//         e.preventDefault();

//         // Замена содержимого на "Спасибо"
//         creditModal.innerHTML = `
//             <div class="bg-white rounded-[14px] shadow-lg w-[1200px] h-auto text-center p-12 flex flex-col justify-center relative">
//                 <button class="close-modal text-gray-600 hover:text-gray-800 text-3xl absolute top-4 right-6 font-bold transition" aria-label="Закрыть">&times;</button>
//                 <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
//                 <p class="text-gray-600 text-xl mb-8">Мы свяжемся с вами с лучшим предложением по кредиту</p>
//                 <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto max-w-full">
//             </div>
//         `;

//         // Новая кнопка закрытия
//         const newCloseBtn = creditModal.querySelector('.close-modal');
//         if (newCloseBtn) {
//             newCloseBtn.addEventListener('click', () => {
//                 creditModal.classList.add("hidden");
//                 creditModal.classList.remove("show");
//             });
//         }
//     });
// });