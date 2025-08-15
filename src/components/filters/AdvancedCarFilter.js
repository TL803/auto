        document.addEventListener('DOMContentLoaded', function () {
            const brandSelect = document.querySelector('select[name="brand"]');
            const driveSelect = document.querySelector('select[name="drive_type"]');
            const bodySelect = document.querySelector('select[name="body_type"]');
            const priceFromInput = document.querySelector('input[name="price_from"]');
            const priceToInput = document.querySelector('input[name="price_to"]');

            function disableAll() {
                driveSelect.disabled = true;
                bodySelect.disabled = true;
                priceFromInput.disabled = true;
                priceToInput.disabled = true;

                driveSelect.value = "";
                bodySelect.value = "";
                priceFromInput.value = "";
                priceToInput.value = "";
            }

            disableAll();

            brandSelect.addEventListener('change', function () {
                if (this.value) {
                    driveSelect.disabled = false;
                } else {
                    disableAll();
                }
            });

            driveSelect.addEventListener('change', function () {
                if (this.value) {
                    bodySelect.disabled = false;
                } else {
                    bodySelect.disabled = true;
                    bodySelect.value = "";
                    priceFromInput.disabled = true;
                    priceToInput.disabled = true;
                    priceFromInput.value = "";
                    priceToInput.value = "";
                }
            });

            bodySelect.addEventListener('change', function () {
                if (this.value) {
                    priceFromInput.disabled = false;
                    priceToInput.disabled = false;
                } else {
                    priceFromInput.disabled = true;
                    priceToInput.disabled = true;
                    priceFromInput.value = "";
                    priceToInput.value = "";
                }
            });
        });