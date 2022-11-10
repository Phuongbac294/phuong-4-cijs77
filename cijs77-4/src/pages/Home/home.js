import './home.css';
import { useState } from 'react';


function Home() {
  const [ison, setIson] = useState(true);
  // const use = {
  //   name : '',
  //   email : '',
  //   phone : '',
  //   address : '',
  //   city : '',
  //   password : '',
  //   confirmPassword : '',
  // }

  
    return (
        <div className="Home">
          <ul className="Home__list">
            <li classNamw="Home__list-item">
                <i class="fa-solid fa-house"></i>
            </li>
            <li className="Home__list-item">Lý thuyết</li>
            <li className="Home__list-item">Bài tập</li>
            <li className="Home__list-item">Bài làm</li>
          </ul>
          <ul className="Home__list">
            { ison === true ?
            <>
            <li className="Home__list-item">Đăng nhập</li>
            <li className="Home__list-item" onClick={()=>{setIson(!ison)}}>Đăng ký</li>
            </>
            :
            <li className="Home__list-item">Tài khoản</li>}
          </ul>
        </div>
      );
    }
    
    export default Home;