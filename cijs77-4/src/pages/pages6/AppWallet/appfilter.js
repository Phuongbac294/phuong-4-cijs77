import { memo } from 'react';
import './appwallet.css';

 function AppFilter({ HanldeCchart}) {
    const d = new Date().getFullYear(); 
   
    return (
        <div className='appfilter'>
            <p>Filter by year</p>          
            <div className='filter__year'>
            <select id="cars" onChange={HanldeCchart}>
                <option value={d} selected >{d}</option>
                <option value={d-1}>{d-1}</option>
                <option value={d-2}>{d-2}</option>
                <option value={d-3}>{d-3}</option>
                <option value={d-4}>{d-4}</option>
                <option value={d-5}>{d-5}</option>                
            </select>
            </div>
            
        </div>
    );
}

export default memo(AppFilter);