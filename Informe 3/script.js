let currentInput = '';
let previousInput = '';
let operation = null;
function appendNumber(number) {
   currentInput += number;
   updateDisplay();
}
function setOperation(op) {
   if (currentInput === '') return;
   if (previousInput !== '') calculate();
   operation = op;
   previousInput = currentInput;
   currentInput = '';
}
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}