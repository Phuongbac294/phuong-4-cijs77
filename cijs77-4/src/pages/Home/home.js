import './home.css';


function Home() {
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
            <li className="Home__list-item">Đăng nhập</li>
            <li className="Home__list-item">Đăng ký</li>
            <li className="Home__list-item">Tài khoản</li>
          </ul>
        </div>
      );
    }
    
    export default Home;