const bannersData = [
  /* html */
  `
    <div class="w-full h-full relative bg-[#BCD3FF] pointer-events-none select-none"
         style="background-image: url('./assets/banners/Rectangle-3-_2_.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;">
      <div class="p-6 md:p-8 absolute left-6 md:left-[60px] top-6 md:top-[70px] max-w-xs md:max-w-md">
        <h1 class="text-3xl md:text-4xl text-white font-bold mb-3 md:mb-4 bg-red-500 px-6 md:px-[24px] py-3 md:py-[12px] rounded-[12px]">
          Горячие скидки на автомобили!
        </h1>
        <p class="inline-block text-white text-xl md:text-2xl px-6 md:px-[24px] py-3 md:py-[12px] font-bold mb-6 rounded-[12px] bg-red-500">
          До 40%
        </p>
      </div>
      <a href="/loan" class="absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px]">
        <button class="bg-[#4886FF] pointer-events-auto rounded-[16px] text-medium text-white text-[32px] md:text-[36px] px-8 md:px-[100px] py-[24px] transition hover:bg-blue-700">
          Подобрать авто
        </button>
      </a>
    </div>
  `,

  /* html */
  `
    <div 
      class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-[#F88446] text-white overflow-hidden pointer-events-none select-none"
      style="background-image: url('./assets/banners/bg/Баннер (1).webp'); background-size: cover; background-position: center; background-repeat: no-repeat;">

      <img 
        class="absolute top-[15px] right-[100px] pointer-events-none" 
        src="./assets/banners/logos/baic 1.svg" fetchpriority="high"
        alt="BAIC Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[160px] left-[90px]">
        <h1 class="text-[64px] font-bold">BAIC X55</h1>
        <p class="text-[36px] mb-[52px] font-Medium">Кредит от 0,01%</p>
        <a href='/auto/baic/x55/baic_x55_cross'>
          <button class="bg-white pointer-events-auto text-[36px] cursor-pointer w-max font-bold text-[#F88446] px-[96px] py-[24px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 320.webp" 
        alt="BAIC X55"  fetchpriority="high"
        class="absolute w-[1101px] bottom-[30px] right-[-20px]"
        loading="lazy"
        decoding="async">

      <div class="flex px-[40px] gap-4 absolute left-0 bottom-[50px]">
        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4">
            <img class="ml-[30px] w-[38px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[15px] font-regular">Доп оборудование<br> в подарок на 50.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4">
            <img class="ml-[30px] w-[38px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[15px] font-regular">Гарантия<br> на 5 лет /150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  /* html */
  `
    <div class="w-full h-full relative bg-[#BCD3FF] pointer-events-none select-none"
         style="background-image: url('./assets/banners/bg/афиша-_6_.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;">
      <div class="p-6 md:p-8 absolute left-6 md:left-[60px] top-6 md:top-[70px] max-w-xs md:max-w-md">
        <h1 class="text-3xl md:text-4xl text-white font-bold mb-3 md:mb-4 bg-red-500 px-6 md:px-[24px] py-3 md:py-[12px] rounded-[12px]">
          Trade-in
        </h1>
        <p class="inline-block text-white text-xl md:text-2xl px-6 md:px-[24px] py-3 md:py-[12px] font-bold mb-6 rounded-[12px] bg-red-500">
          Выгода до 200 тысяч
        </p>
      </div>
      <a href="/tradein" class="absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px]">
        <button class="bg-[#4886FF] pointer-events-auto rounded-[16px] text-medium text-white text-[32px] md:text-[36px] px-8 md:px-[100px] py-[24px] transition hover:bg-blue-700">
          Воспользоваться
        </button>
      </a>
    </div>
  `,

  /* html */
  `
    <div 
      class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-[#038963] text-white overflow-hidden pointer-events-none select-none"
      style="background-image: url('./assets/banners/car-banner.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;">

      <img 
        class="absolute top-[15px] right-[100px]" 
        src="./assets/banners/logos/pjlywkns8jo97om8ctn14q0k40gyyfdh 1.svg"  fetchpriority="high"
        alt="LIVAN Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[160px] left-[90px]">
        <h1 class="text-[64px] font-bold">LIVAN S6PRO</h1>
        <p class="text-[36px] mb-[52px] font-Medium">Автомобиль, созданный для побед!</p>
        <a href='/auto/livan/s6pro/livan_s6pro_sedan'>
          <button class="bg-white pointer-events-auto text-[36px] cursor-pointer w-max font-bold text-[#038963] px-[96px] py-[24px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 319.webp" 
        alt="LIVAN S6PRO"  fetchpriority="high"
        class="absolute bottom-[70px] right-[1%]"
        loading="lazy"
        decoding="async">

      <div class="flex w-full px-[40px] justify-between gap-4 absolute right-0 bottom-[50px]">
        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4 w-[622px]">
            <img class="ml-[30px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[24px] font-regular">Доп оборудование в подарок на 50.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4 w-[622px]">
            <img class="ml-[30px] w-[70px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[24px] font-regular">Гарантия на 5 лет /150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  /* html */
  `
    <div class="w-full h-full relative bg-[#BCD3FF] pointer-events-none select-none"
         style="background-image: url('./assets/banners/bg/афиша3.png'); 
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;">
                <p class="text-[96px] absolute top-[100px] left-[93px] font-extrabold leading-[100px] text-white">Ваш шанс <br>
на одобрение — 95%</p>
      <a href="/loan" class="absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px]">
        <button class="bg-[#4886FF] pointer-events-auto rounded-[16px] text-medium text-white text-[32px] md:text-[36px] px-8 md:px-[100px] py-[24px] transition hover:bg-blue-700">
          Рассчитать кредит  
        </button>
      </a>
    </div>
  `,

  /* html */
  `
    <div 
      class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-blue-500 text-white overflow-hidden pointer-events-none select-none"
      style="background-image: url('./assets/banners/car-banner.webp'); background-size: cover; background-position: center; background-repeat: no-repeat;">

      <img 
        class="absolute top-[15px] right-[100px]"  fetchpriority="high"
        src="./assets/banners/logos/Kaiyi-Logo-500x281 1.svg" 
        alt="Kaiyi Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[160px] left-[90px]">
        <h1 class="text-[64px] font-bold">KAIYI X3 Pro</h1>
        <p class="text-[36px] mb-[52px] font-Medium">Свобода движения. Мощь в каждой детали</p>
        <a href='/auto/kaiyi/x3/kaiyi_x3_cross'>
          <button class="bg-white pointer-events-auto text-[36px] cursor-pointer w-max font-bold text-[#3664BF] px-[96px] py-[24px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 318.webp"  fetchpriority="high"
        alt="KAIYI X3 Pro" 
        class="absolute bottom-0 left-[30%]"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col gap-4 absolute right-0 top-[150px]">
        <div class="bg-white/10 border border-white border-r-0 rounded-tl-[44px] rounded-bl-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4">
            <img class="ml-[30px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[24px] font-regular">Доп оборудование<br> в подарок на 100.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white border-r-0 rounded-tl-[44px] rounded-bl-[44px] backdrop-blur-sm p-4 shadow-md">
          <div class="flex items-center gap-4">
            <img class="ml-[30px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[24px] font-regular">Гарантия <br>на 5 лет /150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,




];

const adaptiveBannersData = [
  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px] change-bg"
        style="background-image: url('./assets/banners/Rectangle-3-_2_.webp');">
        <div class="absolute top-[50px] left-[10px] flex flex-col items-start max-w-xs">
            <h2 class="text-white inline-block px-[5px] py-1 font-bold mb-4 text-[20px] rounded-[12px] bg-red-500">
                Горячие скидки<br> на автомобили!
            </h2>
            <h2 class="text-white inline-block px-4 py-2 font-bold text-3xl mb-6 rounded-[12px] bg-red-500">
                До 40%
            </h2>
        </div>
        <a href="/loan" class="absolute bottom-[50px] w-[80%]">
          <button
            class="bg-white text-[#179FE3] hover:bg-[#e6f7ff] text-[#179FE3] font-medium px-6 py-3 rounded-[20px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Подобрать авто
          </button>
        </a>
    </section>
  `,
  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center bg-[#F88446] justify-center text-white rounded-[14px] change-bg"
        style="background-image: url('./assets/banners/bg/Баннер (1).webp');">

      <img 
        class="absolute top-[0] right-[20px] w-[145px]"  fetchpriority="high"
        src="./assets/banners/logos/baic 1.svg" 
        alt="BAIC Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[60px] w-full text-center">
        <h1 class="text-[32px] font-bold">BAIC X55</h1>
        <p class="text-[15px] mb-[20px] font-Medium">Кредит от 0,01%</p>
        <a href='/auto/baic/x55/baic_x55_cross'>
          <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#DD7035] px-[54px] py-[8px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 320.webp"  fetchpriority="high"
        alt="BAIC X55" 
        class="absolute bottom-[60px] left-[10%] w-[281px]"
        loading="lazy"
        decoding="async">

      <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Гарантия<br>на 5 лет<br>150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px] change-bg"
        style="background-image: url('./assets/banners/bg/афиша-_6_.webp');">
        <div class="absolute top-[50px] left-[10px] flex flex-col items-start max-w-xs">
            <h2 class="text-white inline-block px-[5px] py-1 font-bold mb-4 text-[20px] rounded-[12px] bg-red-500">
                Trade-in
            </h2>
            <h2 class="text-white inline-block px-4 py-2 font-bold text-3xl mb-6 rounded-[12px] bg-red-500">
                Выгода до 200 тысяч
            </h2>
        </div>
        <a href="/tradein" class="absolute bottom-[50px] w-[80%]">
          <button
            class="bg-[#4886FF] hover:bg-[#3a6ecc] text-white font-medium px-6 py-3 rounded-[8px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Воспользоваться
          </button>
        </a>
    </section>
  `,

  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-[#038963] bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px] change-bg">

      <img 
        class="absolute top-[0] right-[20px] w-[145px]"  fetchpriority="high"
        src="./assets/banners/logos/pjlywkns8jo97om8ctn14q0k40gyyfdh 1.svg" 
        alt="LIVAN Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[60px] left-[24px]">
        <h1 class="text-[32px] font-bold">LIVAN S6PRO</h1>
        <p class="text-[15px] mb-[20px] font-Medium">Автомобиль, созданный для побед!</p>
        <a href='/auto/livan/s6pro/livan_s6pro_sedan'>
          <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#038963] px-[54px] py-[8px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 319.webp"  fetchpriority="high"
        alt="LIVAN S6PRO" 
        class="absolute bottom-[40px] left-[30%] w-[281px]"
        loading="lazy"
        decoding="async">

      <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Гарантия<br>на 5 лет<br>150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px] change-bg"
        style="background-image: url('./assets/banners/bg/афиша3.png');">
                        <p class="text-[30px] absolute top-[60px] left-[30px] font-extrabold leading-[40px] text-white">Ваш шанс <br>
на одобрение — 95%</p>
        <a href="/loan" class="absolute bottom-[50px] w-[80%]">
          <button
            class="bg-white text-[#179FE3] hover:bg-[#e6f7ff] text-[#179FE3] font-medium px-6 py-3 rounded-[20px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Рассчитать кредит
          </button>
        </a>
    </section>
  `,

  /*html*/
  `
    <section
        class="relative md:hidden bg-cover bg-blue-500 bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px] change-bg">

      <img 
        class="absolute top-[0] right-[20px] w-[145px]"  fetchpriority="high"
        src="./assets/banners/logos/Kaiyi-Logo-500x281 1.svg" 
        alt="Kaiyi Logo"
        loading="lazy"
        decoding="async">

      <div class="flex flex-col absolute top-[60px] left-[24px]">
        <h1 class="text-[32px] font-bold">KAIYI X3 Pro</h1>
        <p class="text-[15px] mb-[20px] font-Medium">Свобода движения. Мощь в каждой детали</p>
        <a href='/auto/kaiyi/x3/kaiyi_x3_cross'>
          <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#3664BF] px-[54px] py-[8px] rounded-full">
            Подробнее
          </button>
        </a>
      </div>

      <img 
        src="./assets/banners/auto/Frame 318.webp"  fetchpriority="high"
        alt="KAIYI X3 Pro" 
        class="absolute bottom-[40px] left-[30%] w-[281px]"
        loading="lazy"
        decoding="async">

      <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/New Feature Gift.svg" fetchpriority="high" alt="Подарок" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб</p>
            </div>
          </div>
        </div>

        <div class="bg-white/10 border border-white rounded-[44px] backdrop-blur-sm px-[20px] py-[8px] shadow-md">
          <div class="flex items-center gap-[10px] w-max">
            <img class="w-[23px]" src="./assets/banners/icons/Vector (12).svg" fetchpriority="high" alt="Гарантия" loading="lazy">
            <div>
              <p class="text-[10px] font-medium">Гарантия<br>на 5 лет<br>150.000 км</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,




];

let currentBannerIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let isAnimating = false;

function initBanners() {
  const bannerContainer = document.getElementById('banner-container');
  bannerContainer.innerHTML = '';
  bannerContainer.className = 'w-full md:h-[850px] relative rounded-2xl overflow-hidden shadow-xl mt-[80px] md:mt-0';
  
  bannerContainer.innerHTML = `
    <div class="banners-wrapper flex w-full h-full transition-transform duration-300 ease-in-out"></div>
  `;
  
  renderBanners();
  setupSwipe();
}

function renderBanners() {
  const bannersWrapper = document.querySelector('.banners-wrapper');
  bannersWrapper.innerHTML = '';
  
  const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;
  
  banners.forEach((banner, index) => {
    const bannerElement = document.createElement('div');
    bannerElement.className = `banner-slide w-full h-full flex-shrink-0 ${index === currentBannerIndex ? 'active' : ''}`;
    bannerElement.innerHTML = banner;
    bannersWrapper.appendChild(bannerElement);
  });
  
  updateBannerPosition();
}

function updateBannerPosition() {
  const bannersWrapper = document.querySelector('.banners-wrapper');
  if (!bannersWrapper) return;
  
  const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;
  bannersWrapper.style.transform = `translateX(-${currentBannerIndex * 100}%)`;
}

function changeBanner(direction) {
  if (isAnimating) return;
  
  const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;
  const len = banners.length;
  
  if (direction === -1 && currentBannerIndex === 0) return;
  if (direction === 1 && currentBannerIndex === len - 1) return;
  
  isAnimating = true;
  currentBannerIndex = currentBannerIndex + direction;
  
  updateBannerPosition();
  
  setTimeout(() => {
    isAnimating = false;
  }, 300);
}

function handleSwipe() {
  if (isAnimating) return;
  
  const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;
  const len = banners.length;
  const threshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (diff > threshold && currentBannerIndex < len - 1) {
    changeBanner(1);
  } else if (diff < -threshold && currentBannerIndex > 0) {
    changeBanner(-1);
  }
}

function setupSwipe() {
  const bannerContainer = document.getElementById('banner-container');
  
  bannerContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  bannerContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  bannerContainer.addEventListener('mousedown', (e) => {
    touchStartX = e.screenX;
    document.addEventListener('mouseup', handleMouseUp);
  });
  
  function handleMouseUp(e) {
    touchEndX = e.screenX;
    handleSwipe();
    document.removeEventListener('mouseup', handleMouseUp);
  }
  
  function handleSwipe() {
    if (isAnimating) return;
    
    const threshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (diff > threshold) {
      changeBanner(1);
    } else if (diff < -threshold) {
      changeBanner(-1);
    }
  }
}

initBanners();

window.addEventListener('resize', () => {
  renderBanners();
});

document.getElementById('prev-banner').addEventListener('click', () => changeBanner(-1));
document.getElementById('next-banner').addEventListener('click', () => changeBanner(1));

let autoChangeInterval = setInterval(() => changeBanner(1), 5000);

document.getElementById('banner-container').addEventListener('mouseenter', () => {
  clearInterval(autoChangeInterval);
});

document.getElementById('banner-container').addEventListener('mouseleave', () => {
  autoChangeInterval = setInterval(() => changeBanner(1), 5000);
});

document.getElementById('banner-container').addEventListener('touchstart', () => {
  clearInterval(autoChangeInterval);
});

document.getElementById('banner-container').addEventListener('touchend', () => {
  autoChangeInterval = setInterval(() => changeBanner(1), 5000);
});