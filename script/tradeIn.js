document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById('checkbox');
    const tradeinForm = document.getElementById('tradein-form');

    if (checkbox && tradeinForm) {
        checkbox.addEventListener('change', function () {
            tradeinForm.classList.toggle('hidden', !this.checked);
        });
    }
});