const mathFunctions = {
    '+': function add(a, b) {return a + b;}, 
    '-': function subtract(a, b) {return a - b;}, 
    '*': function multiply(a, b) {return a * b;}, 
    '/': function divide(a, b) {return a / b;}, 
    '%': function modulo(a, b) {return a % b;}
}

function operate(first, operator, last) {
    return mathFunctions[operator](first, last)
}

let firstNum = 0;
let operator = '';
let secondNum = 0;


const displayScreen = document.querySelector('#display');
const numbers = document.querySelectorAll('#num');

/* numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayScreen.textContent += number.textContent;
        firstNum += number.textContent;
    })
}); */

document.addEventListener('keydown', (e) => {
    const name = e.key;
    if (name >= 0) {
        displayScreen.textContent += name;
        firstNum += name;
        console.log(firstNum)
    } else if (name in mathFunctions) {
        operator = name;
        console.log(operator)
    }
    
}, false);

