document.addEventListener('DOMContentLoaded', function () {
    const priceElement = document.getElementById('profit');
    const optionBlocks = document.querySelectorAll('.bg-white.flex.p-4');

    function parsePrice(text) {
        return parseInt(text.replace(/\D/g, ''), 10) || 0;
    }

    function updateTotalDiscount() {
        let total = 0;

        optionBlocks.forEach(block => {
            const checkbox = block.querySelector('input[type="checkbox"]');
            const priceElementInBlock = block.querySelector('p.text-\\[\\#4886FF\\]');
            if (!priceElementInBlock) return;

            const priceValue = parsePrice(priceElementInBlock.textContent);
            if (checkbox && checkbox.checked) {
                total += priceValue;
            }
        });

        priceElement.textContent = total.toLocaleString('ru-RU') + ' ₽';
    }

    optionBlocks.forEach(block => {
        const checkbox = block.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.addEventListener('change', updateTotalDiscount);
        }
    });

    priceElement.textContent = '0 ₽';

});