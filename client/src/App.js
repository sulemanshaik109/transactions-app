import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import "./App.css"

function App() {
    return (
        <Router>
            <div className='app-container'>
                <h1 className='app-title'>Transactions App</h1>
                <Routes>
                    <Route path="/" element={<TransactionsList />} />
                    <Route path="/add-transaction" element={<AddTransaction />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
