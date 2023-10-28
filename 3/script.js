let firstNumber = +prompt("Введите первое число:");
let secondNumber = +prompt("Введите второе число:");
const operator = prompt("Введение (+, -, *, / ) :");

// firstNumber = +firstNumber;
// secondNumber = +secondNumber;

let result;

if (operator === "+") {
    result = firstNumber + secondNumber;
} else if (operator === "-") {
    result = firstNumber - secondNumber;
} else if (operator === "*") {
    result = firstNumber * secondNumber;
} else if (operator === "/") {
    result = firstNumber / secondNumber;
} else {
    alert("Некорректный оператор!")
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
}
//const sum = firstNumber + secondNumber;
// const difference = firstNumber - secondNumber;
// const product = firstNumber * secondNumber;
// const quotient = firstNumber / secondNumber;

alert(
    `Результат:
    Сумма: ${sum},
    Разность: ${difference},
    Произведение: ${product},
    Деление: ${quotient}`
);

