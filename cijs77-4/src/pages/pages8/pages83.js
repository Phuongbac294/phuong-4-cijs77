import { useState, useEffect } from "react";

function Pages83() {
    const [countdown, setCountdown]= useState(180)

    // useEffect(()=> {
    //     const timerId = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)
    //     }, 1000)
    //     return () => clearInterval(timerId)
    // }, [])

    useEffect(()=> {
        setTimeout(() => {
            setCountdown(countdown - 1)
        }, 1000)

    }, [countdown])

    const [avatar, setAvatar] = useState()
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar =(e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <div>
            <h1>{countdown}</h1>
            <input
                type='file'
                onChange={handlePreviewAvatar}
            />
            { avatar && (
                 <img src={avatar.preview} all="" width='80%'/>
            )}
        </div>
    );
}

export default Pages83;