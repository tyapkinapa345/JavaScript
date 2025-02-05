const notificationContainer = document.getElementById('notificationContainer');

// Функция для создания уведомления
function createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Создаем кнопку закрытия
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.className = 'close-button';
    
    // Обработчик события закрытия
    closeButton.addEventListener('click', () => {
        notification.remove();
        clearTimeout(autoClose); // Останавливаем таймер при ручном закрытии
    });

    notification.appendChild(closeButton);
    notificationContainer.appendChild(notification);

    // Устанавливаем таймер на автоматическое закрытие через 30 секунд
    const autoClose = setTimeout(() => {
        notification.remove(); // Удаляем уведомление
    }, 30000); // 30000 миллисекунд = 30 секунд
}

// Обработчики событий для кнопок
document.getElementById('infoButton').addEventListener('click', () => {
    createNotification('Это информационное сообщение.', 'info');
});

document.getElementById('successButton').addEventListener('click', () => {
    createNotification('Операция выполнена успешно!', 'success');
});

document.getElementById('warningButton').addEventListener('click', () => {
    createNotification('Это предупреждение!', 'warning');
});

document.getElementById('errorButton').addEventListener('click', () => {
    createNotification('Произошла ошибка!', 'error');
});
