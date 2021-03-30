const fuckYou = document.querySelector('#fuckYou');

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

fuckYou.addEventListener('click', function()    {
    alert('fuckyou');
})