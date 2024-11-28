document.getElementById('cardForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    alert(`Информация карты:
    Номер: ${cardNumber}
    Имя: ${cardName}
    Срок действия: ${expiryDate}
    CVV: ${cvv}`);
});