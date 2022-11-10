import './home.css';
// import  useState  from 'react';

export default function Register() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [error, setError] = useState('');

    return (
        <form>
            <h3>Đăng ký</h3>
            <input type="text" name="name" placeholder="Tên đăng nhập"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirmPassword" placeholder="confirmPassword"/>
            <button type="submit" name="register">Đăng ký</button>
        </form>
    );
}