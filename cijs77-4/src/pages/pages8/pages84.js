import { useState, useEffect } from "react";

const lessons = [
    {id:1, name: 'ReactJS là gì? tại sao nên học ReactJs?'},
    {id: 2, name: 'SPA/MPA là gì?'},
    {id: 3, name: 'Arrow function'}
]

function Pages84() {
    const [lessonId, setLessonId] = useState(1)
    useEffect(() =>{
        const handleComment = ({ detail}) => {

        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li 
                    key={lesson.id}
                    style={{color: lessonId === lesson.id ? 'red' : '#333'}}
                    onClick={()=> setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pages84;