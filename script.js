const container = document.querySelector('#container');
const display = document.querySelector('#display');
const numOne = document.querySelector('#one');
const numTwo = document.querySelector('#two');
const numThree = document.querySelector('#three');
const numFour = document.querySelector('#four');
const numFive = document.querySelector('#five');
const numSix = document.querySelector('#six');
const numSeven = document.querySelector('#seven');
const numEight = document.querySelector('#eight');
const numNine = document.querySelector('#nine');
const numZero = document.querySelector('#zero');
const plusBtn = document.querySelector('#add');
const minusBtn = document.querySelector('#subtract');
const timesBnt = document.querySelector('#multiply');
const divisionBtn = document.querySelector('#divide');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('#decimal');

let displayValue = '0';
let currentOperator = '';



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
    if (b === 0)    {
        return "nice try satan"
    }
    return a / b;
}

//Create a new function operate() that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function equals(e)   {
    let secondNum = display.textContent;
    return Number(display.textContent = operate(currentOperator,displayValue,secondNum).toFixed(2),
    displayValue = '0',
    currentOperator = ''
    );
}

function operate(operator, a, b)  {
    return operator(a,b);
}

function operatorAddFunc(e) {
    return ((displayValue =  display.textContent), (currentOperator = add)(display.textContent = '0'));
}

function operatorSubtractFunc(e) {
    return ((displayValue =  display.textContent), (currentOperator = subtract)(display.textContent = '0'));
}

function operatorMultiplyFunc(e) {
    return ((displayValue =  display.textContent), (currentOperator = multiply)(display.textContent = '0'));
}

function operatorDivideFunc(e) {
    return ((displayValue =  display.textContent), (currentOperator = divide)(display.textContent = '0'));
}

function checkLength()  {
    if (display.textContent.length > 9) {
    } return;
}

function clear()    {
    display.textContent = 0
}

function clickFunc(e)   {
    if (display.textContent.length > 8) {
        return;
    }else if (display.textContent === '0')    {
        display.textContent = e.target.textContent;
    }else  return display.textContent += e.target.textContent; 
}

numOne.addEventListener('click',clickFunc);
numTwo.addEventListener('click',clickFunc);
numThree.addEventListener('click',clickFunc);
numFour.addEventListener('click',clickFunc);
numFive.addEventListener('click',clickFunc);
numSix.addEventListener('click',clickFunc);
numSeven.addEventListener('click',clickFunc);
numEight.addEventListener('click',clickFunc);
numNine.addEventListener('click',clickFunc);
numZero.addEventListener('click',clickFunc);
clearBtn.addEventListener('click', clear);
plusBtn.addEventListener('click', operatorAddFunc);
minusBtn.addEventListener('click', operatorSubtractFunc);
timesBnt.addEventListener('click',operatorMultiplyFunc)
divisionBtn.addEventListener('click', operatorDivideFunc)
equalsBtn.addEventListener('click', equals);

