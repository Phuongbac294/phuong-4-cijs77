import Context from "./context"
import {useState} from 'react'

function LanguageProvider({children}) {
    const [language, setLanguage] = useState([{id : 'Vi',
            login: 'Đăng Nhập',
            usename: 'Nhập tên người dùng',
            passwork: 'Nhập mật khẩu',
            greet : 'Xin chào bạn ',
            error: 'Tên và mật khẩu không đúng'
        }])
    
    const [usedata, setUsedata] = useState([
        {id: '1', usename : 'Phương', passwork : '123456'},
        {id: '2', usename : 'Bắc', passwork : 'Bac123'},
        {id: '3', usename : 'Ngọc', passwork : 'Ngoc123'}
    ])

    const [use, setUse] = useState({ usename:'', passwork:''})
    const [login, setLogin] = useState(0)
    


    const languages = [
        {id : 'Vi',
        login: 'Đăng Nhập',
        usename: 'Nhập tên người dùng',
        passwork : "Nhập mật khẩu",
        greet : 'Xin chào bạn ',
        error: 'Tên và mật khẩu không đúng'
    },
        {id : 'En',
        login: 'Login',
        usename: 'usename',
        passwork : 'Passwork',
        greet : 'Wellcome ',
        error: 'Incorrect username and password'
    }
    ]
    

    const SelectLanguage = (e) => {        
        setLanguage(languages.filter(item => item.id === e.target.value))}    
        
    const RegisterValue = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        setUse({
            ...use,
            [key] : value,
        })
    }
    
    
    const LoginUse = (e) => {
        const name = use.usename
        const passwork = use.passwork
        const arr1 = usedata.filter(item => item.usename === name)
        const arr2 = arr1.filter(item => item.passwork === passwork)
        if (arr2.length === 1) {
            setLogin(1)}  
           else {setLogin(2)}
    }
    
    const value = {
        language,
        languages,
        use,
        usedata,
        login,
        SelectLanguage,
        LoginUse,
        RegisterValue
    }
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default LanguageProvider;