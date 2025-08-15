document.addEventListener("DOMContentLoaded", function () {
    const carBrands = [
        { name: "BAIC", image: "../assets/Ливан.png" },
        { name: "Lada", image: "/images/brands/lada.svg" },
        { name: "Belgee", image: "/images/brands/belgee.svg" },
        { name: "Changan", image: "/images/brands/changan.svg" },
        { name: "Chery", image: "/images/brands/chery.svg" },
        { name: "Dongfeng", image: "/images/brands/dongfeng.svg" },
        { name: "EXEED", image: "/images/brands/exeed.svg" },
        { name: "Faw", image: "/images/brands/faw.svg" },
        { name: "Forthing", image: "/images/brands/forthing.svg" },
        { name: "Gac", image: "/images/brands/gac.svg" },
        { name: "Geely", image: "/images/brands/geely.svg" },
        { name: "Haval", image: "/images/brands/haval.svg" },
        { name: "Hyundai", image: "/images/brands/hyundai.svg" },
        { name: "Jaecoo", image: "/images/brands/jaecoo.svg" },
        { name: "Jac", image: "/images/brands/jac.svg" },
        { name: "Jetour", image: "/images/brands/jetour.svg" },
        { name: "Jetta", image: "/images/brands/jetta.svg" },
        { name: "KAIYI", image: "/images/brands/kaiyi.svg" },
        { name: "Livan", image: "/images/brands/livan.svg" },
        { name: "Moskvich", image: "/images/brands/moskvich.svg" },
        { name: "MG", image: "/images/brands/mg.svg" },
        { name: "Nissan", image: "/images/brands/nissan.svg" },
        { name: "Omoda", image: "/images/brands/omoda.svg" },
        { name: "Renault", image: "/images/brands/renault.svg" },
        { name: "Skoda", image: "/images/brands/skoda.svg" },
        { name: "Soueast", image: "/images/brands/soueast.svg" },
        { name: "SWM", image: "/images/brands/swm.svg" },
        { name: "Tank", image: "/images/brands/tank.svg" },
        { name: "UAZ", image: "/images/brands/uaz.svg" },
        { name: "Volkswagen", image: "/images/brands/volkswagen.svg" },
        { name: "XCite", image: "/images/brands/xcite.svg" }
    ];

    const carDataArray = [
        { model: "BAIC J7 Lifestyle 150", type: "Внедорожник 5 дв.", oldPrice: "20 959 900 ₽", discount: "-51%", price: "19 300 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro Plug-in Hybrid", type: "Седан", oldPrice: "1 959 900 ₽", discount: "-51%", price: "960 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Lada Granta Sportline Лифтбек", type: "Внедорожник 5 дв.", oldPrice: "2 850 000 ₽", discount: "-45%", price: "1 567 500 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro", type: "Внедорожник 7 мест", oldPrice: "2 690 000 ₽", discount: "-40%", price: "1 614 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Haval F7", type: "Внедорожник 5 дв.", oldPrice: "2 450 000 ₽", discount: "-38%", price: "1 519 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "EXEED TXL", type: "Внедорожник 7 мест", oldPrice: "3 100 000 ₽", discount: "-42%", price: "1 800 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" }
    ];

    const brandsContainer = document.getElementById('brands-container');
    const containers = document.querySelectorAll('.js-cards-container');

    if (!brandsContainer) {
        console.error('Элемент с id="brands-container" не найден');
        return;
    }

    let selectedBrands = [];

    function renderBrands() {
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

                updateCarsDisplay();
            });

            brandsContainer.appendChild(brandElement);
        });
    }

    function updateCarsDisplay() {
        const filtered = selectedBrands.length === 0
            ? carDataArray
            : carDataArray.filter(car => {
                return selectedBrands.some(brand => car.model.startsWith(brand));
            });

        containers.forEach(container => {
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

    renderBrands();
    updateCarsDisplay();
});