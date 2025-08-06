document.addEventListener("DOMContentLoaded", function () {
    const creditButtons = document.querySelectorAll(".credit-button");
    const creditModal = document.getElementById("creditModal");
    const closeCreditModal = document.getElementById("closeCreditModal");
    const finishModel = document.getElementById('finish-model');

    if (creditButtons.length > 0 && creditModal) {
        creditButtons.forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                creditModal.classList.add("show");
            });
        });
    }

    if (closeCreditModal && creditModal) {
        closeCreditModal.addEventListener("click", () => {
            creditModal.classList.remove("show");
        });
    }

    if (creditModal) {
        window.addEventListener("click", (e) => {
            if (e.target === creditModal) {
                creditModal.classList.remove("show");
            }
        });
    }

    if (finishModel && creditModal) {
        finishModel.addEventListener("click", (e) => {
            e.preventDefault();
            creditModal.innerHTML = `
                <div class="bg-white rounded-[14px] shadow-lg w-[1200px] h-auto text-center p-12 flex flex-col justify-center relative">
                    <button class="close-modal text-gray-600 hover:text-gray-800 text-3xl absolute top-4 right-6 font-bold transition" aria-label="Закрыть">&times;</button>
                    <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                    <p class="text-gray-600 text-xl mb-8">Мы свяжемся с вами с лучшим предложением по кредиту</p>
                    <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto max-w-full">
                </div>
            `;
            const newCloseBtn = creditModal.querySelector('.close-modal');
            if (newCloseBtn) {
                newCloseBtn.addEventListener('click', () => {
                    creditModal.classList.remove("show");
                });
            }
        });
    }
});