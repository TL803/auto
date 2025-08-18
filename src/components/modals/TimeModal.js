document.addEventListener("DOMContentLoaded", function () {
    const popupModal = document.getElementById("popupModal");
    const closePopup = document.getElementById("closePopup");
    const POPUP_INTERVAL = 100;
    const LAST_POPUP_KEY = "lastPopupTime";
    const SUBMIT_FLAG = "popupSubmitted";

    function showModal() {
        if (localStorage.getItem(SUBMIT_FLAG)) return;
        if (popupModal) {
            popupModal.classList.add("show");
            localStorage.setItem(LAST_POPUP_KEY, Date.now().toString());
        }
    }

    function hideModal() {
        if (popupModal) {
            popupModal.classList.remove("show");
        }
    }

    function checkAndShowPopup() {
        const now = Date.now();
        const lastPopupTimeStr = localStorage.getItem(LAST_POPUP_KEY);
        const alreadySubmitted = localStorage.getItem(SUBMIT_FLAG);
        if (alreadySubmitted) return;
        if (!lastPopupTimeStr || now - parseInt(lastPopupTimeStr, 10) >= POPUP_INTERVAL) {
            showModal();
        }
    }

    if (popupModal && closePopup) {
        checkAndShowPopup();
        setInterval(checkAndShowPopup, 10000);
        closePopup.addEventListener("click", hideModal);
        popupModal.addEventListener("click", (e) => {
            if (e.target === popupModal) hideModal();
        });
    }

    if (popupModal) {
        const form = popupModal.querySelector("form");
        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const agreeCheckbox = form.querySelector("#agreePopup");
                if (!agreeCheckbox || !agreeCheckbox.checked) {
                    alert("Пожалуйста, подтвердите согласие на обработку данных.");
                    return;
                }
                localStorage.setItem(SUBMIT_FLAG, "true");
                popupModal.innerHTML = `
                    <div class="fixed inset-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
                        <div class="bg-[#4886FF] text-white text-center rounded-[14px] shadow-lg p-12 max-w-md relative">
                            <button id="closeSuccessPopup" class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 class="text-xl font-bold mb-4">Уникальное предложение на покупку нового авто!</h2>
                            <p class="text-sm mb-4">Акция действует до 3 июля</p>
                            <img src="./assets/Frame 193.png" alt="Три автомобиля" class="w-full h-auto object-cover mb-4">
                            <h3 class="text-2xl font-bold mb-4">Мы получили вашу заявку на звонок!</h3>
                            <p class="text-white text-lg">Мы перезвоним вам в ближайшее время!</p>
                        </div>
                    </div>
                `;
                const closeSuccessBtn = popupModal.querySelector("#closeSuccessPopup");
                if (closeSuccessBtn) {
                    closeSuccessBtn.addEventListener("click", hideModal);
                }
                popupModal.addEventListener("click", (e) => {
                    if (e.target === popupModal) hideModal();
                });
            });
        }
    }
});