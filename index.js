const inputField = document.getElementById('numberInput');
const messageDiv = document.getElementById('message');

inputField.addEventListener('input', function() {
    const value = parseInt(inputField.value);

    if (isNaN(value)) {
        messageDiv.textContent = ''; // Clear message if input is empty
        return;
    }

    if (value < 0) {
        messageDiv.textContent = 'Enter a positive value';
    } else if (value % 2 === 0) {
        messageDiv.textContent = `Next 3 even numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
    } else {
        messageDiv.textContent = `Next 3 odd numbers: ${value + 2}, ${value + 4}, ${value + 6}`;
    }
});
