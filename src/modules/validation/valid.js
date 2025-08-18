// TODO: временное решение, в будущем будет переписанно

document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let valid = true;
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const agreement = document.getElementById('agreement').checked;

        document.getElementById('fullName').classList.remove('border-red-500');
        document.getElementById('phone').classList.remove('border-red-500');
        document.getElementById('agreement').classList.remove('ring-2', 'ring-red-500');

        if (!fullName || fullName.length < 2 || !/^[а-яА-ЯёЁ\s]+$/.test(fullName)) {
            document.getElementById('fullName').classList.add('border-red-500');
            alert('Пожалуйста, введите корректное ФИО (только кириллица).');
            valid = false;
        }

        const phoneRegex = /^[\+]?[78][\s\-\(\)]?[\d\s\-\(\)]{9,10}$/;
        if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
            document.getElementById('phone').classList.add('border-red-500');
            alert('Пожалуйста, введите корректный номер телефона (например, +7 (999) 999-99-99).');
            valid = false;
        }

        if (!agreement) {
            document.getElementById('agreement').classList.add('ring-2', 'ring-red-500');
            alert('Вы должны дать согласие на обработку персональных данных.');
            valid = false;
        }
        if (valid) {
            alert('Форма успешно отправлена!');
        }
    });