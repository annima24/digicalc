

function add(a,b)  {
    return a + b;
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

function operate(operator, a, b)  {
    return operator(a,b);
}