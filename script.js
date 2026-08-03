const codes = document.querySelectorAll('.code');

// Focus on first input on page load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Clear current field before entering new digit
            code.value = '';
            // Move to next field after a short delay to allow the digit to be entered
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // Prevent default backspace behavior
            setTimeout(() => {
                // Move to previous field
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }, 10);
        }
    });
});