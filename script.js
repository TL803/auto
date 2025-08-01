document.addEventListener("DOMContentLoaded", function () {
const modal = document.querySelector('.modal-overlay');
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const closeModalBtn = modal?.querySelector('.close-modal');
const formSend = modal?.querySelector('.form-send');

let modalTimer = null;

const hasFormBeenSubmitted = localStorage.getItem('formSubmitted') === 'true';

// Функция для открытия модалки
function openModal() {
    if (modal && !hasFormBeenSubmitted) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function startModalTimer() {
    if (hasFormBeenSubmitted) return;
    clearTimeout(modalTimer);
    modalTimer = setTimeout(() => {
        if (modal && modal.classList.contains('hidden')) {
            openModal();
        }
    }, 30000);
}

openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!hasFormBeenSubmitted) {
            openModal();
            clearTimeout(modalTimer);
        }
    });
});

// Закрытие по кнопке "X"
if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        closeModal();
        if (!hasFormBeenSubmitted) {
            startModalTimer();
        }
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            if (!hasFormBeenSubmitted) {
                startModalTimer();
            }
        }
    });
}

if (formSend && modal) {
    formSend.addEventListener('click', (e) => {
        e.preventDefault();

        const fullName = modal.querySelector('input[placeholder="ФИО"]')?.value.trim();
        const phone = modal.querySelector('input[placeholder="Ваш телефон"]')?.value.trim();
        const agree = modal.querySelector('#agree')?.checked;

        if (!fullName) {
            alert('Пожалуйста, введите ваше ФИО.');
            return;
        }
        if (!phone) {
            alert('Пожалуйста, введите ваш телефон.');
            return;
        }
        if (!agree) {
            alert('Пожалуйста, подтвердите согласие на обработку данных.');
            return;
        }

        modal.innerHTML = `
            <div class="bg-white rounded-[14px] shadow-lg w-[1200px] h-auto text-center p-12 flex flex-col justify-center relative">
                <button class="close-modal text-gray-600 hover:text-gray-800 text-3xl absolute top-4 right-6 font-bold transition" aria-label="Закрыть">&times;</button>
                <h2 class="text-[#4886FF] font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                <p class="text-gray-600 text-xl mb-8">Мы перезвоним вам в ближайшее время</p>
                <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto max-w-full">
            </div>
        `;

        localStorage.setItem('formSubmitted', 'true');

        const newCloseBtn = modal.querySelector('.close-modal');
        if (newCloseBtn) {
            newCloseBtn.addEventListener('click', () => {
                closeModal();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (!hasFormBeenSubmitted) {
        startModalTimer();
    }
});

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

    if (contentSpecs) showTab("specs");

const popupModal = document.getElementById("popupModal");
const closePopup = document.getElementById("closePopup");
const POPUP_INTERVAL = 100;
const LAST_POPUP_KEY = "lastPopupTime";
const SUBMIT_FLAG = "popupSubmitted";

function showModal() {
    if (localStorage.getItem(SUBMIT_FLAG)) {
        return; 
    }

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
        if (e.target === popupModal) {
            hideModal();
        }
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
                if (e.target === popupModal) {
                    hideModal();
                }
            });
        });
    }
}


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
            modal.innerHTML = `
        <button id="exit-modal-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
        <div class="p-6 pt-8 text-center">
            <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris</h2>
            <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
            <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
                <h3 class="text-xl font-semibold mb-6">Мы  получили вашу заявку на звонок!</h3>
                <p class="">Мы перезвоним вам в ближайшее время! </p>
        </div>
    `;
        overlay.remove();
    });

    exitModalShown = true;

    setTimeout(() => {
        if (overlay && document.body.contains(overlay)) {
            overlay.remove();
        }
    }, 100000);
}

document.addEventListener("DOMContentLoaded", function () {
    const cameFromProducts = sessionStorage.getItem("cameFromProducts");
    const exitTimeStr = sessionStorage.getItem("fromProductsExit");

    if (cameFromProducts === "true" && exitTimeStr) {
        const exitTime = parseInt(exitTimeStr, 10);
        const timeSinceExit = Date.now() - exitTime;

        if (timeSinceExit < 10000) {
            const delay = 10000 - timeSinceExit;

            setTimeout(() => {
                createExitModal();
                sessionStorage.removeItem("cameFromProducts");
                sessionStorage.removeItem("fromProductsExit");
            }, delay);
        }
    }
});

    function handleExitIntent(e) {
        if (exitModalShown) return;
        if (e.clientY <= 10) {
            createExitModal();
            document.removeEventListener("mouseout", handleExitIntent);
        }
    }

    document.addEventListener("mouseout", handleExitIntent);

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

    window.scrollCards = function (direction) {
        const container = document.getElementById('cardsContainer');
        const scrollAmount = 232;
        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    function openMenu() {
        if (mobileMenu) {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (burgerButton) {
        burgerButton.addEventListener('click', openMenu);
    }
    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMenu);
    }

    document.addEventListener('click', (event) => {
        if (mobileMenu && mobileMenu.classList.contains('active') &&
            !event.target.closest('#mobileMenu') &&
            !event.target.closest('#burgerButton')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

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

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.thick-blue-slider');
    const percentValue = document.getElementById('percentValue');
    const amountValue = document.getElementById('amountValue');
    const propertyPrice = 5_000_000;

    function formatNumber(num) {
        return num.toLocaleString('ru-RU');
    }

    if (!slider) {
        console.warn("Ползунок .thick-blue-slider не найден");
        return;
    }

    function updateSlider() {
        const value = slider.value;
        const min = slider.min || 0;
        const max = slider.max || 100;
        const percent = ((value - min) / (max - min)) * 100;
        slider.style.setProperty('--fill-percent', `${percent}%`);
        percentValue.textContent = `${Math.round(percent)}%`;
        const amount = propertyPrice * (percent / 100);
        amountValue.textContent = formatNumber(Math.round(amount));
    }

    slider.addEventListener('input', updateSlider);
    updateSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById('mobilePaymentSlider');
    const termValue = document.getElementById('termValue');
    const paymentValue = document.getElementById('paymentValue');
    const cards = document.querySelectorAll('.card');
    const container = document.getElementById('cardsContainer');

    const terms = [
        { term: "7 лет", payment: "50 000" },
        { term: "6 лет", payment: "60 000" },
        { term: "5 лет", payment: "70 000" },
        { term: "4 года", payment: "80 000" },
        { term: "3 года", payment: "90 000" }
    ];

    function resetCards() {
        cards.forEach(card => {
            card.classList.remove('bg-[#4886FF]', 'text-white');
            card.classList.add('bg-white', 'text-gray-500');
            const spans = card.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.remove('text-white');
                span.classList.add('text-gray-500');
            });
            const divider = card.querySelector('.h-0\\.5');
            if (divider) {
                divider.classList.remove('bg-blue-200');
                divider.classList.add('bg-[#D9D9D9]');
            }
        });
    }

    function activateCard(index) {
        const data = terms[index];
        termValue.textContent = data.term;
        paymentValue.textContent = data.payment + " ₽";
        resetCards();
        const activeCard = cards[index];
        activeCard.classList.add('bg-[#4886FF]', 'text-white');
        activeCard.classList.remove('bg-white', 'text-gray-500');
        const spans = activeCard.querySelectorAll('span');
        spans.forEach(span => {
            span.classList.add('text-white');
            span.classList.remove('text-gray-500');
        });
        const divider = activeCard.querySelector('.h-0\\.5');
        if (divider) {
            divider.classList.add('bg-blue-200');
            divider.classList.remove('bg-[#D9D9D9]');
        }
        if (container) {
            container.scrollTo({
                left: activeCard.offsetLeft - (container.offsetWidth - activeCard.offsetWidth) / 2,
                behavior: 'smooth'
            });
        }
        const percent = (index / (cards.length - 1)) * 100;
        slider.style.setProperty('--fill-percent', `${percent}%`);
    }

    if (slider) {
        slider.addEventListener('input', function () {
            const index = parseInt(this.value);
            activateCard(index);
        });
        const initialValue = parseInt(slider.value);
        activateCard(initialValue);
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', function () {
            if (slider) slider.value = index;
            activateCard(index);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carBrands = [
        "BAIC", "Lada", "Belgee", "Changan", "Chery", "Dongfeng", "EXEED", "Faw", "Forthing", "Gac",
        "Geely", "Haval", "Hyundai", "Jaecoo", "Jac", "Jetour", "Jetta", "KAIYI", "Livan", "Moskvich",
        "MG", "Nissan", "Omoda", "Renault", "Skoda", "Soueast", "SWM", "Tank", "UAZ", "Volkswagen", "XCite"
    ];
    const container = document.getElementById('brands-container');
    if (!container) {
        console.error('Элемент с id="brands-container" не найден');
        return;
    }
    container.innerHTML = '';
    carBrands.forEach(brand => {
        const brandElement = document.createElement('div');
        brandElement.className = 'flex flex-row items-center gap-[10px] rounded-[12px] bg-[#F8F8F8] px-4 py-2 shrink-0 cursor-pointer border border-transparent transition-all duration-200';
        brandElement.setAttribute('onclick', "this.classList.toggle('bg-[#4886FF]'); this.classList.toggle('bg-[#4886FF]/20'); this.classList.toggle('border-[#4886FF]');");
        brandElement.innerHTML = `
            <div class="w-[24px] h-[24px] rounded-full bg-[#D9D9D9]"></div>
            <p class="text-gray-800 font-medium">${brand}</p>
        `;
        container.appendChild(brandElement);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carDataArray = [
        { model: "Jaecoo J7 Lifestyle 150", type: "Внедорожник 5 дв.", oldPrice: "20 959 900 ₽", discount: "-51%", price: "19 300 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro Plug-in Hybrid", type: "Седан", oldPrice: "1 959 900 ₽", discount: "-51%", price: "960 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Lada Granta Sportline Лифтбек", type: "Внедорожник 5 дв.", oldPrice: "2 850 000 ₽", discount: "-45%", price: "1 567 500 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro", type: "Внедорожник 7 мест", oldPrice: "2 690 000 ₽", discount: "-40%", price: "1 614 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Haval F7", type: "Внедорожник 5 дв.", oldPrice: "2 450 000 ₽", discount: "-38%", price: "1 519 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "EXEED TXL", type: "Внедорожник 7 мест", oldPrice: "3 100 000 ₽", discount: "-42%", price: "1 800 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" }
    ];

    const containers = document.querySelectorAll('.js-cards-container');
    containers.forEach(container => {
        container.innerHTML = '';
        carDataArray.forEach(car => {
            const cardLink = document.createElement("a");
            cardLink.href = car.link;
            cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
            cardLink.style.borderRadius = "0.5rem";
            cardLink.innerHTML = `
                <div class="bg-white w-[162px] h-[368px] md:h-[642px] p-[12px] md:p-6 md:p-8 rounded-[18px] md:min-w-[480px] flex flex-col gap-[8px] md:gap-[16px] box-border">
                    <img src="${car.image}" alt="Car Image" class="md:w-full w-[138px] h-[108px] md:h-60 object-cover rounded-md mb-4">
                    <div>
                        <p class="text-[16px] md:text-[28px] font-medium text-gray-800">${car.model}</p>
                        <span class="text-gray-500 font-medium block mb-2 text-[12px] md:text-[16px]">${car.type}</span>
                    </div>
                    <div class="flex items-center mb-[0px] md:mb-[-15px] gap-[24px]">
                        <p class="line-through font-medium text-[10px] md:text-[16px]">${car.oldPrice}</p>
                        <div class="bg-[#DAE7FF] text-[#4886FF] text-[10px] md:text-sm font-bold px-[11px] py-[4px] md:px-3 md:py-1.5 rounded-full md:rounded">
                            ${car.discount}
                        </div>
                    </div>
                    <p class="text-[20px] md:text-3xl font-medium md:font-bold text-gray-900 mb-4">${car.price}</p>
                    <button class="w-full bg-[#4886FF] text-[14px] md:text-2xl text-white py-[9px] font-semibold py-4 md:py-5 rounded-[14px] transition">
                        Подобрать
                    </button>
                </div>
            `;
            container.appendChild(cardLink);
        });
    });
});

const sliderElement = document.getElementById('price-slider');
if (sliderElement) {
    noUiSlider.create(sliderElement, {
        start: [500000, 2500000],
        connect: true,
        range: {
            min: 500000,
            max: 2500000
        },
        format: {
            to: function (value) {
                return Math.round(value);
            },
            from: function (value) {
                return Number(value);
            }
        }
    });

    const minPriceValue = document.getElementById('minPriceValue');
    const maxPriceValue = document.getElementById('maxPriceValue');
    sliderElement.noUiSlider.on('update', function (values, handle) {
        const value = Math.round(values[handle]);
        const formattedValue = value.toLocaleString('ru-RU') + ' ₽';
        if (handle === 0) {
            minPriceValue.textContent = `От ${formattedValue}`;
        } else {
            maxPriceValue.textContent = `До ${formattedValue}`;
        }
    });

    const hiddenMinInput = document.querySelector('input[name="price_from"]');
    const hiddenMaxInput = document.querySelector('input[name="price_to"]');
    sliderElement.noUiSlider.on('change', function (values, handle) {
        const value = Math.round(values[handle]);
        if (handle === 0 && hiddenMinInput) hiddenMinInput.value = value;
        if (handle === 1 && hiddenMaxInput) hiddenMaxInput.value = value;
    });
}