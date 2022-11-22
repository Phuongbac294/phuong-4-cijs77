import { useState } from "react";

export default function Pages9Container() {
    const [user, setUser] = useState({
        name : '',
        email : '',
        passwork : '',
    })
    const [datause, setDatause] = useState([])
    const Register = (event) => {
        event.preventDefault(); 
        setDatause([
            ...datause,
            user,
        ])
        setUser({
            name : '',
            email : '',
            passwork : '',
        })
        };
    
    const RegisterValue = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        setUser({
            ...user,
            [key] : value,
        })
    }

    console.log(datause);
    

    return (
        <div className="pages9-container">
            <form className="form-register" onSubmit={Register}>
                <h4>Đăng nhập</h4>
                <div>
                <input className="input-name" type='text' name='name' value={user.name} placeholder="Usename" onChange={RegisterValue }></input><br></br>
                <input className="input-name" type='passwork' name='passwork' value={user.passwork} placeholder="Passwork" onChange={RegisterValue }></input>
                </div>
                <button type="sumbit" className="btn-sumbit">Đăng nhập</button>
            </form>
        </div>
    );
}