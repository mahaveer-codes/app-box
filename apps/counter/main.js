let counterElement = document.getElementById("counter-value");

let currentNumber = counterElement.innerText;

currentNumber = parseInt(currentNumber);

// Functions

function IncreamentByOne(){
    currentNumber = currentNumber + 1;
    counterElement.innerText = currentNumber;
}

function DecreamentByOne(){
    currentNumber = currentNumber - 1;
    counterElement.innerText = currentNumber;
}

function ResetButton(){

    alert("Ab counter 0 ho Jayega. Hehe....");

    currentNumber = 0;
    counterElement.innerText = currentNumber;
}

/**
    x=0;

    DEC: x = x - 1 | 0 - 1 | x = -1

    INC: x= x + 1 | -1 + 1 | x = 0

    RST: x = 0

 */