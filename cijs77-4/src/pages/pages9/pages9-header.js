import { useContext } from 'react';
import './pages9.css';
import Context from "./Storepage9/context";

export default function Pages9Header() {
    const hear = useContext(Context)
   
    return (
        <div className="pages9-header">
            <div className="pages9-home">
                <div className="pages9-list">Mindx</div>
            </div>
            <div className="pages9-home">
                {hear.login === 0 && <div className="pages9-register">{hear.language[0].login}</div>}
                {hear.login === 1 && <div className="pages9-register">{hear.use.usename}</div>} 
            </div>
        </div>
    )
}