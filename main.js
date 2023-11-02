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

let numbersBar = document.querySelector('.numbers-bar');
let displayText = document.querySelector('.display');
displayText.textContent = 0;
let displayNumber = 0;
let firstNumber = 0,
    secondNumber = 0,
    result = 0;

function clearAll(){
    displayNumber = 0;
    displayText.textContent = displayNumber;
    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    console.clear();
    console.log(firstNumber, secondNumber, result)
}

function clearDisplay(){
    if(result === 0){
        displayText.textContent= 0;
    }
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

clearButton.addEventListener('click', clearAll);

function updateDisplayValue(num){
    displayNumber = parseFloat(displayText.textContent);
    if(displayText.textContent === '0'){
        displayText.textContent = num;
    } else if( result > 0 || secondNumber == 0){
        if(displayNumber === result){
            displayText.textContent = num 
        }else {
        displayText.textContent += num;
        }
        displayNumber = parseFloat(displayText.textContent);
    }
    displayNumber = parseFloat(displayText.textContent);
    console.log('displayNumber:',displayNumber);
    return displayNumber
}
function buttonOperation(newOperation){
    console.log('firstNumber:', firstNumber, 'secondNum:', secondNumber)
    if(firstNumber === 0){
        firstNumber = displayNumber;
        operation = newOperation;
        console.log(operation)
        clearDisplay();
        return;
    } else if(secondNumber >= 0){
        secondNumber = displayNumber;
        result = performOperation(operation, firstNumber, secondNumber);
        firstNumber = result;
        displayText.textContent = result;
        operation = newOperation; 
    } 
}

addBtn.addEventListener('click', () => buttonOperation('add'));
subtractBtn.addEventListener('click', () => buttonOperation('subtract'));
multiplyBtn.addEventListener('click', () => buttonOperation('multiply'));
divideBtn.addEventListener('click', () => buttonOperation('divide'));

equalsButton.addEventListener('click', () => {
    secondNumber = displayNumber;
    result = performOperation(operation,firstNumber,secondNumber)
    if(operation === 'divide' && secondNumber === 0){
        displayText.textContent = 'NUH-UHH';
        [firstNumber, secondNumber, result] = 0;
        
    }else {
        displayText.textContent = result;
    }
    })
console.log('result:', result ,'firstNumber:',firstNumber,'secondNumber:', secondNumber)