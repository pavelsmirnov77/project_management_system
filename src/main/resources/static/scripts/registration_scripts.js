//Скрипт против копирования пароля в поле для подтверждения
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    confirmPasswordInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain');
        confirmPasswordInput.value = pastedText.repeat(4);
    });
});

// Скрипт для проверки совпадения паролей
document.getElementById('confirmPassword').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = this.value;

    if (password !== confirmPassword) {
        this.setCustomValidity('Пароли не совпадают');
    } else {
        this.setCustomValidity('');
    }
});

// Скрипт для валидации email
document.getElementById('email').addEventListener('input', function() {
    var email = this.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        this.setCustomValidity('Неправильный формат email');
    } else {
        this.setCustomValidity('');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);

        passwordInput.setAttribute('data-content', getStrengthMessage(strength));
        $(passwordInput).popover('show');
        if (strength === "weak") {
            this.setCustomValidity('Пароль ненадёжный!');
        } else {
            this.setCustomValidity('');
        }
    });

    function checkPasswordStrength(password) {
        var strength = 0;

        if (password.length >= 8) {
            strength += 1;
        }

        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            strength += 1;
        }

        if (/\d/.test(password)) {
            strength += 1;
        }

        if (/[\W_]/.test(password)) {
            strength += 1;
        }

        if (strength <= 2) {
            return 'weak';
        } else if (strength === 3) {
            return 'medium';
        } else {
            return 'strong';
        }
    }
    function getStrengthMessage(strength) {
        if (strength === 'weak') {
            return 'Слабый пароль';
        } else if (strength === 'medium') {
            return 'Средний пароль';
        } else if (strength === 'strong') {
            return 'Сложный пароль';
        } else {
            return '';
        }
    }
});


// Скрипт для автозаполнения формы
document.getElementById('username').setAttribute('autocomplete', 'name');
document.getElementById('email').setAttribute('autocomplete', 'email');
document.getElementById('dateOfBirth').setAttribute('autocomplete', 'bday');
document.getElementById('phoneNumber').setAttribute('autocomplete', 'tel');
