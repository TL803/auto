document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById('mobilePaymentSlider');
    const termValue = document.getElementById('termValue');
    const paymentValue = document.getElementById('paymentValue');
    const container = document.getElementById('cardsContainer');

    const terms = [
        { term: "10 лет", payment: "40 000" },
        { term: "9 лет", payment: "45 000" },
        { term: "8 лет", payment: "50 000" },
        { term: "7 лет", payment: "55 000" },
        { term: "6 лет", payment: "60 000" },
        { term: "5 лет", payment: "70 000" },
        { term: "4 года", payment: "80 000" },
        { term: "3 года", payment: "90 000" }
    ];

    const interestRate = "10,9%";

    let cards = [];
    let visibleCards = [];
    let currentIndex = 0; 

    function generateCards() {
        container.innerHTML = '';

        terms.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add(
                'card',
                'w-[240px]', 'h-[280px]', 'bg-white', 'shadow-md', 'p-4',
                'flex', 'flex-col', 'items-center', 'justify-center', 'cursor-pointer'
            );
            card.setAttribute('data-year', String(10 - index));
            card.setAttribute('data-term', item.term);
            card.setAttribute('data-payment', item.payment);
            card.setAttribute('data-index', String(index));

            card.style.cssText = "box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1); border-radius: 0.5rem;";

            card.innerHTML = `
                <span class="text-[32px] font-regular text-gray-500">${item.term}</span>
                <span class="text-[18px] font-regular text-gray-500">Платеж, ₽</span>
                <span class="text-[46px] font-medium mt-2">${item.payment}</span>
                <div class="w-4/5 h-0.5 bg-[#D9D9D9] mt-2"></div>
                <span class="text-[32px] font-regular text-gray-500 mt-2">${interestRate}</span>
            `;

            card.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                if (slider) slider.value = index;
                activateCard(index);
            });

            container.appendChild(card);
            cards.push(card);
        });

        updateVisibleCards();
    }

    function updateVisibleCards() {
        visibleCards = cards.slice(currentIndex * 4, (currentIndex + 1) * 4);
        resetCards();

        visibleCards.forEach(card => {
            card.classList.remove('hidden');
        });

        cards.forEach(card => {
            if (!visibleCards.includes(card)) {
                card.classList.add('hidden');
            }
        });
    }

    function resetCards() {
        cards.forEach(card => {
            card.classList.remove('bg-[#4886FF]', 'text-white');
            card.classList.add('bg-white');
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
        if (index < 0 || index >= terms.length) return;

        const data = terms[index];
        termValue.textContent = data.term;
        paymentValue.textContent = data.payment + " ₽";
        resetCards();

        const activeCard = cards[index];
        if (!activeCard) return;

        activeCard.classList.remove('bg-white');
        activeCard.classList.add('bg-[#4886FF]', 'text-white');

        const spans = activeCard.querySelectorAll('span');
        spans.forEach(span => {
            span.classList.remove('text-gray-500');
            span.classList.add('text-white');
        });

        const divider = activeCard.querySelector('.h-0\\.5');
        if (divider) {
            divider.classList.remove('bg-[#D9D9D9]');
            divider.classList.add('bg-blue-200');
        }

        if (slider) {
            slider.value = index;
            const percent = (index / (terms.length - 1)) * 100;
            slider.style.setProperty('--fill-percent', `${percent}%`);
        }
    }

    window.scrollCards = function (direction) {
        if (direction === 'left') {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else if (direction === 'right') {
            currentIndex = Math.min(currentIndex + 1, Math.ceil(cards.length / 4) - 1);
        }

        updateVisibleCards();
    };


    generateCards();

    if (slider) {
        slider.max = terms.length - 1;
        slider.value = 0;

        slider.addEventListener('input', function () {
            const index = parseInt(this.value);
            activateCard(index);
        });
    }

    activateCard(parseInt(slider?.value || 0));
});