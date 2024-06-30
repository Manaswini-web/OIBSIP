// scripts.js
const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendToDisplay(value) {
    display.textContent += value;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
