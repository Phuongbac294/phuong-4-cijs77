import { useState, createContext } from "react";

const Context = createContext();

function LanguageContext({children}) {
    const [language, setLanguage] = useState({})


    const languages = [
        {id : 'Vi',
        login: 'Đăng Nhập',
        usename: 'Nhập tên người dùng',
        greet : 'Xin chào bạn '},
        {id : 'Eng',
        login: 'Login',
        usename: 'usename',
        greet : 'Wellcome'}
    ]

    const SelectLanguage = (e) => {
        setLanguage(languages.filter(language => language.id === e.target.value))}

    const value = {
        language,
        languages,
        SelectLanguage,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export { Context , LanguageContext}