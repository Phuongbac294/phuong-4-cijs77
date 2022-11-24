import { useEffect, useState } from "react";

// 1. useEffect ( callback)
// - gọi callback mõi khi component re-render
// - gọi callback sau khi component thực thêm element vào DOM
// 2. useEffect ( callback, [])
// 3. useEffect ( callback, [deps])

// -------
// 1. Callback luôn dược gọi sau khi componment maounted
const tabs = ['posts', 'comments', 'albums']

function Pages82() {
    const [title, setTitle] = useState("")
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })        
    },[type])

    useEffect(() => {
        const handleScroll =() => {
            if (window.scrollY >=200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll) // xỏa đỏ lênh add để bảo vệ bộ nhớ tránh rò rỉ
        }
    },[])


    return(
        <div>
            {tabs.map(tab => (
                < button className="btn"
                    key={tab}
                    style={type === tab ? {color: '#FFF', background: '#333'} : {}}
                    onClick={()=> setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={e =>setTitle(e.target.value)}
            />
            {posts.map(post => (
                <li key={post.id }>{post.title || post.name}</li>
            ))}

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right : 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    );
}

export default Pages82;