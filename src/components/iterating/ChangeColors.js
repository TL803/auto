export function initColorChanger() {
    const colorsContainer = document.getElementById("colors");
    const carImage = document.getElementById("carImage");

    const changeColorBackButtons = document.querySelectorAll(".ChangeColorBack");
    const changeColorFrontButtons =
        document.querySelectorAll(".ChangeColorFront");

    // Пересоздаём разметку
    colorsContainer.innerHTML = differentColors
        .map(
            (item) => `
      <div>
        <div 
          class="md:w-16 md:h-14 w-[42px] h-[42px] rounded-[12px] md:rounded-[14px] cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition"
          style="background-color: ${item.color};"
          data-img="${item.img}"
          title="Цвет: ${item.color}">
        </div>
      </div>
    `
        )
        .join("");

    // Удаляем старые обработчики, чтобы избежать дублирования
    colorsContainer.replaceWith(colorsContainer.cloneNode(true));
    const newColorsContainer = document.getElementById("colors");
    newColorsContainer.addEventListener("click", (e) => {
        const colorBlock = e.target.closest("[data-img]");
        if (colorBlock) {
            carImage.src = colorBlock.dataset.img;
        }
    });

    // Удаляем старые обработчики со стрелок
    changeColorBackButtons.forEach((button) => {
        const newButton = button.cloneNode(true);
        button.replaceWith(newButton);
        newButton.addEventListener("click", () => changeColor(-1));
    });

    changeColorFrontButtons.forEach((button) => {
        const newButton = button.cloneNode(true);
        button.replaceWith(newButton);
        newButton.addEventListener("click", () => changeColor(1));
    });

    // Функция определения индекса
    function getCurrentIndex() {
        const currentSrc = carImage.src.split("/").pop();
        const decodedSrc = decodeURIComponent(currentSrc);

        return differentColors.findIndex((item) => {
            const imgFilename = item.img.split("/").pop();
            return imgFilename === decodedSrc;
        });
    }

    // Функция смены цвета
    function changeColor(step) {
        const currentIndex = getCurrentIndex();
        if (currentIndex === -1) return;

        const newIndex =
            (currentIndex + step + differentColors.length) % differentColors.length;
        carImage.src = differentColors[newIndex].img;
    }
}

initColorChanger();
