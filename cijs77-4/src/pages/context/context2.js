import {useContext} from 'react'
import { ThemeContext} from './ThemeContext'

function Context2() {
    const context = useContext(ThemeContext)
    return (
        <div className={context.theme}>
            <h1>Context</h1>
            <h3>Context Provider là một component của React. Nhiệm vụ của Provider là cho phép các component con được phép nhận sự thay đổi từ trong context.
Context Provider nhận vào một props là value. Đây là giá trị mà tất cả các descendants nodes nằm trong provider có thể nhận được thông qua Context Consumer.</h3>
        </div>
    )
}
export default Context2;