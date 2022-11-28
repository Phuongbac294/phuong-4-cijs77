import { useContext } from "react";
import Context from "./Storepage9/context";

export default function Pages9Container() {
    const contai = useContext(Context)
    
   
    return (
        <div className="pages9-container">
            {contai.login === 0 &&
            <form className="form-register">                
                <h4>{contai.language[0].login}</h4>
                <div>
                <input className="input-name" type='text' name={Object.keys(contai.use)[0]} value={contai.use.usename} placeholder={contai.language[0].usename} onChange={contai.RegisterValue }></input><br></br>
                <input className="input-name" type='passwork' name={Object.keys(contai.use)[1]} value={contai.use.passwork} placeholder={contai.language[0].passwork} onChange={contai.RegisterValue }></input>
                </div>
                <button type="sumbit" className="btn-sumbit" onClick={contai.LoginUse}>{contai.language[0].login}</button>
            </form>}
            {contai.login === 1 && <h1>{contai.language[0].greet + contai.use.usename}</h1>}
            {contai.login === 2 && <h1>{contai.language[0].error}</h1>}
        </div>
    );
}