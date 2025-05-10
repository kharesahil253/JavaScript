const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.buttons button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            currentInput += value;
            input.value = currentInput;
        }
    });
});

function clearDisplay() {
    currentInput = '';
    input.value = '';
}

function calculate() {
    try {
        input.value = eval(currentInput);
        currentInput = first.value;
    } catch (e) {
        input.value = "Error";
        currentInput = '';
    }
}
