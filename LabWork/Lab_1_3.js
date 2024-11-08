JavaScript
// Вариант №16

// Задание 3
// Определить время суток по введенному часу: программа выводит время суток (утро, день, вечер, ночь) на основе введенного времени. 

// Запускает интерфейс терминала
process.stdin = undefined;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Блок кода, который определяет по числу от 0 до 23 время суток
readline.question('Введите час (0-23): ', (hour) => {
    hour = parseInt(hour);
    if (hour >= 6 && hour < 12) {
            console.log('Утро');
    } else if (hour >= 12 && hour < 18) {
        console.log('День');
    } else if (hour >= 18 && hour < 22) {
        console.log('Вечер');
    } else {
        console.log('Ночь');
    }
    readline.close();
});
