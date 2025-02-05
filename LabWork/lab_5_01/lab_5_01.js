const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const checkButton = document.getElementById('check-button');
const shuffleButton = document.getElementById('shuffle-button');

let draggedPiece = null;

// Обработчики событий для перетаскивания
puzzlePieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);
    
    // Позволяем перетаскивать элементы
    piece.setAttribute('draggable', true);
});

function dragStart(e) {
    draggedPiece = this; // Сохраняем ссылку на перетаскиваемый элемент
}

function dragEnd() {
    draggedPiece = null; // Сбрасываем ссылку после завершения перетаскивания
}

// Обработчики событий для контейнера
const puzzleContainer = document.getElementById('puzzle-container');

puzzleContainer.addEventListener('dragover', (e) => {
    e.preventDefault(); // Разрешаем сброс элемента
});

puzzleContainer.addEventListener('drop', function(e) {
    if (draggedPiece) {
        const target = e.target.closest('.puzzle-piece');
        if (target && target !== draggedPiece) {
            // Меняем местами элементы
            const tempId = target.dataset.id;
            target.dataset.id = draggedPiece.dataset.id;
            draggedPiece.dataset.id = tempId;

            // Меняем фоновое изображение элементов
            const tempBackground = target.style.backgroundImage;
            target.style.backgroundImage = draggedPiece.style.backgroundImage;
            draggedPiece.style.backgroundImage = tempBackground;

            // Убираем класс пустой ячейки, если он есть
            if (target.classList.contains('empty')) {
                target.classList.remove('empty');
                draggedPiece.classList.add('empty'); // Добавляем класс пустой ячейке
            }
        }
    }
});

// Проверка правильности сборки
checkButton.addEventListener('click', () => {
    let isCorrect = true;

    puzzlePieces.forEach((piece, index) => {
        if (piece.dataset.id != index + 1) {
            isCorrect = false; // Если элемент не на своем месте
        }
    });

    if (isCorrect) {
        alert("Поздравляем! Пазл собран правильно!");
    } else {
        alert("Пазл собран неправильно. Попробуйте еще раз.");
    }
});

// Функция перемешивания пазла
shuffleButton.addEventListener('click', shufflePuzzle);

function shufflePuzzle() {
    const piecesArray = Array.from(puzzlePieces);
    
    // Перемешиваем массив элементов
    for (let i = piecesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [piecesArray[i].dataset.id, piecesArray[j].dataset.id] = [piecesArray[j].dataset.id, piecesArray[i].dataset.id];

        // Меняем фоновое изображение элементов
        const tempBackground = piecesArray[i].style.backgroundImage;
        piecesArray[i].style.backgroundImage = piecesArray[j].style.backgroundImage;
        piecesArray[j].style.backgroundImage = tempBackground;
    }

    // Убираем класс пустой ячейки, если он есть
    piecesArray.forEach(piece => piece.classList.remove('empty'));
}

