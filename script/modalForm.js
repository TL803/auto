document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modal';
    modalOverlay.className = 'modal-overlay hidden w-full h-full bg-black/50 fixed z-[10] inset-0 flex items-center justify-center';
    modalOverlay.style.display = 'none'; 

    modalOverlay.innerHTML = `
        <div class="bg-white rounded-[14px] w-[1200px] shadow-lg p-12 h-[600px] flex flex-col justify-center relative gap-6 max-w-full mx-4">
            <button class="close-modal absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div>
                <h2 class="text-[#4886FF] text-center font-bold text-2xl md:text-4xl  mb-4">Остались вопросы?</h2>
                <p class="text-gray-600 text-center  md:text-xl md:mb-8">Оставьте ваш номер и мы перезвоним в ближайшее время!</p>
            </div>
            <form class="space-y-4 flex flex-col gap-2 md:gap-4">
                <input type="text" placeholder="ФИО" class="w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none">
                <input type="tel" placeholder="Ваш телефон" class="w-full px-7 py-6 bg-[#F8F8F8] rounded-md focus:outline-none">
    <div class="flex items-center">
        <input type="checkbox" id="agreePopup" class="mr-2 w-[20px] h-[20px]">
        <label for="agreePopup" class="text-[16px] text-left leading-tight">
            я согласен с <a class="text-blue-600 underline" href="./privacyPolicy.html">политикой обработки персональных данных</a>
        </label>
    </div>
                <button type="submit" class="form-send w-full bg-[#4886FF] text-white px-4 py-3 rounded-[14px] md:text-xl font-medium hover:bg-[#4886FF] transition duration-300">
                    Оставить заявку на звонок
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    const openModalBtns = document.querySelectorAll('.open-modal-btn');

    const originalModalContent = modalOverlay.querySelector('div').outerHTML;

    function openModal() {
        modalOverlay.classList.remove('hidden');
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
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

        modalContent.querySelector('.close-modal')?.addEventListener('click', closeModal);
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.closest('.close-modal')) {
            closeModal();
        }
    });

    setTimeout(() => {
        if (modalOverlay.classList.contains('hidden')) {
            openModal();
        }
    }, 30000);
});