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

    const container = document.getElementById('brands-container');
    if (!container) {
        console.error('Элемент с id="brands-container" не найден');
        return;
    }

    container.innerHTML = '';

    carBrands.forEach(brand => {
        const brandElement = document.createElement('div');
        brandElement.className = `
            flex flex-col items-center justify-between gap-2
            rounded-[12px] bg-[#F8F8F8] px-4 py-3 shrink-0 cursor-pointer
            border border-transparent transition-all duration-200
            hover:bg-[#4886FF]/20 hover:border-[#4886FF]
            w-[100px] h-[120px] text-center
        `;
        brandElement.setAttribute('onclick', `
            this.classList.toggle('bg-[#4886FF]/20');
            this.classList.toggle('border-[#4886FF]');
        `);

        brandElement.innerHTML = `
            <div class="w-[60px] h-[60px] flex items-center justify-center">
                <img 
                    src="${brand.image}" 
                    alt="${brand.name}" 
                    onerror="this.onerror=null; this.src='/images/brands/placeholder.svg';" 
                    class="max-w-full max-h-full object-contain"
                >
            </div>
            <p class="text-gray-800 font-medium text-sm">${brand.name}</p>
        `;

        container.appendChild(brandElement);
    });
});