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
        const matchesDrive = driveType === '' || car.drives.includes(driveType);
        const matchesBody = bodyType === '' || car.type === bodyType;
        const matchesPrice = car.priceValue >= priceFrom && car.priceValue <= priceTo;

        console.log(`Проверка: ${car.model}`, { matchesBrand, matchesDrive, matchesBody, matchesPrice });

        return matchesBrand && matchesDrive && matchesBody && matchesPrice;
      });

      console.log('Найдено:', filtered.length);
      console.table(filtered.map(car => ({ model: car.model, price: car.price, brand: car.brand, body: car.type })));

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
                    
                    <!-- Скрытый зачеркнутый ценник -->

                    <div class="flex items-center mb-[0px] md:mb-[-15px] gap-[24px] hidden">
                        <p class="line-through font-medium text-[10px] md:text-[16px]">от ${car.oldPrice}</p>
                        <div class="bg-[#DAE7FF] text-[#4886FF] text-[10px] md:text-sm font-bold px-[11px] py-[4px] md:px-3 md:py-1.5 rounded-full md:rounded">
                            ${car.discount}
                        </div>
                    </div>
                        <p class="text-[20px] md:text-3xl font-medium md:font-bold text-gray-900 mb-4">от ${car.price}</p>
                        <button class="w-full bg-[#4886FF] text-[14px] md:text-2xl text-white py-[9px] font-semibold py-4 md:py-5 rounded-[14px] transition">
                            Подобрать
                        </button>
                    </div>
                `;
        container.appendChild(cardLink);
      });
    });