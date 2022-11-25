import './appwallet.css';
import { useState, memo } from 'react';


 function AppCharContainer({chart}) {
    // const Arryear = [];
    // Arryear = expenses.filter((item)=> {
    //     for ( let i=0; i<expenses.lenght; i++)
    //     if (item.date = {year}) {
    //         return true;
    //     }
    // });
    // console.log(Arryear);
       const CharMonth = (prors) => {
        const percent = (1 - (prors.spend/prors.income)) * 100
      
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
            {chart.map(item => CharMonth(item))}
        </div>
    );
}

export default memo(AppCharContainer);