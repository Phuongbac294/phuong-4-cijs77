import './pages1.css';
// import Reverset from '../../Modules/math';'../../Modules/math.js';

function Pages1() {
    const ReverseText = () => {
        let str = document.getElementsByClassName('fristtext')[0].value;
        const Reverset = (str) => str.split("").reverse().join("");
        let text = document.createElement('p');

        text.innerText = 'Kết quả đảo ngược của chuỗi ' + str + ' là : ' + Reverset(str);
        document.getElementsByClassName('homework__item')[0].appendChild(text);
    }
    
    return (
        <div className='homework'>
            <h3>Bài 1 : Đảo ngược các ký tự</h3>
            <div className='homework__item'>
                <lable for="">Chuỗi ký tự nhập vào: </lable>
                <input type="text" className="fristtext"/> <br></br><br></br>
                <button type="button" className="btn btn_green" onClick={ReverseText}>ReverseText</button>
            </div>
        </div>
    );
    
}

export default Pages1;