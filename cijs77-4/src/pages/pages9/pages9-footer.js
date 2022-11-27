import { useContext } from "react";
import {LanguageContext} from './Storepage9/context'


export default function Pages9Footer() {
    const toogle = useContext(LanguageContext)
    
    return (
        <div className="pages9-footer">
            <select className="pages9-option" name="option" onChange={toogle.SelectLanguage}>                
                <option value={toogle.languages[0].id}>{toogle.languages[0].id}</option>
                <option value={toogle.languages[1].id}>{toogle.languages[1].id}</option>                
            </select>
            
        </div>
    );
}