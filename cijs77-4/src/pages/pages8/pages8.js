// import './pages1.css';
import { useState } from "react";
import Pages81 from "./pages81";
import Pages82 from "./pages82";
import Pages83 from "./pages83";
import Pages84 from "./pages84";

function Pages8() {
    const [togge, setTogge] = useState(true)
    const [togge1, setTogge1] = useState(true)
    return (
        <div className='homework'>
           <h1>useEffect</h1>
           <button className="btn" onClick={() => setTogge(!togge)}>Togge</button>
           {togge ? 
            <Pages81/> :
            <Pages82/> }
            <button className="btn" onClick={() => setTogge1(!togge1)}>Togge1</button>
            {togge1 && <Pages83/>}
            <Pages84/>
        </div>
    );
    
}

export default Pages8;