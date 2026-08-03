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
            // If current field is empty, move to previous field
            if (code.value === '') {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            } else {
                // Clear current field
                code.value = '';
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