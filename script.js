// Универсальная утилита: безопасно выполняет действие, если элемент найден
function on(selector, callback) {
    const el = document.querySelector(selector);
    if (el) callback(el);
}

// === Основной DOMContentLoaded ===
document.addEventListener("DOMContentLoaded", function () {
    // =============== 1. Основная модалка (formSend) ===============
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const formSend = document.getElementById('form-send');

    if (formSend && modal) {
        formSend.addEventListener('click', (e) => {
            e.preventDefault();
            modal.innerHTML = `
                <div class="bg-white rounded-[14px] shadow-lg w-[1200px] h-auto text-center p-12 flex flex-col justify-center relative">
                    <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                    <p class="text-gray-600 text-xl mb-8">Мы перезвоним вам в ближайшее время</p>
                    <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto">
                </div>
            `;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }

    if (openModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }

    // =============== 2. Модалка кредита ===============
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

        if (closeCreditModal) {
            closeCreditModal.addEventListener("click", () => {
                creditModal.classList.remove("show");
            });
        }

        window.addEventListener("click", (e) => {
            if (e.target === creditModal) {
                creditModal.classList.remove("show");
            }
        });

        if (finishModel) {
            finishModel.addEventListener("click", (e) => {
                e.preventDefault();
                creditModal.innerHTML = `
                    <div class="bg-white rounded-[14px] shadow-lg w-[1200px] h-auto text-center p-12 flex flex-col justify-center relative">
                        <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                        <p class="text-gray-600 text-xl mb-8">Мы свяжемся с вами с лучшим предложением по кредиту</p>
                        <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto">
                    </div>
                `;
            });
        }
    }

    // =============== 3. Вкладки (specs / complectations) ===============
    const tabSpecsBtn = document.getElementById("tab-specs");
    const tabComplectationsBtn = document.getElementById("tab-complectations");
    const contentSpecs = document.getElementById("content-specs");
    const contentComplectations = document.getElementById("content-complectations");

    if (tabSpecsBtn && tabComplectationsBtn && contentSpecs && contentComplectations) {
        function showTab(tab) {
            tabSpecsBtn.classList.remove("bg-blue-100", "text-[#4886FF]");
            tabSpecsBtn.classList.add("bg-white", "text-gray-600");
            tabComplectationsBtn.classList.remove("bg-blue-100", "text-[#4886FF]");
            tabComplectationsBtn.classList.add("bg-white", "text-gray-600");
            contentSpecs.classList.add("hidden");
            contentComplectations.classList.add("hidden");

            if (tab === "specs") {
                contentSpecs.classList.remove("hidden");
                tabSpecsBtn.classList.remove("bg-white", "text-gray-600");
                tabSpecsBtn.classList.add("bg-blue-100", "text-[#4886FF]");
            } else if (tab === "complectations") {
                contentComplectations.classList.remove("hidden");
                tabComplectationsBtn.classList.remove("bg-white", "text-gray-600");
                tabComplectationsBtn.classList.add("bg-blue-100", "text-[#4886FF]");
            }
        }

        tabSpecsBtn.addEventListener("click", () => showTab("specs"));
        tabComplectationsBtn.addEventListener("click", () => showTab("complectations"));
        showTab("specs");
    }

    // =============== 4. Popup Modal (каждые 10 секунд) ===============
    const popupModal = document.getElementById("popupModal");
    const closePopup = document.getElementById("closePopup");
    const POPUP_INTERVAL = 10000; // 10 секунд
    const LAST_POPUP_KEY = "lastPopupTime";

    if (popupModal) {
        function showModal() {
            popupModal.classList.add("show");
            localStorage.setItem(LAST_POPUP_KEY, Date.now().toString());
        }

        function hideModal() {
            popupModal.classList.remove("show");
        }

        function checkAndShowPopup() {
            const now = Date.now();
            const lastPopupTimeStr = localStorage.getItem(LAST_POPUP_KEY);
            if (!lastPopupTimeStr || now - parseInt(lastPopupTimeStr, 10) >= POPUP_INTERVAL) {
                showModal();
            }
        }

        // Показываем, если прошло 10 секунд с последнего показа
        checkAndShowPopup();

        // Проверяем каждые 10 секунд
        setInterval(checkAndShowPopup, 10000);

        if (closePopup) {
            closePopup.addEventListener("click", hideModal);
        }

        window.addEventListener("click", (e) => {
            if (e.target === popupModal) {
                hideModal();
            }
        });
    }

    // =============== 5. Слайдер и ипотека ===============
    const slider = document.getElementById('slider');
    const progress = document.getElementById('progress');
    const percentValue = document.getElementById('percentValue');
    const amountValue = document.getElementById('amountValue');
    const propertyPrice = 5_000_000;

    function formatNumber(num) {
        return num.toLocaleString('ru-RU');
    }

    if (slider && progress && percentValue && amountValue) {
        slider.addEventListener('input', function () {
            const percent = this.value;
            const amount = propertyPrice * (percent / 100);
            progress.style.width = percent + '%';
            percentValue.textContent = percent + '%';
            amountValue.textContent = formatNumber(Math.round(amount));
        });
    }

    const checkbox = document.getElementById('checkbox');
    const tradeinForm = document.getElementById('tradein-form');
    if (checkbox && tradeinForm) {
        checkbox.addEventListener('change', function () {
            tradeinForm.classList.toggle('hidden', !this.checked);
        });
    }

    // =============== 6. Карточки (6/12/24/36 месяцев) ===============
    window.scrollCards = function (direction) {
        const container = document.getElementById('cardsContainer');
        const scrollAmount = 232;
        if (container) {
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const cards = document.querySelectorAll('.card');
    function resetCards() {
        cards.forEach(card => {
            card.classList.remove('bg-[#4886FF]', 'text-white');
            card.classList.add('bg-white', 'text-gray-500');
            const spans = card.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.remove('text-white');
                span.classList.add('text-gray-500');
            });
            const divider = card.querySelector('[data-divider]');
            if (divider) {
                divider.classList.remove('bg-blue-200');
                divider.classList.add('bg-[#D9D9D9]');
            }
        });
    }

    const defaultActive = document.querySelector('[data-year="6"]');
    if (defaultActive) {
        defaultActive.classList.remove('bg-white', 'text-gray-500');
        defaultActive.classList.add('bg-[#4886FF]', 'text-white');
        const spans = defaultActive.querySelectorAll('span');
        spans.forEach(span => span.classList.add('text-white'));
        const divider = defaultActive.querySelector('[data-divider]');
        if (divider) divider.classList.add('bg-blue-200');
    }

    cards.forEach(card => {
        card.addEventListener('click', function () {
            resetCards();
            this.classList.remove('bg-white', 'text-gray-500');
            this.classList.add('bg-[#4886FF]', 'text-white');
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.add('text-white'));
            const divider = this.querySelector('[data-divider]');
            if (divider) divider.classList.add('bg-blue-200');
        });
    });

    // =============== 7. Мобильное меню ===============
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    if (burgerButton && mobileMenu) {
        burgerButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMobileMenu && mobileMenu) {
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && e.target !== burgerButton) {
            mobileMenu.classList.remove('active');
        }
    });
});

// =============== 8. EXIT MODAL: Через 10 секунд ПОСЛЕ ухода с /products ===============
document.addEventListener("DOMContentLoaded", function () {
    const EXIT_INTENT_KEY = "exitIntentTime";
    const MODAL_SHOWN_KEY = "exitModalShown";
    const EXIT_DELAY = 10000; // 10 секунд

    // === Этап 1: На странице /products — фиксируем момент ухода мыши вверх ===
    if (window.location.pathname.includes('products')) {
        let exitIntentRecorded = false;

        function handleExitIntent(e) {
            if (exitIntentRecorded || e.clientY > 10) return;

            sessionStorage.setItem(EXIT_INTENT_KEY, Date.now().toString());
            exitIntentRecorded = true;

            // Удаляем обработчик после первого срабатывания
            document.removeEventListener("mouseout", handleExitIntent);
        }

        document.addEventListener("mouseout", handleExitIntent);
    }

    // === Этап 2: На ЛЮБОЙ другой странице — проверяем, прошло ли 10 секунд с момента ухода ===
    if (!window.location.pathname.includes('products')) {
        const exitIntentTimeStr = sessionStorage.getItem(EXIT_INTENT_KEY);
        const modalShown = sessionStorage.getItem(MODAL_SHOWN_KEY);

        if (modalShown || !exitIntentTimeStr) return;

        const exitIntentTime = parseInt(exitIntentTimeStr, 10);
        const now = Date.now();
        const elapsed = now - exitIntentTime;

        if (elapsed >= EXIT_DELAY) {
            createExitModal();
            sessionStorage.setItem(MODAL_SHOWN_KEY, 'true');
            sessionStorage.removeItem(EXIT_INTENT_KEY);
        }
    }

    // === Функция создания модалки (ваш HTML) ===
    function createExitModal() {
        if (document.getElementById("exit-modal-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "exit-modal-overlay";
        overlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4";

        const modal = document.createElement("div");
        modal.className = "bg-[#4886FF] text-white rounded-[14px] shadow-xl max-w-lg w-full relative overflow-hidden";
        modal.innerHTML = `
            <button id="exit-modal-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
            <div class="p-6 pt-8">
                <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris</h2>
                <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
                <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
                <h3 class="text-xl font-semibold mb-6">В кредит на специальных условиях!</h3>
                <form id="exit-modal-form" class="space-y-4">
                    <input type="text" name="fullname" placeholder="ФИО"
                        class="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required />
                    <input type="tel" name="phone" placeholder="Ваш телефон"
                        class="w-full px-4 py-3 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        required />
                    <div class="flex items-start space-x-2">
                        <input type="checkbox" id="agreement" name="agreement" class="mt-1.5 h-4 w-4 text-[#4886FF] focus:ring-blue-500" required />
                        <label for="agreement" class="text-xs leading-tight">
                            Я соглашаюсь с условиями и даю свое согласие на обработку использования моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй
                        </label>
                    </div>
                    <button type="submit"
                        class="w-full bg-white text-[#4886FF] font-bold py-3 rounded hover:bg-gray-100 transition duration-200">
                        Получить предложение
                    </button>
                </form>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Закрытие крестиком
        document.getElementById("exit-modal-close").addEventListener("click", () => {
            overlay.remove();
        });

        // Закрытие кликом по фону
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        // Обработка формы
        document.getElementById("exit-modal-form").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Спасибо! Мы свяжемся с вами с выгодным предложением.");
            overlay.remove();
        });
    }
});

// =============== 9. Обработчики для select (has-value) ===============
document.addEventListener('change', function (e) {
    if (e.target.classList.contains('brand')) {
        e.target.classList.toggle('has-value', !!e.target.value);
    }
});

window.addEventListener('load', function () {
    document.querySelectorAll('.brand').forEach(function (select) {
        select.classList.toggle('has-value', !!select.value);
    });
});