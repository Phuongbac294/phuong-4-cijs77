import './appwallet.css';


export default function AppCharContainer() {
    const arrmonth = [
        {id : 'Jan' , spend : 1200, income : 1500},
        {id : 'Feb' , spend : 1200, income : 1500},
        {id : 'Mar' , spend : 1000, income : 1500},
        {id : 'Apr' , spend : 800, income : 1500},
        {id : 'May' , spend : 1200, income : 1500},
        {id : 'Jun' , spend : 900, income : 1500},
        {id : 'Jul' , spend : 1200, income : 1500},
        {id : 'Aug' , spend : 1200, income : 1500},
        {id : 'Sep' , spend : 1600, income : 1500},
        {id : 'Oct' , spend : 1200, income : 1500},
        {id : 'Nov' , spend : 100, income : 1500},
        {id : 'Dec' , spend : 1200, income : 1500},
    ]
    const CharMonth = (prors) => {
        const percent = (1 - (prors.spend/prors.income)) * 100
        console.log(percent);
        return (
            <div className="char-item">
                <div className="char-item-bak">
                    <div className="char-item-down" style={{height : `${percent}%`}}></div>
                </div>
                <p className="char-item-month">{prors.id}</p>
            </div>
        );
    }
    return (
        <div className='appcharcontainer'>
            {arrmonth.map(item => CharMonth(item))}
        </div>
    );
}