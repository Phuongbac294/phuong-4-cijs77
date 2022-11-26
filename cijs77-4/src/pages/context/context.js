import Context1 from "./context1";
import {ThemeContext} from './ThemeContext'
import {useContext} from 'react'

function Context() {
    const context = useContext(ThemeContext)
    return (
            <div >
                <button className="btn" onClick={context.HandleTheme}>Togge Theme</button>
                <Context1 />
            </div>
        
    )
}
export default Context;