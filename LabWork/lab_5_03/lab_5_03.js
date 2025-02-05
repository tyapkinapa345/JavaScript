const boardElement = document.getElementById('board');
const startButton = document.getElementById('start-button');
const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const minesInput = document.getElementById('mines');
const messageElement = document.getElementById('message');

let board = [];
let mines = [];
let revealedCells = 0;
let flagsRemaining = 0;
let gameOver = false; // Переменная для отслеживания состояния игры

// Функция для создания игрового поля
function createBoard(rows, cols, minesCount) {
    board = Array.from({ length: rows }, () => Array(cols).fill(0));
    mines = [];
    flagsRemaining = minesCount; // Устанавливаем количество оставшихся флажков
    gameOver = false; // Сбрасываем состояние игры

    while (mines.length < minesCount) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        
        if (!mines.some(mine => mine.row === row && mine.col === col)) {
            mines.push({ row, col });
            board[row][col] = 'M';
        }
    }

    for (let mine of mines) {
        const { row, col } = mine;
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] !== 'M') {
                    board[r][c]++;
                }
            }
        }
    }

    renderBoard();
}

// Функция для отрисовки игрового поля
function renderBoard() {
    boardElement.innerHTML = '';
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = r;
            cell.dataset.col = c;

            cell.addEventListener('click', () => revealCell(r, c));
            cell.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Отменяем стандартное контекстное меню
                toggleFlag(r, c);
            });

            boardElement.appendChild(cell);
        }
    }

    boardElement.style.gridTemplateColumns = `repeat(${board[0].length}, auto)`;
}

// Функция для открытия клетки
function revealCell(row, col) {
    if (gameOver) return; // Если игра окончена, ничего не делаем

    const cellValue = board[row][col];
    
    if (cellValue === 'M') {
        messageElement.textContent = 'Игра окончена! Вы попали на мину!';
        revealAllMines();
        gameOver = true; // Устанавливаем состояние игры в "окончено"
        return;
    }

    const cellElement = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    
    if (!cellElement.classList.contains('revealed')) {
        cellElement.classList.add('revealed');
        
        if (cellValue > 0) {
            cellElement.textContent = cellValue;
            cellElement.style.color = getColorForNumber(cellValue);
        } else {
            cellElement.textContent = '';
        }

        revealedCells++;

        if (cellValue === 0) {
            openAdjacentCells(row, col);
        }

        if (revealedCells === (board.length * board[0].length - mines.length)) {
            messageElement.textContent = 'Поздравляем! Вы выиграли!';
            gameOver = true; // Устанавливаем состояние игры в "окончено"
        }
    }
}

// Функция для установки/снятия флажка
function toggleFlag(row, col) {
    const cellElement = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
    
    if (!gameOver) { // Проверяем состояние игры
        if (cellElement.classList.contains('flagged')) {
            // Убираем флажок
            if (cellElement.classList.contains('revealed')) {
                removeFlagFromRevealedCell(cellElement, row, col);
            } else {
                removeFlagFromHiddenCell(cellElement);
            }
        } else if (flagsRemaining > 0) {
            // Устанавливаем флажок
            cellElement.classList.add('flagged');
            cellElement.textContent = '🚩'; // Устанавливаем флажок
            flagsRemaining--;
        }

        messageElement.textContent = `Осталось флажков: ${flagsRemaining}`;
    }
}

// Функция для снятия флажка с открытой клетки
function removeFlagFromRevealedCell(cellElement, row, col) {
    cellElement.classList.remove('flagged');
    flagsRemaining++;

    const cellValue = board[row][col];
    if (cellValue > 0) {
        cellElement.textContent = cellValue; // Восстанавливаем число
        cellElement.style.color = getColorForNumber(cellValue);
    } else {
        cellElement.textContent = ''; // Оставляем пустым для нуля
    }
}

// Функция для снятия флажка с закрытой клетки
function removeFlagFromHiddenCell(cellElement) {
    cellElement.classList.remove('flagged'); // Убираем класс флажка
    cellElement.textContent = ''; // Очищаем текстовое содержимое клетки
    flagsRemaining++; // Увеличиваем количество оставшихся флажков
}

// Рекурсивная функция для открытия соседних клеток
function openAdjacentCells(row, col) {
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < board.length && c >= 0 && c < board[0].length && !(r === row && c === col)) {
                revealCell(r, c);
            }
        }
    }
}

// Функция для открытия всех мин при поражении
function revealAllMines() {
    for (let mine of mines) {
        const { row, col } = mine;
        const mineCell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        
        if (mineCell) {
            mineCell.classList.add('mine');
            mineCell.textContent = '💣'; // Показываем мину
        }
    }
}

// Функция для получения цвета в зависимости от числа
function getColorForNumber(num) {
    switch(num) {
        case 1: return 'blue';
        case 2: return 'green';
        case 3: return 'red';
        case 4: return 'darkblue';
        case 5: return 'brown';
        case 6: return 'cyan';
        case 7: return 'magenta';
        case 8: return 'black';
        default: return 'black'; // Для нуля или других значений
    }
}

// Обработчик события для кнопки "Начать игру"
startButton.addEventListener('click', () => {
    const rows = parseInt(rowsInput.value);
    const cols = parseInt(colsInput.value);
    const minesCount = parseInt(minesInput.value);

    if (minesCount >= rows * cols) {
        alert("Количество мин не может превышать количество клеток!");
        return;
    }

    revealedCells = 0;
    messageElement.textContent = '';
    createBoard(rows, cols, minesCount);
});
