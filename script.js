const codes = document.querySelectorAll('.code');

// Focus on first input on page load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('input', (e) => {
        // Only allow single digit
        if (code.value.length > 0) {
            // Move to next field if not the last one
            if (idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
        }
    });

    code.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            // Clear current field
            code.value = '';
            // Always move to previous field when backspace is pressed
            if (idx > 0) {
                codes[idx - 1].focus();
            }
        }
    });

    // Prevent non-numeric input
    code.addEventListener('keypress', (e) => {
        if (e.key < '0' || e.key > '9') {
            e.preventDefault();
        }
    });
});