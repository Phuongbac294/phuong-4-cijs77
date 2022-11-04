import './appwallet.css';
import { useState } from 'react';

export default function AppHeader() {
    const [addTrue, setAddTrue] = useState(false)
       
    return (
        <div className="appWallet__header">
            {addTrue === false ?
            <button 
                type='button' 
                className='btn btn-violet btnappnew' 
                onClick={() => setAddTrue(true)} >
                    Add new expense 
            </button>
            :
            <from className='addNewExpense'>
                <label for="text">Name</label>
                <input type="text" name="text" placeholder='Enter name here' className='text1'></input><br></br>
                <label for="amount">Amount</label>
                <input type="number" name="amount" placeholder='Enter amount here' className='amount'></input><br></br>
                <label for="date">Date</label>
                <input type="date" name="date" placeholder='Enter date here' className='date'></input><br></br>
                <button type='submit' className='btn btn-add' >Add</button>
                <button type='button' className='btn btn-cancel' onClick={() => setAddTrue(false)}>Cancel</button>
            </from>
            }
        </div>
    );
}