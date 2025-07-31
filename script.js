document.addEventListener("DOMContentLoaded", function () {
    // =============== Модальное окно "Спасибо за заявку" ===============
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
        });
    }

    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
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

    // =============== Модальное окно "Кредит" ===============
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
                    <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                    <p class="text-gray-600 text-xl mb-8">Мы свяжемся с вами с лучшим предложением по кредиту</p>
                    <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto">
                </div>
            `;
        });
    }

    // =============== Вкладки: Характеристики / Комплектации ===============
    const tabSpecsBtn = document.getElementById("tab-specs");
    const tabComplectationsBtn = document.getElementById("tab-complectations");
    const contentSpecs = document.getElementById("content-specs");
    const contentComplectations = document.getElementById("content-complectations");

    function showTab(tab) {
        if (tabSpecsBtn && tabComplectationsBtn && contentSpecs && contentComplectations) {
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
    }

    if (tabSpecsBtn) {
        tabSpecsBtn.addEventListener("click", () => showTab("specs"));
    }

    if (tabComplectationsBtn) {
        tabComplectationsBtn.addEventListener("click", () => showTab("complectations"));
    }

    // Показать первую вкладку по умолчанию
    if (contentSpecs) showTab("specs");

    // =============== Попап через 150 секунд ===============
    const popupModal = document.getElementById("popupModal");
    const closePopup = document.getElementById("closePopup");
    const POPUP_INTERVAL = 150000; // 150 секунд
    const LAST_POPUP_KEY = "lastPopupTime";

    function showModal() {
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
        if (!lastPopupTimeStr || now - parseInt(lastPopupTimeStr, 10) >= POPUP_INTERVAL) {
            showModal();
        }
    }

    if (popupModal && closePopup) {
        checkAndShowPopup();
        setInterval(checkAndShowPopup, 150000);

        closePopup.addEventListener("click", hideModal);

        window.addEventListener("click", (e) => {
            if (e.target === popupModal) {
                hideModal();
            }
        });
    }

    // =============== Exit-Intent модальное окно ===============
    let exitModalShown = false;

    function createExitModal() {
        if (exitModalShown || document.getElementById("exit-modal-overlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "exit-modal-overlay";
        overlay.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4";

        const modal = document.createElement("div");
        modal.className = "bg-[#4886FF] text-white rounded-[14px] shadow-xl max-w-lg w-full relative overflow-hidden";
        modal.innerHTML = `
            <button id="exit-modal-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
            <div class="p-6 pt-8 text-center">
                <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris</h2>
                <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
                <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
                <h3 class="text-xl font-semibold mb-6">В кредит на специальных условиях!</h3>
                <form id="exit-modal-form" class="space-y-4">
                    <input type="text" name="fullname" placeholder="ФИО"
                        class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
                        required />
                    <input type="tel" name="phone" placeholder="Ваш телефон"
                        class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
                        required />
                    <div class="flex items-start space-x-2">
                        <input type="checkbox" id="agreement" name="agreement" class="mt-1.5 h-4 w-4 focus:ring-blue-500" required />
                        <label for="agreement" class="text-xs leading-tight">
                            Я соглашаюсь с условиями и даю своё согласие на обработку моих персональных данных, и разрешаю сделать запрос в бюро кредитных историй
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

        document.getElementById("exit-modal-close").addEventListener("click", () => {
            overlay.remove();
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        document.getElementById("exit-modal-form").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Спасибо! Мы свяжемся с вами с выгодным предложением.");
            overlay.remove();
        });

        exitModalShown = true;

        // Автоудаление через 100 секунд
        setTimeout(() => {
            if (overlay && document.body.contains(overlay)) {
                overlay.remove();
            }
        }, 100000);
    }

    function handleExitIntent(e) {
        if (exitModalShown) return;
        if (e.clientY <= 10) {
            createExitModal();
            document.removeEventListener("mouseout", handleExitIntent);
        }
    }

    document.addEventListener("mouseout", handleExitIntent);

    // =============== Слайдер первоначального взноса ===============
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

    // =============== Чекбокс Trade-in ===============
    const checkbox = document.getElementById('checkbox');
    const tradeinForm = document.getElementById('tradein-form');

    if (checkbox && tradeinForm) {
        checkbox.addEventListener('change', function () {
            tradeinForm.classList.toggle('hidden', !this.checked);
        });
    }

    // =============== Скролл карточек ===============
    window.scrollCards = function (direction) {
        const container = document.getElementById('cardsContainer');
        const scrollAmount = 232;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // =============== Активация карточек (например, срок кредита) ===============
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

    // =============== Мобильное меню (бургер) ===============
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

    // =============== Обработка класса "has-value" для селектов ===============
    function updateSelectClass(select) {
        if (select.value) {
            select.classList.add('has-value');
        } else {
            select.classList.remove('has-value');
        }
    }

    document.addEventListener('change', function (e) {
        if (e.target.classList.contains('brand')) {
            updateSelectClass(e.target);
        }
    });

    window.addEventListener('load', function () {
        document.querySelectorAll('.brand').forEach(function (select) {
            updateSelectClass(select);
        });
    });
});