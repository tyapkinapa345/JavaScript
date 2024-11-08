JavaScript
// Вариант 16

// Задание 2
// Сравнить два числа: программа определяет, какое из двух введенных чисел больше. 

// Запускает интерфейс терминала
process.stdin = undefined;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Код, определяющий номинал числа и выводит наибольшее через терминал
readline.question('Введите первое число: ', (num1) => {
    num1 = parseInt(num1);
    readline.question('Введите второе число: ', (num2) => {
        num2 = parseInt(num2);
        if (num1 > num2) {
            console.log(`${num1} больше чем ${num2}`);
        } else if (num2 > num1) {
            console.log(`${num2}  больше чем ${num1}`);
        } else {
            console.log(`Оба числа равны друг другу`);
        }
        readline.close();
    });
});
