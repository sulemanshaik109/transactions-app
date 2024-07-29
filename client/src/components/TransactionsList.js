import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles.css"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log(`${API_BASE_URL}/api/transactions`)

class TransactionsList extends Component {
    state = {
        transactions: [],
    };

    componentDidMount() {
        this.fetchTransactions();
    }

    fetchTransactions = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/transactions`);
            this.setState({ transactions: response.data });
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    formateDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    }

    render() {
        const { transactions } = this.state;
        return (
            <div className='transactions-list'>
                <div className='transactions-header'>
                    <h2 className='heading'>Office Transactions</h2>
                    <Link className='link-item' to="/add-transaction">
                        <button type='button' className='button'>+ Add Transaction</button>
                    </Link>
                </div>
                <table className='table'>
                    <thead className='thread'>
                        <tr className='trHead'>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Credit</th>
                            <th>Debit</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{this.formateDateString(transaction.date)}</td>
                                <td className='td-description'>{transaction.description}</td>
                                <td>{transaction.type === 'credit' ? transaction.amount : '-'}</td>
                                <td>{transaction.type === 'debit' ? transaction.amount : '-'}</td>
                                <td>{transaction.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TransactionsList;
