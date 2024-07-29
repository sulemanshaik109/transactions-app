// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const { addTransaction, getTransactions } = require('../model/transactionModel');

router.post('/api/transactions', (req, res) => {
    const { type, amount, description, date } = req.body;
    addTransaction(type, amount, description, date, (err, id) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id });
    });
});

router.get('/api/transactions', (req, res) => {
    getTransactions((err, transactions) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(transactions);
    });
});

module.exports = router;
