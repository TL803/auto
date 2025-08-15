    const carDataArray = [
      {
        model: "BMW X5 xDrive30i",
        type: "Седан",
        oldPrice: "6 200 000 ₽",
        discount: "-12%",
        price: "5 456 000 ₽",
        image: "./assets/bmw-x5.png",
        link: "./product.html?id=1",
        brand: "bmw",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "suv",
        priceValue: 5456000
      },
      {
        model: "BMW 3 Series Sedan",
        type: "Седан",
        oldPrice: "4 100 000 ₽",
        discount: "-10%",
        price: "3 690 000 ₽",
        image: "./assets/bmw-3-series.png",
        link: "./product.html?id=2",
        brand: "bmw",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "sedan",
        priceValue: 3690000
      },
      {
        model: "Audi A4 Avant",
        type: "Универсал",
        oldPrice: "3 800 000 ₽",
        discount: "-8%",
        price: "3 496 000 ₽",
        image: "./assets/audi-a4.png",
        link: "./product.html?id=3",
        brand: "audi",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "wagon",
        priceValue: 3496000
      },
      {
        model: "Audi Q7 55 TFSI",
        type: "Внедорожник 7 мест",
        oldPrice: "7 100 000 ₽",
        discount: "-15%",
        price: "6 035 000 ₽",
        image: "./assets/audi-q7.png",
        link: "./product.html?id=4",
        brand: "audi",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "suv",
        priceValue: 6035000
      },
      {
        model: "Mercedes-Benz E-Class",
        type: "Седан",
        oldPrice: "5 300 000 ₽",
        discount: "-11%",
        price: "4 717 000 ₽",
        image: "./assets/mercedes-e-class.png",
        link: "./product.html?id=5",
        brand: "mercedes",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "sedan",
        priceValue: 4717000
      },
      {
        model: "Mercedes-Benz GLC Coupe",
        type: "Купе-кроссовер",
        oldPrice: "5 900 000 ₽",
        discount: "-13%",
        price: "5 133 000 ₽",
        image: "./assets/mercedes-glc-coupe.png",
        link: "./product.html?id=6",
        brand: "mercedes",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "suv",
        priceValue: 5133000
      },
      {
        model: "Toyota Corolla",
        type: "Седан",
        oldPrice: "1 850 000 ₽",
        discount: "-5%",
        price: "1 757 500 ₽",
        image: "./assets/toyota-corolla.png",
        link: "./product.html?id=7",
        brand: "toyota",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "sedan",
        priceValue: 1757500
      },
      {
        model: "Volkswagen Polo",
        type: "Хэтчбек",
        oldPrice: "1 600 000 ₽",
        discount: "-7%",
        price: "1 488 000 ₽",
        image: "./assets/vw-polo.png",
        link: "./product.html?id=8",
        brand: "volkswagen",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "hatchback",
        priceValue: 1488000
      },
      {
        model: "Lada Niva Travel",
        type: "Внедорожник 5 дв.",
        oldPrice: "1 350 000 ₽",
        discount: "-3%",
        price: "1 309 500 ₽",
        image: "./assets/lada-niva.png",
        link: "./product.html?id=9",
        brand: "lada",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "suv",
        priceValue: 1309500
      },
      {
        model: "Ford Ranger",
        type: "Пикап",
        oldPrice: "3 200 000 ₽",
        discount: "-10%",
        price: "2 880 000 ₽",
        image: "./assets/ford-ranger.png",
        link: "./product.html?id=10",
        brand: "ford",
        drive_type: ['Передний', 'Задний', 'Полный'],
        body_type: "pickup",
        priceValue: 2880000
      }
    ];

    const form = document.querySelector('form');
    const container = document.querySelector('.FilteredAuto');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('--- Форма отправлена ---');

      const brand = form.querySelector('select[name="brand"]').value;
      const driveType = form.querySelector('select[name="drive_type"]').value;
      const bodyType = form.querySelector('select[name="body_type"]').value;
      const priceFrom = parseInt(form.querySelector('input[name="price_from"]').value) || 0;
      const priceTo = parseInt(form.querySelector('input[name="price_to"]').value) || Infinity;

      console.log('Фильтры:', { brand, driveType, bodyType, priceFrom, priceTo });

      const filtered = carDataArray.filter(car => {
        const matchesBrand = brand === '' || car.brand === brand;
        const matchesDrive = driveType === '' || car.drive_type.includes(driveType);
        const matchesBody = bodyType === '' || car.body_type === bodyType;
        const matchesPrice = car.priceValue >= priceFrom && car.priceValue <= priceTo;

        console.log(`Проверка: ${car.model}`, { matchesBrand, matchesDrive, matchesBody, matchesPrice });

        return matchesBrand && matchesDrive && matchesBody && matchesPrice;
      });

      console.log('Найдено:', filtered.length);
      console.table(filtered.map(car => ({ model: car.model, price: car.price, brand: car.brand, body: car.body_type })));

      container.innerHTML = '';

      if (filtered.length === 0) {
        container.innerHTML = '<p class="text-gray-600 text-center py-6 col-span-full">По вашему запросу ничего не найдено.</p>';
        return;
      }

      filtered.forEach(car => {
        const cardLink = document.createElement("a");
        cardLink.href = car.link;
        cardLink.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.1)";
        cardLink.style.borderRadius = "0.5rem";
        cardLink.innerHTML = `
          <div class="bg-white w-[162px] h-[368px] md:h-[642px] p-[12px] md:p-8 rounded-[18px] md:min-w-[480px] flex flex-col gap-[8px] md:gap-[16px] box-border">
            <div class="w-full h-[108px] md:h-60 overflow-hidden rounded-md mb-4 flex items-center justify-center">
              <img 
                src="${car.image}" 
                alt="Car Image" 
                class="w-full h-full object-contain rounded-md"
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