const carDataArray = [
    {
        model: "BAIC J7 Lifestyle 150",
        type: "Внедорожник 5 дв.",
        oldPrice: "20 959 900 ₽",
        discount: "-51%",
        price: "19 300 000 ₽",
        image: "./assets/taxi/Baic U5 PLUS.png",
        link: "./product.html"
    },
    {
        model: "Chery Tiggo 8 Pro Plug-in Hybrid",
        type: "Седан",
        oldPrice: "1 959 900 ₽",
        discount: "-51%",
        price: "960 000 ₽",
        image: "./assets/taxi/Chery Tiggo 4 Pro.png",
        link: "./product.html"
    },
    {
        model: "Lada Granta Sportline Лифтбек",
        type: "Внедорожник 5 дв.",
        oldPrice: "2 850 000 ₽",
        discount: "-45%",
        price: "1 567 500 ₽",
        image: "./assets/taxi/Moskvich 6.png",
        link: "./product.html"
    },
    {
        model: "Chery Tiggo 8 Pro",
        type: "Внедорожник 7 мест",
        oldPrice: "2 690 000 ₽",
        discount: "-40%",
        price: "1 614 000 ₽",
        image: "./assets/taxi/Chery Tiggo 4 Pro.png",
        link: "./product.html"
    },
    {
        model: "Haval F7",
        type: "Внедорожник 5 дв.",
        oldPrice: "2 450 000 ₽",
        discount: "-38%",
        price: "1 519 000 ₽",
        image: "./assets/taxi/Haval F7.png",
        link: "./product.html"
    },
    {
        model: "EXEED TXL",
        type: "Внедорожник 7 мест",
        oldPrice: "3 100 000 ₽",
        discount: "-42%",
        price: "1 800 000 ₽",
        image: "./assets/taxi/Haval F7x.png",
        link: "./product.html"
    }
];

const selectedBrands = [];

function filterCarsByBrands(brands) {
    if (!Array.isArray(brands) || brands.length === 0) return carDataArray;

    return carDataArray.filter(car => {
        return brands.some(brand => car.model.startsWith(brand));
    });
}

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
            cardLink.className = "no-underline block";
            cardLink.style.textDecoration = "none";
            cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
            cardLink.style.borderRadius = "18px"; 

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
    <button class="w-full bg-[#4886FF] text-[14px] md:text-2xl text-white py-[9px] font-semibold py-4 md:py-5 rounded-[14px] transition text-center">
        Подобрать
    </button>
</div>
`;
            container.appendChild(cardLink);
        });
    });
}

window.updateCarsDisplay = function(brands) {
    selectedBrands.length = 0;
    if (Array.isArray(brands)) {
        selectedBrands.push(...brands);
    }
    renderCars();
};

document.addEventListener("DOMContentLoaded", function () {
    const taxiContainer = document.getElementById('taxi-container');
    if (taxiContainer) {
        renderCars('#taxi-container');
    } else {
        renderCars('.js-cards-container');
    }
});