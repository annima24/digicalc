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
    if (b === 0)    {
        return "nice try satan"
    }
    return a / b;
}

//the function that runs when the user clicks on the equals button


function operate(operator, a, b)  {
    return operator(a,b);
}

function clickAdd(e) {
            if (displayValue === '0') {
             return   ((displayValue =  display.textContent), (currentOperator = add)(display.textContent = '0'));
            } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = add, displayValue = display.textContent, checkLength() ;
        }

function clickSubtract(e) {
    if (displayValue === '0') {
     return   ((displayValue =  display.textContent), (currentOperator = subtract)(display.textContent = '0'));
    } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = subtract, displayValue = display.textContent, checkLength();
}

function clickMultiply(e) {
    if (displayValue === '0') {
     return   ((displayValue =  display.textContent), (currentOperator = multiply)(display.textContent = '0'));
    } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = multiply, displayValue = display.textContent, checkLength() ;
}

function clickDivide(e) {
            if (displayValue === '0') {
             return   ((displayValue =  display.textContent), (currentOperator = divide)(display.textContent = '0'));
            } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = divide, displayValue = display.textContent, checkLength() ;
        }

function equals(e)   {
    let secondNum = display.textContent;
    return (display.textContent = operate(currentOperator, displayValue, secondNum),
        displayValue = '0',
        currentOperator = '',
        checkLength()
    );
}

function clear()    {
    displayValue = '0';
    display.textContent = '';
    currentOperator = '';
}

function clickFunc(e)   {
    if (display.textContent.length > 7) {
        return;
    }else if (display.textContent === '0')    {
        display.textContent = e.target.textContent;
    }
    else if (displayValue === display.textContent)   {        
        display.textContent = e.target.textContent;
    }
    else return display.textContent += e.target.textContent;
}
function checkLength()  {
if (display.textContent.length > 8)  {
    return (displayValue = '0', currentOperator = '', display.textContent = ''), alert('that number is like wayyyy too high mann, try again please! ');
}
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
plusBtn.addEventListener('click', clickAdd);
minusBtn.addEventListener('click', clickSubtract);
timesBnt.addEventListener('click',clickMultiply)
divisionBtn.addEventListener('click', clickDivide)
equalsBtn.addEventListener('click', equals);
checkLength();
