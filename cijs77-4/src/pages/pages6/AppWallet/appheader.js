import './appwallet.css';
import '../pages6.css';
import { useState } from 'react';

export default function AppHeader() {
    const [addTrue, setAddTrue] = useState(true);
    const [expense, setExpense] = useState({finance:"", amount:'', date: ''})
    const arrexpense = ['finance', 'amount', 'date']
    // console.log(arrexpense[0])
    const InputExpense =(name, type, pla, [key]) => {
        console.log(expense);
        return (
            <div >
                <label>{name}</label>
                <input className='purchase'
                    placeholder={pla}
                    type={type}
                    name={name}
                    value={key}
                    // onChange={(e)=> {
                    //     // [key] = e.target.value;
                    //     setExpense({...expense, finance : e.target.value } )} }                  
                />
            </div>
        );
    }
    const [expenses, setExpenses] = useState([])
    // const [input,setInput] = useState({name:'', age:''})
    // console.log(input);
    console.log(expense);
    const HandleAdd = () => {
        setExpenses(
            [...expenses, expense]
        )
        
        setExpense({finance:"", amount:'', date: ''})
    }
    console.log(expenses);
    
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
                {/* {InputExpense('Name', 'text', 'Enter name here', expense.finance, )}
                {InputExpense('Amount', 'number', 'Enter amount here', expense.amount, arrexpense[1])}
                {InputExpense('Date', 'date', 'Enter date here', expense.date,  arrexpense[2])} */}
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
                    placeholder='Enter date here'
                    type='date'
                    name='date'
                    value={expense.date}
                    onChange={(e)=> setExpense({...expense, date : e.target.value } )}                  
                />
                {/* <input value={input.age} onChange={e=>setInput({...input, age : e.target.value})}/> */}
                <button type='submit' className='btn btn-add' onClick={HandleAdd} >Add</button>
                <button type='button' className='btn btn-cancel' onClick={() => setAddTrue(true)}>Cancel</button>
            </from>
            }
        </div>
    );
}