import { useState, createContext } from "react";
const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')
    const HandleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const value = {
        theme,
        HandleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
           {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};