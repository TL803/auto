const colorsContainer = document.getElementById('colors');
const carImage = document.getElementById('carImage');

const changeColorBackButtons = document.querySelectorAll('.ChangeColorBack');
const changeColorFrontButtons = document.querySelectorAll('.ChangeColorFront');

const differentColors = [
    { color: "#FFFFFF", img: "./assets/car_white.png" },
    { color: "#FFFFFF", img: "./assets/car_white.png" },

];

colorsContainer.innerHTML = differentColors.map(item => `
    <div>
        <div 
            class="md:w-16 md:h-14 w-[42px] h-[42px] rounded-[12px] md:rounded-[14px] cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition"
            style="background-color: ${item.color};"
            data-img="${item.img}"
            title="Цвет: ${item.color}">
        </div>
    </div>
`).join('');

colorsContainer.addEventListener('click', (e) => {
    const colorBlock = e.target.closest('[data-img]');
    if (colorBlock) {
        carImage.src = colorBlock.dataset.img;
    }
});

function getCurrentIndex() {
    const currentSrc = carImage.src.split('/').pop();
    const decodedSrc = decodeURIComponent(currentSrc);

    return differentColors.findIndex(item => {
        const imgFilename = item.img.split('/').pop();
        return imgFilename === decodedSrc;
    });
}

function changeColor(step) {
    const currentIndex = getCurrentIndex();

    if (currentIndex === -1) return;

    const newIndex = (currentIndex + step + differentColors.length) % differentColors.length;
    carImage.src = differentColors[newIndex].img;
}

changeColorBackButtons.forEach(button => {
    button.addEventListener('click', () => changeColor(-1));
});

changeColorFrontButtons.forEach(button => {
    button.addEventListener('click', () => changeColor(1));
});