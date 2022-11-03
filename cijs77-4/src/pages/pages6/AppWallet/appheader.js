import './appwallet.css';

export default function AppHeader() {
    const addNew = () => {

    }
    return (
        <div className="appWallet__header">
            <button 
                type='button' 
                className='btn btn-violet btnappnew' 
                onClick={addNew}>
                    Add new expense
            </button>
            <from className='addNewExpense'>
                <label for="text">Name</label>
                <input type="text" name="text" placeholder='Enter name here' className='text1'></input><br></br>
                <label for="amount">Amount</label>
                <input type="number" name="amount" placeholder='Enter amount here' className='amount'></input><br></br>
                <label for="date">Date</label>
                <input type="date" name="date" placeholder='Enter date here' className='date'></input><br></br>
                <button type='button' className='btn btn-add'>Add</button>
                <button type='button' className='btn btn-cancel'>Cancel</button>
            </from>
        </div>
    );
}