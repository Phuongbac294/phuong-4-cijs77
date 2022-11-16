import './pages7.css';
import { useState } from 'react';

export default function Pages7() {
    const [todoItems, setTodoItems] = useState(['home work', ' shopping']);
    const [usename, setUsename] = useState({
        name : '',
        emali :'',
    });

    const todoItemLi = todoItems.map(item => {
        return <li>{item}</li>
    })
    const handelSumbit = (event) => {
        event.preventDefault();
        setTodoItems([
            ...todoItems,
            usename.email,
        ])
    };
    const handValueChange = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        setUsename({
            ...usename,
            [key] : value,
        });        
    }
    return (
        <div>
            <form noValidate onSubmit={handelSumbit}>
                <input type='text' name='name'  value={usename.name} onChange={handValueChange}></input><br></br>
                <input type='email' name='email' value={usename.email} onChange={handValueChange}></input><br></br>
                <button onClick={handelSumbit}>Add</button>
            </form>
			<ul>
				{todoItemLi}
			</ul>
		</div>
    );
}