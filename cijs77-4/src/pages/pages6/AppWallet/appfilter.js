import './appwallet.css';

export default function AppFilter() {
    const d = new Date().getFullYear(); 
    const Year = () => {
        
    }
    return (
        <div className='appfilter'>
            <p>Filter by year</p>          
            <div className='filter__year'>
                <p className='filter__year-item'>{d}</p>
                <ul className='filter__year-list'>
                    <li className='filter__year-list-item' onClick={Year}>{d}</li>
                    <li className='filter__year-list-item'>{d-1}</li>
                    <li className='filter__year-list-item'>{d-2}</li>
                    <li className='filter__year-list-item'>{d-3}</li>
                    <li className='filter__year-list-item'>{d-4}</li>
                </ul>
            </div>
            
        </div>
    );
}

