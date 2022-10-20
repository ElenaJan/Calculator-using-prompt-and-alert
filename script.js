const button = document.querySelector('button');
const calculate =() => {
    button.onclick = function() {
        const num1 = prompt('Введите первое число');
        const num2 = prompt('Введите второе число');
        const operation = prompt('Введите арифметическую операцию');

        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if(isNaN(number1)) {
            alert('Пожалуйста, введите корректно первое число');
        } else if(isNaN(number2)) {
            alert('Введите корректно второе число');
        } else {
            switch (operation) {
                case '+':
                    alert(number1 + number2);
                break;
                case '-':
                    alert(number1 - number2);
                    break;
                case '*':
                    alert(number1 * number2);
                    break;
                case '/':
                    alert(number1 / number2);
                    break;
                default:
                    alert('Неправильная операция! Используйте +, -, * или /');
            };
        }
    }
}

calculate();
