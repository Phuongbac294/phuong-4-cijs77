import { useContext } from "react";
import Context from "./Storepage9/context";


export default function Pages9Footer() {
    const toogle = useContext(Context)
    
    return (
        <div className="pages9-footer">
            <select className="pages9-option" name="option" onChange={toogle.SelectLanguage}>                
                <option value='Vi'>Vi</option>
                <option value='En'>En</option>                
            </select>
            
        </div>
    );
}