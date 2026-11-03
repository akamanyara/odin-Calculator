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

let number1 = 0;
let number2 = 0;
let operator = '';

function operate(number1, number2, operator) {
    let result = 0;

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
            result = divide(number1, number2);
            break;
    }

    return result;
}