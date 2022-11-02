import './appwallet.css';

export default function AppHeader() {
    const addNew = () => {

    }
    return (
        <div className="appheader-item">
            <button type='button' className='btn btn-violet' onClick={addNew}>Add new expense</button>
        </div>
    );
}