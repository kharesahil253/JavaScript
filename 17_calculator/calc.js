const first = document.querySelector('.first');
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
            first.value = currentInput;
        }
    });
});

function clearDisplay() {
    currentInput = '';
    first.value = '';
}

function calculate() {
    try {
        first.value = eval(currentInput);  // Safe execution of expression
        currentInput = first.value;
    } catch (e) {
        first.value = "Error";
        currentInput = '';
    }
}
