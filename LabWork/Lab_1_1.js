JavaScript
// Вариант №16

// Задание 1
// Определить день недели по номеру: программа выводит день недели на основе введенного номера (1–7). 

// Запускает интерфейс терминала
process.stdin = undefined;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Определеят число, данное пользователем в терминале для выдачи ответа
readline.question('Номер дня недели (1-7): ', (day) => {
    day = parseInt(day);
    if (day == 1) {
        console.log('Понедельник');
    } else if (day == 2) {
        console.log('Вторник');
    } else if (day == 3) {
        console.log('Среда');
    } else if (day == 4) {
        console.log('Четверг');
    } else if (day == 5) {
        console.log('Пятница');
    } else if (day == 6) {
        console.log('Суббота');
    } else if (day == 7) {
        console.log('Воскресенье');
    } else {
        console.log('Неккоректный ввод');
    } 
    readline.close();
});
