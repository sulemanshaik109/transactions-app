const db = require('../db');

const addTransaction = (type, amount, description, date, callback) => {
    const balanceQuery = `SELECT balance FROM transactions ORDER BY id DESC LIMIT 1`;
    db.get(balanceQuery, (err, row) => {
        if (err) {
            return callback(err);
        }
        const previousBalance = row ? row.balance : 0;
        const newBalance = type === 'credit' ? previousBalance + amount : previousBalance - amount;

        const query = `INSERT INTO transactions (type, amount, description, date, balance) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [type, amount, description, date, newBalance], function(err) {
            callback(err, this.lastID);
        });
    });
};

const getTransactions = (callback) => {
    const query = `SELECT * FROM transactions`;
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};

module.exports = { addTransaction, getTransactions };
