import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className="Home">
          <ul className="Home__list">
            <li classNamw="Home__list-item"><FontAwesomeIcon icon={faHouse} className='icon'/></li>
            <li className="Home__list-item">Lý thuyết</li>
            <li className="Home__list-item">Bài tập</li>
            <li className="Home__list-item">Bài làm</li>
          </ul>
          <ul className="Home__list">
            <li className="Home__list-item">Đăng nhập</li>
            <li className="Home__list-item">Đăng ký</li>
            <li className="Home__list-item">Tài khoản</li>
          </ul>
        </div>
      );
    }
    
    export default Home;