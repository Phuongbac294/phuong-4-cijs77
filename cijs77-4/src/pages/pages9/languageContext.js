import { useState, createContext } from "react";


const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('vi')
    const [theme, setTheme] = useState('light')
    const toogleLanguage = () => {
        setLanguage(language === 'vi' ? 'eng' : 'vi')
    }
    const toogleTheme = () => {
        setTheme(theme === 'light' ? 'dart' : 'light')
    }
    const value = {
        language,
        theme,
        toogleLanguage,
        toogleTheme,
    }
    return (
        <LanguageContext.Provider value={value}>
            { children }
        </LanguageContext.Provider>
    );
}

export {LanguageContext, LanguageProvider};