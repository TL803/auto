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

    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.thick-blue-slider');
        const percentValue = document.getElementById('percentValue');
        const amountValue = document.getElementById('amountValue');

        // Общая стоимость автомобиля
        const propertyPrice = 5_000_000;

        // Форматирование чисел
        function formatNumber(num) {
            return num.toLocaleString('ru-RU');
        }

        // Проверяем, существует ли ползунок
        if (!slider) {
            console.warn("Ползунок .thick-blue-slider не найден");
            return;
        }

        // Обновление значений при движении
        function updateSlider() {
            const value = slider.value;
            const min = slider.min || 0;
            const max = slider.max || 100;

            // Процент от диапазона
            const percent = ((value - min) / (max - min)) * 100;

            // Устанавливаем CSS-переменную
            slider.style.setProperty('--fill-percent', `${percent}%`);

            // Обновляем отображение
            percentValue.textContent = `${Math.round(percent)}%`;
            const amount = propertyPrice * (percent / 100);
            amountValue.textContent = formatNumber(Math.round(amount));
        }

        // Добавляем обработчик
        slider.addEventListener('input', updateSlider);

        // Инициализация при загрузке
        updateSlider();
    });








    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.thick-blue-slider');
        const termValue = document.getElementById('termValue');
        const paymentValue = document.getElementById('paymentValue');
        const cards = document.querySelectorAll('.card');
        const container = document.getElementById('cardsContainer');

        // Массив данных для сопоставления
        const terms = [
            { term: "7 лет", payment: "50 000", id: 0 },
            { term: "6 лет", payment: "60 000", id: 1 },
            { term: "5 лет", payment: "70 000", id: 2 },
            { term: "4 года", payment: "80 000", id: 3 },
            { term: "3 года", payment: "90 000", id: 4 }
        ];

        // Функция обновления ползунка
        function updateSliderFromCard(activeCard) {
            const index = Array.from(cards).indexOf(activeCard);
            if (slider) {
                slider.value = index;
                const percent = (index / (cards.length - 1)) * 100;
                slider.style.setProperty('--fill-percent', `${percent}%`);
            }
        }

        // Функция обновления карточек
        function updateCards(index) {
            const data = terms[index];
            termValue.textContent = data.term;
            paymentValue.textContent = data.payment + " ₽";

            cards.forEach((card, i) => {
                const isActive = i === index;
                card.classList.toggle('bg-[#4886FF]', isActive);
                card.classList.toggle('text-white', isActive);
                card.classList.toggle('bg-white', !isActive);
                card.classList.toggle('text-gray-500', !isActive);

                const spans = card.querySelectorAll('span');
                spans.forEach(span => {
                    span.classList.toggle('text-white', isActive);
                    span.classList.toggle('text-gray-500', !isActive);
                });

                const divider = card.querySelector('.h-0.5');
                if (divider) {
                    divider.classList.toggle('bg-blue-200', isActive);
                    divider.classList.toggle('bg-[#D9D9D9]', !isActive);
                }
            });

            // Прокрутка к активной карточке
            const activeCard = cards[index];
            if (activeCard && container) {
                container.scrollTo({
                    left: activeCard.offsetLeft - (container.offsetWidth - activeCard.offsetWidth) / 2,
                    behavior: 'smooth'
                });
            }
        }

        // Обработчик ползунка
        if (slider) {
            slider.addEventListener('input', function () {
                const index = parseInt(this.value);
                updateCards(index);
            });

            // Инициализация
            updateCards(parseInt(slider.value));
        }

        // Обработчик клика по карточкам
        cards.forEach((card, index) => {
            card.addEventListener('click', function () {
                updateCards(index);
                if (slider) slider.value = index;
                updateSliderFromCard(this);
            });
        });

        // Скролл карточек
        window.scrollCards = function (direction) {
            const scrollAmount = 232;
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        };

        // Логика Trade-in
        const checkbox = document.getElementById('checkbox');
        const tradeinForm = document.getElementById('tradein-form');

        if (checkbox && tradeinForm) {
            checkbox.addEventListener('change', function () {
                tradeinForm.classList.toggle('hidden', !this.checked);
            });
        }

        // Обновление CSS-переменной для ползунка
        if (slider) {
            const initialValue = slider.value;
            const percent = (initialValue / (slider.max - slider.min)) * 100;
            slider.style.setProperty('--fill-percent', `${percent}%`);
        }
    });


document.addEventListener("DOMContentLoaded", function () {
    const carBrands = [
        "BAIC",
        "Lada",
        "Belgee",
        "Changan",
        "Chery",
        "Dongfeng",
        "EXEED",
        "Faw",
        "Forthing",
        "Gac",
        "Geely",
        "Haval",
        "Hyundai",
        "Jaecoo",
        "Jac",
        "Jetour",
        "Jetta",
        "KAIYI",
        "Livan",
        "Moskvich",
        "MG",
        "Nissan",
        "Omoda",
        "Renault",
        "Skoda",
        "Soueast",
        "SWM",
        "Tank",
        "UAZ",
        "Volkswagen",
        "XCite"
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
    // === Данные для карточек (все одинаковые) ===
    const carData = {
        model: "Hyundai Sonata",
        type: "Внедорожник 5 дв.",
        oldPrice: "20 959 900 ₽",
        discount: "-51%",
        price: "960 000 ₽",
        image: "./assets/Rectangle 7.png",
        link: "./product.html"
    };

    // === Генерация карточек для всех контейнеров с классом .js-cards-container ===
    const containers = document.querySelectorAll('.js-cards-container');

    containers.forEach(container => {
        // Очистим контейнер (на случай, если что-то уже есть)
        container.innerHTML = '';

        // Создаём 6 одинаковых карточек
        for (let i = 0; i < 6; i++) {
            const cardLink = document.createElement("a");
            cardLink.href = carData.link;
            cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
            cardLink.style.borderRadius = "0.5rem";

            cardLink.innerHTML = `
                <div class="bg-white w-[162px] p-[12px] md:p-6 md:p-8 rounded-[18px] md:min-w-[480px] flex flex-col gap-[8px] md:gap-[16px] box-border">
                    <img src="${carData.image}" alt="Car Image" class="md:w-full w-[138px] h-[108px] md:h-60 object-cover rounded-md mb-4">
                    <div>
                        <p class="text-[16px] md:text-[28px] font-medium text-gray-800">${carData.model}</p>
                        <span class="text-gray-500 font-medium block mb-2 text-[12px] md:text-[16px]">${carData.type}</span>
                    </div>
                    <div class="flex items-center mb-[0px] md:mb-[-15px] gap-[24px]">
                        <p class="line-through font-medium text-[10px] md:text-[16px]">${carData.oldPrice}</p>
                        <div class="bg-[#DAE7FF] text-[#4886FF] text-[10px] md:text-sm font-bold px-[11px] py-[4px] md:px-3 md:py-1.5 rounded-full md:rounded">
                            ${carData.discount}
                        </div>
                    </div>
                    <p class="text-[20px] md:text-3xl font-medium md:font-bold text-gray-900 mb-4">${carData.price}</p>
                    <button class="w-full bg-[#4886FF] text-[14px] md:text-2xl text-white py-[9px] font-semibold py-4 md:py-5 rounded-[14px] transition">
                        Подобрать
                    </button>
                </div>
            `;

            container.appendChild(cardLink);
        }
    });

    // === Генерация брендов (как в оригинале) ===
    const carBrands = [
        "BAIC", "Lada", "Belgee", "Changan", "Chery", "Dongfeng", "EXEED", "Faw", "Forthing", "Gac",
        "Geely", "Haval", "Hyundai", "Jaecoo", "Jac", "Jetour", "Jetta", "KAIYI", "Livan", "Moskvich",
        "MG", "Nissan", "Omoda", "Renault", "Skoda", "Soueast", "SWM", "Tank", "UAZ", "Volkswagen", "XCite"
    ];

    const brandsContainer = document.getElementById('brands-container');
    if (brandsContainer) {
        brandsContainer.innerHTML = '';
        carBrands.forEach(brand => {
            const brandElement = document.createElement('div');
            brandElement.className = 'flex flex-row items-center gap-[10px] rounded-[12px] bg-[#F8F8F8] px-4 py-2 shrink-0 cursor-pointer border border-transparent transition-all duration-200';
            brandElement.setAttribute('onclick', "this.classList.toggle('bg-[#4886FF]'); this.classList.toggle('bg-[#4886FF]/20'); this.classList.toggle('border-[#4886FF]');");
            brandElement.innerHTML = `
                <div class="w-[24px] h-[24px] rounded-full bg-[#D9D9D9]"></div>
                <p class="text-gray-800 font-medium">${brand}</p>
            `;
            brandsContainer.appendChild(brandElement);
        });
    }

    // === Остальной функционал (оставьте ваш оригинальный JS ниже) ===
    // Все ваши модалки, попапы, слайдеры и т.д. — можно вставить сюда
    // Они не конфликтуют с новым кодом
});