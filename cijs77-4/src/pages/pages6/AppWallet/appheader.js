import './appwallet.css';
import '../pages6.css';
import { useState, memo } from 'react';

function AppHeader({expenses, setExpenses}) {
    const [addTrue, setAddTrue] = useState(true);
    const [expense, setExpense] = useState({finance:"", amount:'', date: new Date()})   
        
    const HandleAdd = () => {
        setExpenses(
            [...expenses, expense]
        )
        
        setExpense({finance:"", amount:'', date: new Date()})
    }
    
    return (
        <div className="appWallet__header">
            {addTrue === true ?
            <button 
                type='button' 
                className='btn btn-violet btnappnew' 
                onClick={() => setAddTrue(false)} >
                    Add new expense 
            </button>
            :
            <from className='addNewExpense'>
              
                <label>Name</label>
                <input className='purchase'
                    placeholder='Enter name here'
                    type='text'
                    name='finance'
                    value={expense.finance}
                    onChange={(e)=> setExpense({...expense, finance : e.target.value } )}                  
                />
                <label>Amount</label>
                <input className='purchase'
                    placeholder='Enter amount here'
                    type='number'
                    name='amount'
                    value={expense.amount}
                    onChange={(e)=> setExpense({...expense, amount : e.target.value } )}                  
                />
                <label>Date</label>
                <input className='purchase'
                    placeholder = { new Date()}
                    type='date'
                    name='date'
                    value={expense.date}
                    onChange={(e)=> setExpense({...expense, date:[e.target.value.getFullYear(), e.target.value.getMonth(), e.target.value.getDate()]})}                  
                />
                <button type='submit' className='btn btn-add' onClick={HandleAdd} >Add</button>
                <button type='button' className='btn btn-cancel' onClick={() => setAddTrue(true)}>Cancel</button>
            </from>
            }
        </div>
    );
}

export default memo(AppHeader);