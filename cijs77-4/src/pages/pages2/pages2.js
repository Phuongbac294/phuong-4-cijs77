


function Pages2() {
    const languages = [
        {id : 'Vi',
        login: 'Đăng Nhập',
        usename: 'Nhập tên người dùng',
        greet : 'Xin chào bạn '},
        {id : 'En',
        login: 'Login',
        usename: 'usename',
        greet : 'Wellcome'}
    ]
    console.log(languages[0].id);
    const newarr = languages.filter(item =>
        item.id === 'Vi'
    )
    console.log(newarr);

    return (
        <div className='homework'>
           BÀI TẬP SỐ 2
        </div>
    );
    
}

export default Pages2;