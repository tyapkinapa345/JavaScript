const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let currentColor = '#000000';
let currentLineWidth = 2;
let actions = [];
let redoStack = [];

// Начало рисования
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Изменение цвета
document.getElementById('colorPicker').addEventListener('input', (e) => {
    currentColor = e.target.value;
});

// Изменение толщины линии
document.getElementById('lineWidth').addEventListener('input', (e) => {
    currentLineWidth = e.target.value;
});

// Очистка холста
document.getElementById('clear').addEventListener('click', clearCanvas);
// Шаг назад
document.getElementById('undo').addEventListener('click', undo);
// Шаг вперед
document.getElementById('redo').addEventListener('click', redo);
// Сохранение изображения
document.getElementById('save').addEventListener('click', saveCanvas);
// Ластик
document.getElementById('eraser').addEventListener('click', useEraser);
document.getElementById('brush').addEventListener('click', () => {
    isEraserActive = false; // Деактивируем ластик
    currentColor = document.getElementById('colorPicker').value; // Возвращаем цвет кисти
});
// Выбор ластика
document.getElementById('eraser').addEventListener('click', () => {
    isEraserActive = true; // Активируем ластик
});

// Функция начала рисования
function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// Функция рисования
function draw(e) {
    if (!drawing) return; // Если не рисуем, выходим из функции
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentLineWidth;
    ctx.stroke();
}

// Функция остановки рисования
function stopDrawing() {
    if (!drawing) return; // Если не рисуем, выходим из функции
    drawing = false;
    ctx.closePath();
    saveState(); // Сохраняем текущее состояние после завершения рисования
}

// Сохранение состояния холста в массив действий
function saveState() {
    actions.push(canvas.toDataURL()); // Сохраняем текущее состояние для undo
    redoStack = []; // Очищаем стек повтора при новом действии
}

// Очистка холста
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    saveState(); // Сохраняем состояние после очистки
}

// Функция отмены действия
function undo() {
    if (actions.length > 1) { // Проверяем, есть ли что отменять (оставляем хотя бы одно состояние)
        redoStack.push(actions.pop()); // Перемещаем последнее действие в стек повтора
        const imgData = actions[actions.length - 1]; // Получаем предыдущее состояние
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст перед отрисовкой предыдущего состояния
            ctx.drawImage(img, 0, 0); // Рисуем предыдущее состояние на холсте
        };
        img.src = imgData; // Загружаем изображение для отрисовки
    }
}

// Функция повтора действия
function redo() {
    if (redoStack.length > 0) {
        const imgData = redoStack.pop(); // Получаем последнее действие из стека повтора
        actions.push(imgData); // Добавляем его обратно в действия
        const img = new Image();
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст перед отрисовкой состояния
            ctx.drawImage(img, 0, 0); // Рисуем его на холсте
        };
        img.src = imgData; // Загружаем изображение для отрисовки
    }
}

// Сохранение холста в файл
function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'my-drawing.jpg';
    link.href = canvas.toDataURL(); // Получаем данные изображения в формате PNG
    link.click(); // Запускаем загрузку файла
}

// Использование ластика
function useEraser() {
    currentColor = '#FFFFFF'; // Устанавливаем цвет фона для ластика (белый)
}
