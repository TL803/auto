const bannersData = [
    /* html */

    `
    <div class="w-full h-full relative"
         style="background-image: url('./assets/banners/Rectangle 2 (4).png'); 
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
      <button class="bg-[#4886FF] open-modal-btn rounded-[16px] text-medium text-white text-[32px] md:text-[36px]  px-8 md:px-[100px] py-[24px] transition absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px] hover:bg-blue-700">
        Подобрать авто
      </button>
    </div>
  `,

    /* html */
    `
    <div class="w-full h-full relative"
         style="background-image: url('./assets/banners/bg/афиша (1).png'); 
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
      <a href="./TradeIn.html">
      <button class="bg-[#4886FF] rounded-[16px] text-medium text-white text-[32px] md:text-[36px]  px-8 md:px-[100px] py-[24px] transition absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px] hover:bg-blue-700">
        Воспользоваться
      </button>
      </a>
    </div>
  `,
    /* html */

    `
    <div class="w-full h-full relative"
         style="background-image: url('./assets/banners/bg/Rectangle 2 (5).png'); 
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 20px;">
    <a href="./carLoan.html"> 
      <button class="bg-[#4886FF] rounded-[16px] text-medium text-white text-[32px] md:text-[36px]  px-8 md:px-[100px] py-[24px] transition absolute right-6 md:right-[60px] bottom-6 md:bottom-[60px] hover:bg-blue-700">
        Рассчитать кредит  
      </button>
      </a>
    </div>
  `,
    /* html */

    `
<div 
  class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-blue-500 text-white overflow-hidden"
  style="background-image: url('./assets/banners/car-banner.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

  <img class="absolute top-[15px] right-[100px]" src="./assets/banners/logos/Kaiyi-Logo-500x281 1.svg"/>
  
  <div class="flex flex-col absolute top-[160px] left-[90px]">
    <h1 class="text-[64px] font-bold">KAIYI X3 Pro</h1>
    <p class="text-[36px] mb-[52px] font-Medium">Свобода движения. Мощь в каждой детали</p>
    <a href='https://db.site-srk.ru/auto/kaiyi/x3/kaiyi_x3_cross'>
    <button class="bg-white text-[36px] cursor-pointer w-max  font-bold text-[#3664BF] px-[96px] py-[24px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/Frame 318.png" alt="KAIXI X3 Pro" class="absolute bottom-0 left-[30%]">

  <div class="flex flex-col gap-4 absolute right-0 top-[150px]">
    <div class="bg-white/10 
            border border-white 
            border-r-0 
            rounded-tl-[44px] 
            rounded-bl-[44px]
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4">
        <img class="ml-[30px]" src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class=" text-[24px] font-regular">Доп оборудование<br> в подарок на 100.000 руб</p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
            border-r-0 
            rounded-tl-[44px] 
            rounded-bl-[44px]
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4">
        <img class="ml-[30px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class=" text-[24px] font-regular">Гарантия <br>
на 5 лет /150.000 км   </p>
        </div>
      </div>
    </div>
</div>
  `,



    /* html */
    `
<div 
  class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-[#038963] text-white overflow-hidden"
  style="background-image: url('./assets/banners/car-banner.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

  <img class="absolute top-[15px] right-[100px]" src="./assets/banners/logos/pjlywkns8jo97om8ctn14q0k40gyyfdh 1.svg"/>
  
  <div class="flex flex-col absolute top-[160px] left-[90px]">
    <h1 class="text-[64px] font-bold">LIVAN S6PRO</h1>
    <p class="text-[36px] mb-[52px] font-Medium">Автомобиль, созданный для побед!</p>
    <a href='https://db.site-srk.ru/auto/livan/s6pro/livan_s6pro_sedan'>
    <button class="bg-white text-[36px] cursor-pointer w-max  font-bold text-[#038963] px-[96px] py-[24px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/Frame 319.png" alt="KAIXI X3 Pro" class="absolute bottom-[70px] right-[1%]">

  <div class="flex w-full px-[40px] justify-between gap-4 absolute right-0 bottom-[50px]">
    <div class="bg-white/10 
            border border-white 
            rounded-[44px] 
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4 w-[622px]">
        <img class="ml-[30px] " src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class=" text-[24px] font-regular">Доп оборудование в подарок  на 50.000 руб   </p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
rounded-[44px] 
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4 w-[622px]">
        <img class="ml-[30px] w-[70px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class=" text-[24px] font-regular">Гарантия  на 5 лет /150.000 км</p>
        </div>
      </div>
    </div>
</div>
  `,

    /* html */
    `
<div 
  class="w-full h-full relative flex items-center justify-between p-6 md:p-12 bg-[#038963] text-white overflow-hidden"
  style="background-image: url('./assets/banners/bg/Баннер (1).png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

  <img class="absolute top-[15px] right-[100px]" src="./assets/banners/logos/baic 1.svg"/>
  
  <div class="flex flex-col absolute top-[160px] left-[90px]">
    <h1 class="text-[64px] font-bold">BAIC X55</h1>
    <p class="text-[36px] mb-[52px] font-Medium">Кредит от 0,01%</p>
    <a href='https://db.site-srk.ru/auto/baic/x55/baic_x55_cross'>
    <button class="bg-white text-[36px] cursor-pointer w-max  font-bold text-[#F88446] px-[96px] py-[24px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/snapedit_1753096196648 1.png" alt="KAIXI X3 Pro" class="absolute w-[1101px] bottom-[30px] right-[-20px]">

  <div class="flex  px-[40px]  gap-4 absolute left-0 bottom-[50px]">
    <div class="bg-white/10 
            border border-white 
            rounded-[44px] 
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4 ">
        <img class="ml-[30px] w-[38px]" src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class=" text-[15px] font-regular">Доп оборудование<br> в подарок  на 50.000 руб   </p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
rounded-[44px] 
            backdrop-blur-sm 
            p-4 
            shadow-md">
      <div class="flex items-center gap-4">
        <img class="ml-[30px] w-[38px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class=" text-[15px] font-regular">Гарантия<br> на 5 лет /150.000 км</p>
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
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg"
        style="background-image: url('./assets/banners/Rectangle 2 (4).png');">
        <div class="absolute top-[50px] left-[10px] flex flex-col items-start max-w-xs">
            <h2 class="text-white inline-block px-[5px] py-1 font-bold mb-4 text-[20px] rounded-[12px] bg-red-500">
                Горячие скидки<br> на автомобили!
            </h2>
            <h2 class="text-white inline-block px-4 py-2 font-bold text-3xl mb-6 rounded-[12px] bg-red-500">
                До 40%
            </h2>
        </div>
        <button
            class="bg-[#4886FF] open-modal-btn absolute bottom-[50px] hover:bg-[#3a6ecc]  w-[80%] text-white font-medium px-6 py-3 rounded-[8px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Выбрать автомобиль
        </button>
    </section>
    `,
    /*html*/
    `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg"
        style="background-image: url('./assets/banners/bg/афиша (1).png');">
        <div class="absolute top-[50px] left-[10px] flex flex-col items-start max-w-xs">
            <h2 class="text-white inline-block px-[5px] py-1 font-bold mb-4 text-[20px] rounded-[12px] bg-red-500">
                Trade-in
            </h2>
            <h2 class="text-white inline-block px-4 py-2 font-bold text-3xl mb-6 rounded-[12px] bg-red-500">
                Выгода до 200 тысяч
            </h2>
        </div>
        <button
        class="bg-[#4886FF] absolute bottom-[50px] hover:bg-[#3a6ecc]  w-[80%] text-white font-medium px-6 py-3 rounded-[8px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <a href="./TradeIn.html">
            Воспользоваться
            </a>
        </button>
    </section>
    `,
    /*html*/
    `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg"
        style="background-image: url('./assets/banners/adaptive/Rectangle 52 (1).png');">

        <button
        class="bg-white text-[#179FE3] absolute bottom-[50px] hover:bg-[#3a6ecc]  w-[80%] text-white font-medium px-6 py-3 rounded-[20px] shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <a href="./carLoan.html"> 
            Воспользоваться
            </a>
        </button>
    </section>
    `,
    /*html*/
    `
    <section
        class="relative md:hidden bg-cover bg-blue-500 bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg">

  <img class="absolute top-[0] right-[20px] w-[145px]" src="./assets/banners/logos/Kaiyi-Logo-500x281 1.svg"/>
  
  <div class="flex flex-col absolute top-[60px] left-[24px]">
    <h1 class="text-[32px] font-bold">KAIYI X3 Pro</h1>
    <p class="text-[15px] mb-[20px] font-Medium">Свобода движения. Мощь в каждой детали</p>
    <a href='https://db.site-srk.ru/auto/kaiyi/x3/kaiyi_x3_cross'>
    <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#3664BF] px-[54px] py-[8px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/Frame 318.png" alt="KAIXI X3 Pro" class="absolute bottom-[40px] left-[30%] w-[281px]">

  <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
    <div class="bg-white/10 
            border border-white 
            rounded-[44px] 
            backdrop-blur-sm 
            px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб   </p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
rounded-[44px] 
            backdrop-blur-sm 
           px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class="text-[10px] font-medium">Гарантия<br>  на 5 лет<br> 150.000 км</p>
        </div>
      </div>
    </div>
  
    </section>
    `,

      /*html*/
    `
    <section
        class="relative md:hidden bg-cover bg-[#038963] bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg">

  <img class="absolute top-[0] right-[20px] w-[145px]" src="./assets/banners/logos/pjlywkns8jo97om8ctn14q0k40gyyfdh 1.svg"/>
  
  <div class="flex flex-col absolute top-[60px] left-[24px]">
    <h1 class="text-[32px] font-bold">LIVAN S6PRO</h1>
    <p class="text-[15px] mb-[20px] font-Medium">Автомобиль, созданный для побед!</p>
    <a href='https://db.site-srk.ru/auto/livan/s6pro/livan_s6pro_sedan'>
    <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#038963] px-[54px] py-[8px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/Frame 319.png" alt="KAIXI X3 Pro" class="absolute bottom-[40px] left-[30%] w-[281px]">

  <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
    <div class="bg-white/10 
            border border-white 
            rounded-[44px] 
            backdrop-blur-sm 
            px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб   </p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
rounded-[44px] 
            backdrop-blur-sm 
           px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class="text-[10px] font-medium">Гарантия<br>  на 5 лет<br> 150.000 км</p>
        </div>
      </div>
    </div>
  
    </section>
    `,
          /*html*/
    `
    <section
        class="relative md:hidden bg-cover bg-center w-full h-[400px] flex items-center justify-center text-white rounded-[14px]  change-bg"
        style="background-image: url('./assets/banners/bg/Баннер (1).png'); background-size: cover; background-position: center; background-repeat: no-repeat;">

  <img class="absolute top-[0] right-[20px] w-[145px]" src="./assets/banners/logos/baic 1.svg"/>
  
  <div class="flex flex-col absolute top-[60px] w-full text-center">
    <h1 class="text-[32px] font-bold">BAIC X55</h1>
    <p class="text-[15px] mb-[20px] font-Medium">Кредит от 0,01%</p>
    <a href='https://db.site-srk.ru/auto/kaiyi/x3/kaiyi_x3_cross'>
    <button class="bg-white text-[14px] cursor-pointer w-max font-bold text-[#DD7035] px-[54px] py-[8px] rounded-full">
      Подробнее
    </button>
    </a>
  </div>

  <img src="./assets/banners/auto/snapedit_1753096196648 1.png" alt="KAIXI X3 Pro" class="absolute bottom-[60px] left-[10%] w-[281px]">

  <div class="flex w-full px-[20px] justify-between gap-4 absolute right-0 bottom-[20px]">
    <div class="bg-white/10 
            border border-white 
            rounded-[44px] 
            backdrop-blur-sm 
            px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/New Feature Gift.svg"/>
        <div>
          <p class="text-[10px] font-medium">Доп оборудование<br> в подарок<br> на 50.000 руб   </p>
        </div>
      </div>
    </div>

    <div class="bg-white/10 
            border border-white 
rounded-[44px] 
            backdrop-blur-sm 
           px-[20px] 
            py-[8px] 
            shadow-md">
      <div class="flex items-center gap-[10px] w-max">
        <img class=" w-[23px]" src="./assets/banners/icons/Vector (12).svg"/>
        <div>
          <p class="text-[10px] font-medium">Гарантия<br>  на 5 лет<br> 150.000 км</p>
        </div>
      </div>
    </div>
  
    </section>
    `,
]

let currentBannerIndex = 0;

function initBanners() {
    const bannerContainer = document.getElementById('banner-container');
    bannerContainer.innerHTML = '';
    bannerContainer.className = 'w-full md:h-[850px] relative rounded-2xl overflow-hidden shadow-xl mt-[80px] md:mt-0';
    renderBanner();
}

function renderBanner() {
    const bannerContainer = document.getElementById('banner-container');
    bannerContainer.innerHTML = '';

    const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;

    const safeIndex = Math.min(currentBannerIndex, banners.length - 1);

    bannerContainer.innerHTML = banners[safeIndex];
}

function changeBanner(direction) {
    const banners = window.innerWidth >= 1601 ? bannersData : adaptiveBannersData;
    const len = banners.length;

    currentBannerIndex = (currentBannerIndex + direction + len) % len;
    renderBanner();
}

initBanners();

window.addEventListener('resize', renderBanner);

document.getElementById('prev-banner').addEventListener('click', () => changeBanner(-1));
document.getElementById('next-banner').addEventListener('click', () => changeBanner(1));