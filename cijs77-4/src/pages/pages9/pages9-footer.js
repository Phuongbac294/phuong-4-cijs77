import { useContext } from "react";
import { LanguageContext } from "./languageContext";

export default function Pages9Footer() {
    const toogle = useContext(LanguageContext)
    // console.log(toogleTheme);
    return (
        <div className="pages9-footer">
            <select className="pages9-option" name="option" onChange={toogle.toogleLanguage}>                
                <option value="1">Vietnam</option>
                <option value="2">English</option>                
            </select>
            <select className="pages9-option" name="option" >                
                <option value="light">Light</option>
                <option value="dart">Dart</option>                
            </select>
        </div>
    );
}