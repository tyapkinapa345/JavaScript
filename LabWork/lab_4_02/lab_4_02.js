document.getElementById('calculateBtn').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // месячная ставка
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12; // месяцы

    // Проверка на корректность введенных данных
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert("Пожалуйста, введите корректные значения.");
        return;
    }

    // Расчет ежемесячного платежа
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    
    // Отображение результата
    document.getElementById('result').innerHTML = `<h3>Ежемесячный платеж: ${monthlyPayment.toFixed(2)} руб.</h3>`;
    
    // Генерация графика платежей
    generatePaymentSchedule(loanAmount, interestRate, loanTerm, monthlyPayment);
});

function generatePaymentSchedule(loanAmount, interestRate, loanTerm, monthlyPayment) {
    const tbody = document.querySelector('#paymentSchedule tbody');
    
    // Очистка предыдущего графика
    tbody.innerHTML = '';

    let remainingBalance = loanAmount;

    for (let month = 1; month <= loanTerm; month++) {
        const interestPayment = remainingBalance * interestRate; // Проценты за месяц
        let principalPayment = monthlyPayment - interestPayment; // Основной долг за месяц

        // Убедимся, что основной долг не отрицательный
        if (principalPayment > remainingBalance) {
            principalPayment = remainingBalance; // Погашаем остаток долга
        }
        
        remainingBalance -= principalPayment; // Остаток долга

        // Создание строки таблицы
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${month}</td>
            <td>${principalPayment.toFixed(2)} руб.</td>
            <td>${interestPayment.toFixed(2)} руб.</td>
            <td>${monthlyPayment.toFixed(2)} руб.</td>
            <td>${Math.max(remainingBalance, 0).toFixed(2)} руб.</td>
        `;
        
        tbody.appendChild(row);
        
        if (remainingBalance <= 0) break; // Если долг погашен
    }
}

// Обработчик событий для предустановленных значений
document.querySelectorAll('.preset').forEach(button => {
    button.addEventListener('click', function() {
        if (this.dataset.amount) {
            document.getElementById('loanAmount').value = this.dataset.amount;
        }
        
        if (this.dataset.rate) {
            document.getElementById('interestRate').value = this.dataset.rate;
        }

        if (this.dataset.term) {
            document.getElementById('loanTerm').value = this.dataset.term;
        }
    });
});
