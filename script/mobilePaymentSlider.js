// mobilePaymentSlider.js
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