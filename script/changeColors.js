const colorsContainer = document.getElementById('colors');
const carImage = document.getElementById('carImage');

const differentColors = [
    { color: "#FFFFFF", img: "./assets/car_white.png" },
    { color: "#161313", img: "./assets/car_black.png" },
    { color: "#8d1d2c", img: "./assets/car_Bard.png" },
    { color: "#154889", img: "./assets/car_purple.png" },
    { color: "#444e4e", img: "./assets/car_pink.png" },
    { color: "#c3c4c4", img: "./assets/car_cyan.png" },
    { color: "#706c62", img: "./assets/car_yellow.png" },
];

colorsContainer.innerHTML = '';

differentColors.forEach(item => {
    const colorDiv = document.createElement('div');
    colorDiv.innerHTML = `
        <div 
            class="md:w-16 md:h-14 w-[42px] h-[42px] rounded-[12px] md:rounded-[14px] cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition"
            style="background-color: ${item.color};"
            data-img="${item.img}"
            title="Цвет: ${item.color}">
        </div>
    `;
    colorsContainer.appendChild(colorDiv);
});

colorsContainer.addEventListener('click', (e) => {
    const colorBlock = e.target.closest('[data-img]');
    if (colorBlock) {
        const imgSrc = colorBlock.dataset.img;
        carImage.src = imgSrc;
    }
});