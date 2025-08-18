import { carBrands } from './data.js';

let selectedBrands = [];
let updateCarsDisplay = null; // Будет установлена извне

function renderBrands(containerId = 'brands-container') {
    const brandsContainer = document.getElementById(containerId);

    if (!brandsContainer) {
        console.error(`Элемент с id="${containerId}" не найден`);
        return;
    }

    brandsContainer.innerHTML = '';

    carBrands.forEach(brand => {
        const brandElement = document.createElement('div');
        brandElement.className = `
            flex flex-col items-center justify-between gap-2
            rounded-[12px] bg-[#F8F8F8] px-4 py-3 shrink-0 cursor-pointer
            border border-transparent transition-all duration-200
            hover:bg-[#4886FF]/20 hover:border-[#4886FF]
            w-[100px] h-[120px] text-center
        `;
        brandElement.dataset.brand = brand.name;

        brandElement.innerHTML = `
            <div class="w-[60px] h-[60px] flex items-center justify-center">
                <img 
                    src="${brand.image}" 
                    alt="${brand.name}" 
                    onerror="this.onerror=null; this.src='/images/brands/placeholder.svg';" 
                    class="max-w-full max-h-full object-contain"
                    loading="lazy"
                    decoding="async"
                >
            </div>
            <p class="text-gray-800 font-medium text-sm">${brand.name}</p>
        `;

        if (selectedBrands.includes(brand.name)) {
            brandElement.classList.add('bg-[#4886FF]/20', 'border-[#4886FF]');
        }

        brandElement.addEventListener('click', () => {
            const brandName = brandElement.dataset.brand;
            const index = selectedBrands.indexOf(brandName);

            if (index === -1) {
                selectedBrands.push(brandName);
                brandElement.classList.add('bg-[#4886FF]/20', 'border-[#4886FF]');
            } else {
                selectedBrands.splice(index, 1);
                brandElement.classList.remove('bg-[#4886FF]/20', 'border-[#4886FF]');
            }

            if (updateCarsDisplay) updateCarsDisplay(selectedBrands);
        });

        brandsContainer.appendChild(brandElement);
    });
}

// Экспортируем функции и состояние
export { selectedBrands, renderBrands, setSelectedBrandsUpdater };

function setSelectedBrandsUpdater(callback) {
    updateCarsDisplay = callback;
}