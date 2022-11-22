import './appwallet.css';


export default function AppExpense() {
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

    const arrexpense = [{finance: 'mua xe', amount: 2000, date: [2022, 9, 26]},
                        {finance: 'mua bàn', amount: 500, date: [2022, 10, 26]},
                        {finance: 'mua điện thoại', amount: 850, date: [2020, 11, 26]},
                        {finance: 'mua tủ', amount: 1000, date: [2022, 11, 20]},
                        {finance: 'mua quạt 1', amount: 60, date: [2021, 11, 2]},
                        {finance: 'mua quạt 2', amount: 60, date: [2022, 11, 2]},
                        {finance: 'mua quạt 3', amount: 60, date: [2022, 8, 2]},
                        {finance: 'mua quạt 4', amount: 60, date: [2021, 7, 2]},
                        {finance: 'mua quạt 5', amount: 60, date: [2021, 12, 15]}
                    ]
    const arr = arrexpense.sort((a,b) => {
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