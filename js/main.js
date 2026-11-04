function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by 0';
    }
    return num1 / num2;
}

function operate(number1, number2, operator) {
    let result = 0;
    number1 = +number1;
    number2 = +number2;

    switch(operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = substract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (number2 === 0) {
                result = 'Cannot divide by 0';
            } else {
                result = divide(number1, number2);
            }
            break;
    }

    return result;
}

let number1 = '';
let number2 = '';
let operator = '';

let firstFinish = false;

const resultBox = document.querySelector('.result-box');
const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', () => {
        // numbers logic
        if (button.classList.contains('num')) {
            // number 1 is empty so add num1
            if ((number1 === '' || operator === '') && !firstFinish) {
                number1 += (button.textContent);
                resultBox.textContent = number1;
            } 
            if (firstFinish) {
                firstFinish = false;
                number1 = '';
                number1 += button.textContent;
                resultBox.textContent = number1;
            } 
            // num1, operator not empty so fill num2
            else if (number1 !== '' && operator !== '') {
                number2 += button.textContent;
                resultBox.textContent = number2;
            }
        } 
        // operator logic
        else if (button.classList.contains('op')) {
            if (operator === '' || (operator !== '' && number1 !== '' && number2 === '')) {
                operator = button.textContent;
                firstFinish = false
            }
            else if (number1 !== '' && number2 !== '') {
                let result = operate(number1, number2, operator);
                if (result !== 'Cannot divide by 0') {
                    number1 = result;
                    resultBox.textContent = result.toFixed(2);
                } else {
                    number1 = '';
                    resultBox.textContent = result;
                }
                number2 = '';
                operator = button.textContent;
            }
        }
        // equality logic
        else if (button.classList.contains('eq')) {
            if (number1 !== '' && operator !== '' && number2 !== '') {
                let result = operate(number1, number2, operator);
                if (result !== 'Cannot divide by 0') {
                    number1 = result;
                    resultBox.textContent = result.toFixed(2);
                } else {
                    number1 = '';
                    resultBox.textContent = result;
                }
                number2 = '';
                firstFinish = true;
                operator = '';
            }
        }
        // clear logic
        else if (button.classList.contains('clear')) {
            if (number1 !== '') number1 = '';
            if (number2 !== '') number2 = '';
            if (operator !== '') operator = '';
            firstFinish = false;
            resultBox.textContent = '0';
        }
    })
})