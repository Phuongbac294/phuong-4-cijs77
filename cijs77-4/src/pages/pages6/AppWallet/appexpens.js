import './appwallet.css';


export default function AppExpense({expenses}) {
    const AppExpenseItem = (prors) => {
        return (
            <div className='appexpenseitem'>
                <div className='appexpenseitem-left'>
                    <p className='year'>{prors.date[0]}</p>
                    <p className='month'>{prors.date[1]}</p>
                    <p className='day' >{prors.date[2]}</p>
                </div>
                <p className='appexpenseitem-center'>{prors.finance}</p>
                <div className='appexpenseitem-right'> {prors.amount}</div>
            </div>
        );
    }

    const arr = expenses.sort((a,b) => {
        if (a.date[0] > b.date[0]) {
            return -1;            
        } 
        if (a.date[0] < b.date[0]) {
            return 1;}
        if (a.date[0] = b.date[0]) {
            if (a.date[1] > b.date[1]) {
                return -1;            
            } 
            if (a.date[1] < b.date[1]) {
                return 1;}
            if (a.date[1] = b.date[1]) {
                if (a.date[2] > b.date[2]) {
                    return -1;            
                } 
                if (a.date[2] < b.date[2]) {
                    return 1;}
                if (a.date[2] = b.date[2]) {
                    return 0;
                }
            }
        }

    })

    return (
        <div className='appexpensr'>
            {arr.map(item => (AppExpenseItem(item)))}
        </div>
    );
}