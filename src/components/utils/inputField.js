function InitInputsAndButton() {
  const fields = document.querySelectorAll(".important-input-field");
  const button = document.getElementById("order-call");
  const form = document.querySelector("form");

  function validateForm() {
    let isValid = true;

    fields.forEach((field) => {
      if (field.type === "checkbox") {
        if (!field.checked) {
          isValid = false;
        }
      } else if (field.tagName === "SELECT") {
        const selectedOption = field.options[field.selectedIndex];
        if (!field.value || selectedOption?.disabled) {
          isValid = false;
        }
      } else {
        if (!field.value || field.value.trim() === "") {
          isValid = false;
        }
      }
    });

    button.disabled = !isValid;
    button.style.opacity = isValid ? "1" : "0.6";
  }

  fields.forEach((field) => {
    if (field.tagName === "SELECT") {
      const firstOption = field.options;
      if (
        firstOption?.disabled &&
        field.selectedIndex === 0 &&
        field.options.length > 1
      ) {
        field.selectedIndex = 1;
        field.dispatchEvent(new Event("change"));
      }
    }
  });

  fields.forEach((field) => {
    field.addEventListener("input", validateForm);
    field.addEventListener("change", validateForm);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!button.disabled) {
      alert("Спасибо! Ваша заявка отправлена.");
    }
  });

  validateForm();
}

document.addEventListener("DOMContentLoaded", InitInputsAndButton);
