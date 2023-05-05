const mathFunctions = {
    '+': function add(a, b) {return a + b;}, 
    '-': function subtract(a, b) {return a - b;}, 
    '*': function multiply(a, b) {return a * b;}, 
    '/': function divide(a, b) {return a / b;}, 
    '%': function modulo(a, b) {return a % b;}
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    return mathFunctions[operator](a, b)
}

/* numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayScreen.textContent += number.textContent;
        firstNum += number.textContent;
    })
}); */


let firstNum = null;
let operator = null;
let secondNum = null;


const displayScreen = document.querySelector('#display');
const numbers = document.querySelectorAll('#num');


document.addEventListener('keydown', (e) => {
    const name = e.key;
    console.log(name);
    if (name in mathFunctions && firstNum === null) {
        console.log('No numbers were selected to operate on. Try again');
    } else if (name >= 0 && operator === null) {
        if (firstNum === null) {
            firstNum = 0;
            displayScreen.textContent = '';
        }
        displayScreen.textContent += name;
        firstNum += name;
        console.log(firstNum)

    } else if (name in mathFunctions && firstNum != null) {
        operator = name;
        console.log(operator)
    } else if (name >= 0) {
        if (secondNum === null) {
            secondNum = 0;
            displayScreen.textContent = '';
        }
        displayScreen.textContent += name;
        secondNum += name;
        console.log(secondNum);
    } else if (name === '=' && (firstNum != null && secondNum != null)) {
        firstNum = operate(operator, firstNum, secondNum);
        displayScreen.textContent = firstNum;
    }
}, false);

