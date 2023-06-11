document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    confirmPasswordInput.addEventListener('paste', function (e) {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain');
        confirmPasswordInput.value = pastedText.repeat(4);
    });
});