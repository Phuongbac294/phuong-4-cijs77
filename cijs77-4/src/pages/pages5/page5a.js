import './pages5.css';
import Lamp from '../../components/lamp/lamp.js';
import {useState} from 'react';


export default function Pages5a() {
    const [lampOn, setLampOn] = useState("red");
    const NextColor = () => {
        if (lampOn === 'red') {
            setLampOn('green');
            
        } else if (lampOn === 'green') {
            setLampOn('yellow');
        } else {
            setLampOn('red');
        }

    }
    return (
        <div className='pages5'>
            <h3>Bảng hiệu giao thông</h3>
            <button type="button" className="btn btn_yellow" onClick={NextColor}>Click chuyển màu đèn</button>
            <div className='lamp'>
                <Lamp color={'red'} isOn={lampOn === 'red'}/>
                <Lamp color={'yellow'} isOn={lampOn === 'yellow'}/>
                <Lamp color={'green'} isOn={lampOn === 'green'}/>
            </div>
        </div>
    );
};