// modalForm.js
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector('.modal-overlay');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeModalBtn = modal?.querySelector('.close-modal');
    const formSend = modal?.querySelector('.form-send');
    let modalTimer = null;
    const hasFormBeenSubmitted = localStorage.getItem('formSubmitted') === 'true';

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

    if (!hasFormBeenSubmitted) {
        startModalTimer();
    }
});