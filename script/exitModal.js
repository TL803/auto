// document.addEventListener("DOMContentLoaded", function () {
//     function createExitModal() {
//         if (document.getElementById("exit-modal-overlay")) return;

//         const overlay = document.createElement("div");
//         overlay.id = "exit-modal-overlay";
//         overlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4";

//         const modal = document.createElement("div");
//         modal.className = "bg-[#4886FF] text-white rounded-[14px] shadow-xl max-w-lg w-full relative overflow-hidden";
//         modal.innerHTML = `
//             <button id="exit-modal-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
//             <div class="p-6 pt-8 text-center">
//                 <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris</h2>
//                 <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
//                 <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
//                 <form id="exit-modal-form" class="space-y-4">
//                     <input type="text" name="fullname" placeholder="ФИО"
//                         class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
//                         required />
//                     <input type="tel" name="phone" placeholder="Ваш телефон"
//                         class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
//                         required />
//                     <div class="flex items-start space-x-2">
//                         <input type="checkbox" id="agreement" name="agreement" class="mt-1.5 h-4 w-4 focus:ring-blue-500" required />
//                         <label for="agreement" class="text-xs leading-tight">
//                             Я соглашаюсь с условиями и даю своё согласие на обработку моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй
//                         </label>
//                     </div>
//                     <button type="submit"
//                         class="w-full bg-white text-[#4886FF] font-bold py-3 rounded hover:bg-gray-100 transition duration-200">
//                         Получить предложение
//                     </button>
//                 </form>
//             </div>
//         `;
//         overlay.appendChild(modal);
//         document.body.appendChild(overlay);

//         document.getElementById("exit-modal-close").addEventListener("click", () => {
//             overlay.remove();
//         });

//         overlay.addEventListener("click", (e) => {
//             if (e.target === overlay) overlay.remove();
//         });

//         document.getElementById("exit-modal-form").addEventListener("submit", (e) => {
//             e.preventDefault();

//             modal.innerHTML = `
//                 <button id="exit-modal-close-thanks" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
//                 <div class="p-6 pt-8 text-center">
//                     <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris</h2>
//                     <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
//                     <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
//                     <h3 class="text-xl font-semibold mb-6">Мы получили вашу заявку на звонок!</h3>
//                     <p>Мы перезвоним вам в ближайшее время!</p>
//                 </div>
//             `;

//             setTimeout(() => {
//                 if (overlay && document.body.contains(overlay)) {
//                     overlay.remove();
//                 }
//             }, 5000);

//             document.getElementById("exit-modal-close-thanks").addEventListener("click", () => {
//                 overlay.remove();
//             });
//         });
//     }

//     document.querySelector('.modal-trigger').addEventListener('click', function(e) {
//         e.preventDefault();
//         createExitModal();
//     });
// });