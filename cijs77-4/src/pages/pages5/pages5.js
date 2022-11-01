import './pages5.css';
import {useState} from 'react';

function Pages5() {
    const countState = useState(0);
    const count = countState[0];
    const setCount = countState[1];
    const ColorChange =() => {
        setCount(count + 1); 
        document.title = `${count}`;        
        switch(count % 3) {
            case 0:
                document.getElementsByClassName(`lamp-red`)[0].style.opacity = 1;
                document.getElementsByClassName('lamp-yellow')[0].style.opacity = 0.2;
                document.getElementsByClassName('lamp-green')[0].style.opacity = 0.2;
                break;
            case 1:
                document.getElementsByClassName(`lamp-red`)[0].style.opacity = 0.2;
                document.getElementsByClassName('lamp-yellow')[0].style.opacity = 1;
                document.getElementsByClassName('lamp-green')[0].style.opacity = 0.2;
                break;
            case 2:
                document.getElementsByClassName(`lamp-red`)[0].style.opacity = 0.2;
                document.getElementsByClassName('lamp-yellow')[0].style.opacity = 0.2;
                document.getElementsByClassName('lamp-green')[0].style.opacity = 1;
                break;   
            default :         
          }
    }
    
    return (
        <div className='pages5'>
            <h3>Bảng hiệu giao thông</h3>
            <button type="button" className="btn btn_yellow" onClick={ColorChange}>Click chuyển màu đèn</button>
            <div className="lamp">
                <div className="lamp__item">{count}</div>
                <div className="lamp__item lamp-red"></div>
                <div className="lamp__item lamp-yellow"></div>
                <div className="lamp__item lamp-green"></div>
            </div>
        </div>
    );    
}

export default Pages5;