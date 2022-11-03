import './appwallet.css';

export default function AppExpenseItem() {
    return (
        <div className='appexpenseitem'>
            <div className='appexpenseitem-left'>
                <p className='month'>January</p>
                <p className='year'>2022</p>
                <p className='day' >16</p>
            </div>
            <p className='appexpenseitem-center'>Nội dung</p>
            <div className='appexpenseitem-right'> $50</div>
        </div>
    );
}