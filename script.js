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
    if (b === '0')    {
        return alert("nice try satan"), clear();
    }
    return a / b;
}


//this is the actual function that takes the operator and two values and performs an operation on them

function operate(operator, a, b)  {
    if (operator === 'add') {
        return add(a,b), currentOperator = add;
    } else if (operator === 'subtract') {
        return subtract(a,b) , currentOperator = subtract;
    }   else if (operator === 'multiply') {
        return multiply(a,b) , currentOperator = multiply;
    }   else if (operator === 'divide') {
        return divide(a,b) , currentOperator = divide;
    }
}

function returnOperator(e)   {
    if (e.target.id === 'add') {
        currentOperator(e)
    }
}


//these next four functions are what happens when a user clicks an operator. if the displayValue variable is empty it logs whatever is in the display as the displayValue to be used in the second half of the equation.  if the display != 0 then you operate using the stored variables and the textContent of the display, then checks length to make sure its not too long.

function clickOperator(e) {
            if (displayValue === '0') {                
             return   ((displayValue =  display.textContent));
            } else return display.textContent = operate(currentOperator,displayValue, display.textContent), displayValue = display.textContent, checkLength() ;
        }

// function clickSubtract(e) {
//     if (displayValue === '0') {
//      return   ((displayValue =  display.textContent), (currentOperator = subtract));
//     } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = subtract, displayValue = display.textContent, checkLength();
// }

// function clickMultiply(e) {
//     if (displayValue === '0') {
//      return   ((displayValue =  display.textContent), (currentOperator = multiply));
//     } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = multiply, displayValue = display.textContent, checkLength() ;
// }

// function clickDivide(e) {
//             if (displayValue === '0') {
//              return   ((displayValue =  display.textContent), (currentOperator = divide));
//             } else return display.textContent = operate(currentOperator,displayValue, display.textContent), currentOperator = divide, displayValue = display.textContent, checkLength() ;
//         }

        //this function handles the equal operator, it works very similiarly to the second time you click an operator if there is already a display value stored.

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
    return (displayValue = '0', currentOperator = '', display.textContent = ''), alert('woahhh, like tone it down a little like, k brahh?');
}
}

//bing bang boom

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
plusBtn.addEventListener('click', clickOperator);
minusBtn.addEventListener('click', clickSubtract);
timesBnt.addEventListener('click',clickMultiply)
divisionBtn.addEventListener('click', clickDivide)
equalsBtn.addEventListener('click', equals);

document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e);
}