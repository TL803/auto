// brandsGrid.js
document.addEventListener("DOMContentLoaded", function () {
    const carBrands = [
        "BAIC", "Lada", "Belgee", "Changan", "Chery", "Dongfeng", "EXEED", "Faw", "Forthing", "Gac",
        "Geely", "Haval", "Hyundai", "Jaecoo", "Jac", "Jetour", "Jetta", "KAIYI", "Livan", "Moskvich",
        "MG", "Nissan", "Omoda", "Renault", "Skoda", "Soueast", "SWM", "Tank", "UAZ", "Volkswagen", "XCite"
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