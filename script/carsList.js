// carsList.js
document.addEventListener("DOMContentLoaded", function () {
    const carDataArray = [
        { model: "Jaecoo J7 Lifestyle 150", type: "Внедорожник 5 дв.", oldPrice: "20 959 900 ₽", discount: "-51%", price: "19 300 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro Plug-in Hybrid", type: "Седан", oldPrice: "1 959 900 ₽", discount: "-51%", price: "960 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Lada Granta Sportline Лифтбек", type: "Внедорожник 5 дв.", oldPrice: "2 850 000 ₽", discount: "-45%", price: "1 567 500 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Chery Tiggo 8 Pro", type: "Внедорожник 7 мест", oldPrice: "2 690 000 ₽", discount: "-40%", price: "1 614 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "Haval F7", type: "Внедорожник 5 дв.", oldPrice: "2 450 000 ₽", discount: "-38%", price: "1 519 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" },
        { model: "EXEED TXL", type: "Внедорожник 7 мест", oldPrice: "3 100 000 ₽", discount: "-42%", price: "1 800 000 ₽", image: "./assets/Rectangle 7.png", link: "./product.html" }
    ];
    const containers = document.querySelectorAll('.js-cards-container');
    containers.forEach(container => {
        container.innerHTML = '';
        carDataArray.forEach(car => {
            const cardLink = document.createElement("a");
            cardLink.href = car.link;
            cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
            cardLink.style.borderRadius = "0.5rem";
            cardLink.innerHTML = `
                <div class="bg-white w-[162px] h-[368px] md:h-[642px] p-[12px] md:p-6 md:p-8 rounded-[18px] md:min-w-[480px] flex flex-col gap-[8px] md:gap-[16px] box-border">
                    <img src="${car.image}" alt="Car Image" class="md:w-full w-[138px] h-[108px] md:h-60 object-cover rounded-md mb-4">
                    <div>
                        <p class="text-[16px] md:text-[28px] font-medium text-gray-800">${car.model}</p>
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
});