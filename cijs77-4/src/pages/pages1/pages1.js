import './pages1.css';
import { Reverset } from '../../Modules/math';
import { useState} from 'react';
import Input from './input';

function Pages1() {
    const ReverseText = () => {
        let str = document.getElementsByClassName('fristtext')[0].value;
        let text = document.createElement('p');
        text.innerText = 'Kết quả đảo ngược của chuỗi ' + str + ' là : ' + Reverset(str);
        document.getElementsByClassName('homework__item')[0].appendChild(text);
     }
    const [onpage1, setOnpage1] = useState(0);
    const [stringpage1, setStringpage1] = useState('');
    const [Result, setResult] = useState([])
    
    const HandleValue = (event) => {        
        setStringpage1(event.target.value);            
     }

 
    const HandlePage1Sumbit = (event) => {
        event.preventdefault();
        setStringpage1('');
        setResult([
            ...Result,
            stringpage1,
        ])        
      
     }
     
     const Resultlist = Result.map(item => {
        return (            
            <p>Kêt quả đảo ngược của chuỗi kỹ tự 
                <span style={{color :'red'}}> {item}</span> là : 
                <span style={{color :'violet'}}> {Reverset(item)}</span>
            </p>
        );
     })
 
    
    return (
        <div className='homework'>
            <h3 onClick={() => setOnpage1(1)}>Bài 1a : Đảo ngược các ký tự cách 1</h3>
            {onpage1 === 1 && 
                <div className='homework__item'>
                    <lable for="">Chuỗi ký tự nhập vào: </lable>
                    <input type="text" className="fristtext"/> <br></br><br></br>
                    <button type="button" className="btn btn_green" onClick={ReverseText}>ReverseText</button>
                </div>}

            <h3 onClick={() => setOnpage1(2)}>Bài 1b : Đảo ngược các ký tự cách 2</h3>
            {onpage1 === 2 && 
                <form className='homework__item' onSumbit={HandlePage1Sumbit}>
                    <input type='text' className='fristtext' value={stringpage1} onChange={HandleValue}></input><br></br>
                    <button type='sumbit' className='btn btn_green'>ReverseText</button>
                </form>
            }
            {Resultlist}

            <Input/>
        </div>
    );
    
}

export default Pages1;