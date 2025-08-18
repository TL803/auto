const slider = document.querySelector(".thick-blue-slider");
const percentValue = document.getElementById("percentValue");
const amountValue = document.getElementById("amountValue");

function formatNumber(num) {
  return num.toLocaleString("ru-RU");
}

if (slider) {
  slider.min = 0;
  slider.max = 90;
  slider.step = 10;
}

export function updateSlider() {
  const value = Number(slider.value);
  const min = Number(slider.min);
  const max = Number(slider.max);
  const percent = ((value - min) / (max - min)) * 100;
  slider.style.setProperty("--fill-percent", `${percent}%`);
  percentValue.textContent = `${Math.round(value)}%`;
  const amount = propertyPrice * (value / 100);

  cards.forEach((card) => {
    const year = card.getAttribute("data-year");
    const payment = Math.round(
      ((propertyPrice - amount) / (12 * year)) * (1 + 0.05 * year)
    ).toLocaleString("ru-RU");
    card.setAttribute("data-payment", payment);

    const cardin = document.querySelector('[data-year="' + year + '"]');
    const paymentValue = cardin.querySelector(".paymentValue");
    if (paymentValue) {
      paymentValue.textContent = payment;
    }
  });

  firstAmount = amount;
  amountValue.textContent = formatNumber(Math.round(amount)) + " ₽";
}

document.addEventListener("DOMContentLoaded", function () {
  //let propertyPrice = 5_000_000;

  if (!slider) {
    console.warn("Ползунок .thick-blue-slider не найден");
    return;
  }
  slider.addEventListener("input", updateSlider);
  updateSlider();
});
