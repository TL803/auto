import { initColorChanger } from "./changeColors.js";
import { updateSlider } from "./slider.js";

const brandSelect = document.querySelector('select[name="brand"]');
const modelSelect = document.querySelectorAll(".custom-select.brand")[1];
const trimSelect = document.querySelectorAll(".custom-select.brand")[2];
const carSection = document.getElementById("carSection");
const applyButton = document.getElementById("applyButton");

const slug = window.location.pathname.split("/").filter(Boolean).pop();

console.log(slug);

modelSelect.disabled = true;
trimSelect.disabled = true;

function checkBrandFilled() {
  if (brandSelect.value) {
    modelSelect.innerHTML = '<option value="">Модель</option>';
    trimSelect.innerHTML = '<option value="">Кузов</option>';
    trimSelect.disabled = true;
    modelSelect.disabled = false;
    const modelsObj = datatab.marks[brandSelect.value];
    if (modelsObj) {
      Object.keys(modelsObj).forEach((modelName) => {
        const option = new Option(modelName, modelName);
        modelSelect.add(option);
      });
    }
  } else {
    modelSelect.disabled = true;
    trimSelect.disabled = true;
    modelSelect.value = "";
    trimSelect.value = "";
  }
}

function checkModelFilled() {
  if (modelSelect.value) {
    trimSelect.innerHTML = '<option value="">Кузов</option>';
    trimSelect.disabled = false;
    const mark = datatab.marks[brandSelect.value];
    const complectsObj = mark[modelSelect.value];
    if (complectsObj) {
      Object.keys(complectsObj).forEach((complect) => {
        const option = new Option(complect, complect);
        trimSelect.add(option);
      });
    }
  } else {
    trimSelect.disabled = true;
    trimSelect.value = "";
  }
}

brandSelect.addEventListener("change", checkBrandFilled);
modelSelect.addEventListener("change", checkModelFilled);
applyButton.addEventListener("click", function () {
  if (brandSelect.value && modelSelect.value && trimSelect.value) {
    const mark = datatab.marks[brandSelect.value];
    const model = mark[modelSelect.value];
    differentColors = Array.from(model[trimSelect.value].colors);
    //console.error(model[trimSelect.value].colors);

    updateCar();

    if (slug == "loan") {
      updateSlider();
    }

    carSection.classList.remove("hidden");
    carSection.classList.add("animate-fade-in");
  }
});

function updateCar() {
  const mark = datatab.marks[brandSelect.value];
  const model = mark[modelSelect.value];
  const bodyValue = trimSelect.value;
  const firstImage = model[trimSelect.value].startImage;
  const velocity = document.getElementById("velocity");
  const acceleration = document.getElementById("acceleration");
  const consumption = document.getElementById("consumption");
  const power = document.getElementById("power");
  // const bodyType = document.getElementById('bodyType');
  const offficialPrice = document.getElementById("offPrice");
  const salonPrice = document.getElementById("myPrice");
  const discount = document.getElementById("discount");

  if (bodyValue) {
    const bodyText = trimSelect.options[trimSelect.selectedIndex].text;
    carTitle.textContent = `${bodyText}`;
  }
  if (velocity) {
    velocity.textContent = `${model[trimSelect.value].maxspeed} км/ч`;
  }
  if (acceleration) {
    acceleration.textContent = `${model[trimSelect.value].minacceleration} с`;
  }
  if (consumption) {
    consumption.textContent = `${model[trimSelect.value].minConsume} л/100 км`;
  }
  if (power) {
    power.textContent = `${model[trimSelect.value].maxpower} л.с.`;
  }
  if (offficialPrice) {
    offficialPrice.textContent = `от ${model[trimSelect.value].oldPrice} ₽`;
  }
  if (salonPrice) {
    salonPrice.textContent = `от ${model[trimSelect.value].price.toLocaleString(
      "ru-RU"
    )} ₽`;
  }
  if (discount) {
    discount.textContent = `${model[trimSelect.value].discount} %`;
  }
  if (firstImage) {
    carImage.src = `${firstImage}`;
  }

  if (slug == "loan") {
    propertyPrice = model[trimSelect.value].price;

    cards.forEach((card) => {
      const year = card.getAttribute("data-year");
      const payment = Math.round(
        (propertyPrice / (12 * year)) * (1 + 0.05 * year)
      ).toLocaleString("ru-RU");
      card.setAttribute("data-payment", payment);

      const cardin = document.querySelector('[data-year="' + year + '"]');
      const paymentValue = cardin.querySelector(".paymentValue");
      if (paymentValue) {
        paymentValue.textContent = payment;
      }
    });
  }

  initColorChanger();
}

const style = document.createElement("style");
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    select:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);
