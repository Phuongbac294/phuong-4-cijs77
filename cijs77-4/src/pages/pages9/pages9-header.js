import './pages9.css';
import { useState } from 'react';

export default function Pages9Header() {
    const [usename,setUsename] = useState('');
    // setUsename('phương');
    return (
        <div className="pages9-header">
            <div className="pages9-home">
                <div className="pages9-list">Mindx</div>
            </div>
            <div className="pages9-home">
                <div className="pages9-register">Login</div>
                {usename && <div className="pages9-register">Welcome, {usename}</div>}
            </div>
        </div>
    )
}