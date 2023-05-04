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

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    alert(`Key pressed ${name} \r\n Key code value: ${code}`);
  }, false);