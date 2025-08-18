// cars.js
import { carDataArray } from './data.js';
import { selectedBrands } from './brands.js';

// Функция фильтрации автомобилей по брендам
function filterCarsByBrands(brands) {
    if (brands.length === 0) return carDataArray;

    return carDataArray.filter(car => {
        return brands.some(brand => car.model.startsWith(brand));
    });
}

// Отрисовка автомобилей
function renderCars(containers = '.js-cards-container') {
    const filtered = filterCarsByBrands(selectedBrands);
    const containerList = typeof containers === 'string'
        ? document.querySelectorAll(containers)
        : containers;

    containerList.forEach(container => {
        container.innerHTML = '';
        filtered.forEach(car => {
            const cardLink = document.createElement("a");
            cardLink.href = car.link;
            cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
            cardLink.style.borderRadius = "0.5rem";

            cardLink.innerHTML = `
<div class="bg-white w-[162px] h-[368px] md:h-[642px] p-[12px] md:p-6 md:p-8 rounded-[18px] md:min-w-[480px] flex flex-col gap-[8px] md:gap-[16px] box-border">
    <div class="w-full h-[108px] md:h-60 overflow-hidden rounded-md mb-4 flex items-center justify-center">
        <img 
            src="${car.image}" 
            alt="Car Image" 
            class="w-full h-full object-contain rounded-md"
            loading="lazy"
            decoding="async"
        >
    </div>
    <div>
        <p class="text-[16px] h-[60px] md:h-[90px] md:text-[28px] font-medium text-gray-800">${car.model}</p>
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
}

export function updateCarsDisplay(brands) {
    selectedBrands.length = 0;
    if (Array.isArray(brands)) {
        selectedBrands.push(...brands);
    }
    renderCars();
}

document.addEventListener("DOMContentLoaded", function () {
    renderCars();
});