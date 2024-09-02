document.getElementById('startButton').addEventListener('click', function() {
    // Access the video element
    const video = document.getElementById('video');
    
    // Check if the browser supports mediaDevices
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Set the video source to the stream
                video.srcObject = stream;
            })
            .catch(function(err) {
                console.error('Error accessing the camera: ', err);
            });
    } else {
        alert('getUserMedia is not supported in this browser.');
    }
});

// script.js
let balance = 0;
let transactions = [];

document.getElementById('transaction-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (type === 'deposit') {
        balance += amount;
        transactions.push({
            date: new Date().toISOString().split('T')[0],
            type: 'Deposit',
            amount: `$${amount.toFixed(2)}`
        });
    } else if (type === 'withdrawal') {
        if (balance >= amount) {
            balance -= amount;
            transactions.push({
                date: new Date().toISOString().split('T')[0],
                type: 'Withdrawal',
                amount: `$${amount.toFixed(2)}`
            });
        } else {
            alert('Insufficient balance');
        }
    }

    document.getElementById('balance').innerText = balance.toFixed(2);
    updateTransactionHistory();
    document.getElementById('transaction-form').reset();
});

function updateTransactionHistory() {
    const transactionBody = document.getElementById('transaction-body');
    transactionBody.innerHTML = '';

    transactions.forEach((transaction) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
        `;
        transactionBody.appendChild(row);
    });
}



/*transactions api interface*/
document.addEventListener('DOMContentLoaded', function() {
    // Replace with your API endpoint
    const apiUrl = 'https://api.example.com/transactions';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const transactionsContainer = document.getElementById('transactions-container');

            data.transactions.forEach(transaction => {
                const transactionDiv = document.createElement('div');
                transactionDiv.classList.add('transaction-item');

                transactionDiv.innerHTML = `
                    <p class="transaction-id">Transaction ID: ${transaction.id}</p>
                    <p class="transaction-amount">Amount: ${transaction.amount}</p>
                    <p class="transaction-date">Date: ${transaction.date}</p>
                `;

                transactionsContainer.appendChild(transactionDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching transactions:', error);
        });
});
