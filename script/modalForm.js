document.addEventListener("DOMContentLoaded", function () {
    // Создаём модалку программно
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modal';
    modalOverlay.className = 'modal-overlay hidden w-full h-full bg-black/50 fixed z-[10] inset-0 flex items-center justify-center';
    modalOverlay.style.display = 'none'; // начальное скрытие

    // HTML содержимое модалки
    modalOverlay.innerHTML = `
        <div class="bg-white rounded-[14px] w-[1200px] shadow-lg p-12 h-[600px] flex flex-col justify-center relative gap-6 max-w-full mx-4">
            <button class="close-modal absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div>
                <h2 class="text-[#4886FF] text-center font-bold text-4xl mb-4">Остались вопросы?</h2>
                <p class="text-gray-600 text-center text-xl mb-8">Оставьте ваш номер и мы перезвоним в ближайшее время!</p>
            </div>
            <form class="space-y-4 flex flex-col gap-4">
                <input type="text" placeholder="ФИО" class="w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none">
                <input type="tel" placeholder="Ваш телефон" class="w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none">
                <div class="flex items-center">
                    <input type="checkbox" id="agree" class="mr-2">
                    <label for="agree" class="text-sm text-gray-600 leading-tight">
                        Я соглашаюсь с условиями и даю свое согласие на обработку моих персональных данных,<br>
                        и разрешаю сделать запрос в бюро кредитных историй
                    </label>
                </div>
                <button type="submit" class="form-send w-full bg-[#4886FF] text-white px-4 py-3 rounded-[14px] text-xl font-medium hover:bg-[#4886FF] transition duration-300">
                    Оставить заявку на звонок
                </button>
            </form>
        </div>
    `;

    // Добавляем модалку в body
    document.body.appendChild(modalOverlay);

    // Находим элементы
    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    // Сохраняем оригинальное содержимое модалки
    const originalModalContent = modalOverlay.querySelector('div').outerHTML;

    function openModal() {
        modalOverlay.classList.remove('hidden');
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Восстанавливаем форму при открытии
        resetModalToOriginal();
        reattachFormSubmit();
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function resetModalToOriginal() {
        const modalContent = modalOverlay.querySelector('div');
        modalContent.outerHTML = originalModalContent;
    }

    function reattachFormSubmit() {
        const formSend = modalOverlay.querySelector('.form-send');
        if (formSend) {
            formSend.addEventListener('click', handleFormSubmit, { once: true });
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const fullName = modalOverlay.querySelector('input[placeholder="ФИО"]')?.value.trim();
        const phone = modalOverlay.querySelector('input[placeholder="Ваш телефон"]')?.value.trim();
        const agree = modalOverlay.querySelector('#agree')?.checked;

        if (!fullName) return alert('Введите ФИО');
        if (!phone) return alert('Введите телефон');
        if (!agree) return alert('Подтвердите согласие');

        // Заменяем содержимое на "спасибо"
        const modalContent = modalOverlay.querySelector('div');
        modalContent.innerHTML = `
            <button class="close-modal absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div>
                <h2 class="text-[#4886FF] text-center font-bold text-4xl mb-4">Спасибо за заявку!</h2>
                <p class="text-gray-600 text-center text-xl mb-8">Мы перезвоним вам в ближайшее время</p>
                <img src="./assets/------------------ 1.svg" alt="Успешно!" class="mx-auto max-w-full">
            </div>
        `;

        // Привязываем закрытие новой кнопки
        modalContent.querySelector('.close-modal')?.addEventListener('click', closeModal);
    }

    // Открытие по кнопкам
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Закрытие по клику на overlay или крестик
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.closest('.close-modal')) {
            closeModal();
        }
    });

    // Авто-открытие через 30 секунд (всегда срабатывает)
    setTimeout(() => {
        if (modalOverlay.classList.contains('hidden')) {
            openModal();
        }
    }, 30000);
});