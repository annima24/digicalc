const container = document.querySelector('#container');
const display = document.querySelector('#display');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('#decimal');
const numbers = document.querySelectorAll('.numbers').forEach(btn =>    {
    btn.addEventListener('click', clickFunc);
})
const operators = document.querySelectorAll('.operators').forEach(btn =>    {
    btn.addEventListener('click', clickOperator);
})
let displayValue = '';
let currentOperator = '';
//these four functions are the basic math functions. takes two numbers performs an operation and then returns the result
function add(a,b)  {
    return Number(a) + Number(b);
}

function subtract(a,b)  {
    return a - b;
}

function multiply(a,b)  {
    return a * b;
}

function divide(a,b)  {
    if (b === '0')    {
        return alert("nice try satan"), clear();
    }
    return a / b;
}
//this is the actual function that takes the operator and two values and performs an operation on them

function operate(operator, a, b)  {
        return operator(a,b);

}

function returnOperator(e)   {
    if (e.target.id === 'add') {
        return currentOperator = add;
    } else if (e.target.id === 'subtract') {
        return currentOperator = subtract;
    } else if (e.target.id === 'multiply') {
        return currentOperator = multiply;
    } else if (e.target.id === 'divide') {
        return currentOperator = divide;
    }
}

function clickOperator(e) {
            if (displayValue === '') {
                returnOperator(e);             
             return   ((displayValue =  display.textContent));
            } else 
                return display.textContent = operate(currentOperator,displayValue, display.textContent),returnOperator(e), displayValue = display.textContent;
        }

function equals(e)   {
    let secondNum = display.textContent;
    return (display.textContent = operate(currentOperator, displayValue, secondNum),
        displayValue = '',
        currentOperator = '',
        checkLength()
    );
}

function clear()    {
    displayValue = '';
    display.textContent = '';
    currentOperator = '';
}

//handles putting numbers into the display

function clickFunc(e)   {
    if (display.textContent.length > 7) {
        return;
    }else if (display.textContent === displayValue)    {
        display.textContent = e.target.textContent;
    }
    else if (displayValue === display.textContent)   {        
        display.textContent = e.target.textContent;
    }
    else return display.textContent += e.target.textContent;
}
function checkLength()  {
if (display.textContent.length > 8)  {
    return (displayValue = '0', currentOperator = '', display.textContent = ''), alert('woahhh, like tone it down a little like, k brahh? like lets try andkeep the numbers on the screen. im a javascript calculator not a doctor');
}
}

clearBtn.addEventListener('click', clear);
equalsBtn.addEventListener('click', equals);
