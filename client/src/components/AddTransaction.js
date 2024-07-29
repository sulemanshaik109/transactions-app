import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles.css"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

class AddTransaction extends Component {
    state = {
        type: 'credit',
        amount: '',
        description: '',
        date: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { type, amount, description, date } = this.state;
        try {
            await axios.post(`${API_BASE_URL}/api/transactions`, {
                type,
                amount: parseFloat(amount),
                description,
                date,
            });
            this.props.navigate('/');
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    render() {
        const { type, amount, description, date } = this.state;
        return (
            <div className='add-transaction'>
                <h2 className='heading'>New Transaction</h2>
                <form className='form-container' onSubmit={this.handleSubmit}>
                    <div className='input-container'>
                        <label className='label'>Transaction Type</label>
                        <select className='input' name="type" value={type} onChange={this.handleChange}>
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                        </select>
                    </div>
                    <div className='input-container'>
                        <label className='label'>Amount</label>
                        <input className='input' type="number" name="amount" value={amount} onChange={this.handleChange} required placeholder='Enter Amount'/>
                    </div>
                    <div className='input-container'>
                        <label className='label'>Description</label>
                        <textarea className='textarea' name="description" value={description} onChange={this.handleChange} required placeholder='Enter Description'/>
                    </div>
                    <div className='input-container'>
                        <label className='label'>Date</label>
                        <input className='input date' type="date" name="date" value={date} onChange={this.handleChange} required />
                    </div>
                    <div className='buttons-container'>
                        <button className='button submit-btn' type="submit">Save</button>
                        <Link to="/">
                            <button type="button" className='button cancel-btn'>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

function AddTransactionWithNavigate() {
    const navigate = useNavigate();
    return <AddTransaction navigate={navigate} />;
}

export default AddTransactionWithNavigate;
