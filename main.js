function performOperation(operation, ...args){
    return args.reduce(function(acc, currValue) {
        if(operation === 'add'){
            return acc + currValue;
        } else if (operation === 'subtract'){
            return acc - currValue;
        } else if (operation === 'multiply'){
            return acc * currValue;
        } else if (operation === 'divide'){
            return acc / currValue;
        }
    });
}

let operatorButtons = document.querySelectorAll('.operator-buttons');
let addBtn = document.querySelector('.add');
let subtractBtn = document.querySelector('.subtract');
let multiplyBtn = document.querySelector('.multiply');
let divideBtn = document.querySelector('.divide');
let operation = '';

addBtn.addEventListener('click', () => {operation = 'add', console.log(operation)});
subtractBtn.addEventListener('click', () => {operation = 'subtract', console.log(operation)});
multiplyBtn.addEventListener('click', () => {operation = 'multiply', console.log(operation)});
divideBtn.addEventListener('click', () => {operation = 'divide', console.log(operation)});

let numbersBar = document.querySelector('.numbers-bar');
let displayText = document.querySelector('.display');
displayText.textContent = 0;
let displayNumber = 0;


function clearDisplay(){
    displayNumber = 0;
    displayText.textContent = displayNumber;
    console.clear();
}
function updateDisplayValue(num){
    displayText.textContent === '0'? displayText.textContent = num : displayText.textContent += num;
    displayNumber = parseFloat(displayText.textContent);
    console.log(displayNumber);
}

for(let i = 9; i >= 0; i--){
const numbersButton = document.createElement('button');
    numbersBar.append(numbersButton);
    numbersButton.textContent = `${i}`;
    numbersButton.classList.add(`number-${i}`, 'number-buttons', 'buttons');
    numbersButton.addEventListener('click', () => {updateDisplayValue(i)})
}

const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.classList.add('buttons', 'number-buttons')

const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.classList.add('buttons', 'number-buttons')


numbersBar.append(clearButton);
numbersBar.append(equalsButton);

const zeroButton = document.querySelector('.number-0');

numbersBar.insertBefore(clearButton, zeroButton);
console.log(displayText.innerHTML)

clearButton.addEventListener('click', clearDisplay);