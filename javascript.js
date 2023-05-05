const mathFunctions = {
    '+': function add(a, b) {return a + b;}, 
    '-': function subtract(a, b) {return a - b;}, 
    '*': function multiply(a, b) {return a * b;}, 
    'x': function multiply(a, b) {return a * b;}, 
    '/': function divide(a, b) {return a / b;}, 
    '÷': function divide(a, b) {return a / b;}, 
    '%': function modulo(a, b) {return a % b;}
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    return mathFunctions[operator](a, b)
}

let firstNum = null;
let operator = null;
let secondNum = null;

const displayScreen = document.querySelector('#display');

document.addEventListener('keydown', (e) => {
    const name = e.key;
    if (name in mathFunctions && firstNum === null) {
        alert('No numbers were selected to operate on. Try again');
    } else if (name >= 0 && operator === null) {
        if (firstNum === null) {
            firstNum = 0;
            displayScreen.textContent = '';
        }
        displayScreen.textContent += name;
        firstNum += name;
    } else if (name in mathFunctions && firstNum != null) {
        operator = name;
    } else if (name >= 0) {
        if (secondNum === null) {
            secondNum = 0;
            displayScreen.textContent = '';
        }
        displayScreen.textContent += name;
        secondNum += name;
    } else if (name === '=' && (firstNum != null && secondNum != null)) {
        firstNum = operate(operator, firstNum, secondNum);
        secondNum = null;
        operator = null;
        displayScreen.textContent = firstNum;
    }
}, false);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let btn = button.textContent
        if (btn in mathFunctions && firstNum === null) {
            alert('No numbers were selected to operate on. Try again');
        } else if (btn >= 0 && operator === null) {
            if (firstNum === null) {
                firstNum = 0;
                displayScreen.textContent = '';
            }
            displayScreen.textContent += btn;
            firstNum += btn;
        } else if (btn in mathFunctions && firstNum != null) {
            operator = btn;
        } else if (btn >= 0) {
            if (secondNum === null) {
                secondNum = 0;
                displayScreen.textContent = '';
            }
            displayScreen.textContent += btn;
            secondNum += btn;
        } else if (btn === '=' && (firstNum != null && secondNum != null)) {
            firstNum = operate(operator, firstNum, secondNum);
            displayScreen.textContent = firstNum;
        }
    })
})

const clearAll = document.querySelector('#ac');
clearAll.addEventListener('click', () => {
    displayScreen.textContent = '0';
    firstNum = null;
    secondNum = null;
    operator = null;
});

const clear = document.querySelector('#c');
clear.addEventListener('click', () => {
        let output = displayScreen.textContent.toString();
        output = output.slice(0, -1);
        firstNum = Number(output);
        displayScreen.textContent = Number(output);

})

const point = document.querySelector('#point');
point.addEventListener('click', () => {
    alert('Adding decimal point will only be available on the next version. We\'re sorry for the inconvenience.')
})