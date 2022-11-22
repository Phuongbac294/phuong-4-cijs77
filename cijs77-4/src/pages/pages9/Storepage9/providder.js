import { useReducer } from "react";
import Context from "./context";
import reducer, { initState } from "./reducer";


function Provider({chidren}) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            {chidren}
        </Context.Provider>
    )
}