# 🚗 Follow-Up Popup System

> **"Догоняющее" модальное окно после ухода со страницы `product.html`**

Этот механизм показывает **модальное окно через 10 секунд** на **любой следующей странице**, если пользователь **перешёл с `product.html`**.

💡 Идеально подходит для повышения конверсии:  
> _"Вы смотрели Hyundai Solaris — успейте получить спецпредложение!"_

---

## 🧩 Как это работает

1. Пользователь находится на странице `product.html`.
2. При клике по **любой ссылке** (внутренней или внешней) — в `sessionStorage` устанавливается флаг.
3. После перехода на **другую страницу сайта** — система проверяет флаг.
4. Если флаг найден — через **10 секунд** появляется модальное окно.
5. Флаг удаляется, чтобы окно не показывалось повторно.

---

## 📁 Структура внедрения

### ✅ 1. Код для `product.html`  
📌 Вставьте **ТОЛЬКО на страницу `product.html`**.

Этот код устанавливает флаг при любом уходе со страницы.

```html
<script>
if (window.location.pathname.endsWith('product.html')) {
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        try {
            const targetUrl = new URL(link.href);
            sessionStorage.setItem('followUpAfterProduct', 'true');
            console.log('Follow-Up флаг установлен: уход с product.html');

            e.preventDefault();
            setTimeout(() => {
                window.location.href = link.href;
            }, 50);

        } catch (err) {
            // Обработка якорей и некорректных ссылок
            if (link.href.startsWith('#')) return;

            sessionStorage.setItem('followUpAfterProduct', 'true');
            console.log('Follow-Up флаг установлен (некорректная ссылка)');
            e.preventDefault();
            setTimeout(() => {
                window.location.href = link.href;
            }, 50);
        }
    });
}
</script>





### ✅ 1. Код для ВСЕХ остальных страниц  

// TODO: Этот файл пока не играет никакой роли, пока я в раздумиях, как его
// TODO: использовать, в нем будет смысл после того, как возьмусь за рефакторинг самого кода 16.08.25 / 17.08.25


document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem('followUpAfterProduct') === 'true') {
        console.log('Follow-Up Popup: обнаружен уход с product.html — показываем через 10 сек');

        sessionStorage.removeItem('followUpAfterProduct');

        setTimeout(createFollowUpModal, 10000);
    }

    function createFollowUpModal() {
        if (document.getElementById('follow-up-modal-overlay')) return;

        const overlay = document.createElement('div');
        overlay.id = 'follow-up-modal-overlay';
        overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';

        const modal = document.createElement('div');
        modal.className = 'bg-[#4886FF] text-white rounded-[14px] shadow-xl max-w-lg w-full relative overflow-hidden';
        modal.innerHTML = `
            <button id="follow-up-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
            <div class="p-6 pt-8 text-center">
                <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris!</h2>
                <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
                <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
                <form id="follow-up-form" class="space-y-4">
                    <input type="text" name="fullname" placeholder="ФИО"
                        class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
                        required />
                    <input type="tel" name="phone" placeholder="Ваш телефон"
                        class="w-full px-7 h-full py-6 bg-[#F8F8F866]/50 rounded-md focus:outline-none text-[#EAEAEA] placeholder:text-[#EAEAEA]"
                        required />
                    <div class="flex items-start space-x-2">
                        <input type="checkbox" id="agreement" name="agreement" class="mt-1.5 h-4 w-4 focus:ring-blue-500" required />
                        <label for="agreement" class="text-xs leading-tight text-left">
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

        document.getElementById('follow-up-close').addEventListener('click', () => {
            overlay.remove();
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });

        document.getElementById('follow-up-form').addEventListener('submit', function (e) {
            e.preventDefault();

            modal.innerHTML = `
                <button id="follow-up-thanks-close" class="absolute top-3 right-3 text-white text-2xl font-bold hover:text-gray-200 transition z-10">&times;</button>
                <div class="p-6 pt-8 text-center">
                    <h2 class="text-2xl font-bold mb-1">Успейте купить Hyundai Solaris!</h2>
                    <p class="text-blue-100 text-sm mb-6">2.5 л. 6АКПП (180 л.с.) FWD</p>
                    <img src="./assets/Rectangle 36.png" alt="Hyundai Solaris" class="w-full h-auto rounded mb-6" />
                    <h3 class="text-xl font-semibold mb-6">Спасибо за заявку!</h3>
                    <p>Мы свяжемся с вами в ближайшее время.</p>
                </div>
            `;

            setTimeout(() => {
                if (overlay && document.body.contains(overlay)) {
                    overlay.remove();
                }
            }, 5000);

            document.getElementById('follow-up-thanks-close').addEventListener('click', () => {
                overlay.remove();
            });
        });
    }
});