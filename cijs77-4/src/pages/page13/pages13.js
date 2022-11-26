import { useReducer, useRef } from 'react';
import './pages13.css';

// 1. Init state
const initState = {
    job : '',
    jobs : []
}

// 2. Action
const SET_JOB = 'set_job'
const ADD_JOB = ' add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {         // payload - dữ liệu mang theo
    return {
        type : SET_JOB,
        payload
    }
}
const addJob = payload => {         
    return {
        type : ADD_JOB,
        payload
    }
}
const deleteJob = payload => {         
    return {
        type : DELETE_JOB,
        payload
    }
}

// 3. Reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job : action.payload
            }
            break;
        case ADD_JOB:
            newState ={
                ...state,
                jobs : [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState ={
                ...state,
                jobs : newJobs
            }
            break;
        default:
            throw new Error('Invalid action,')
    }
}

//4. Dispatch
function Pages13() {
    const initState = {
        job : '',
        jobs : []
    }
    
    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef()
    const { job, jobs} = state

    const HandleAdd = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    return (
        <div style={{padding: '0 20px'}}>
            <h1>To Do</h1>
            <input 
                ref={inputRef}
                value={job}
                placeholder='Enter here'
            //     onChange={e => {
            //         dispatch(setJob(e.target.value))
            //     }}
            />
            <button className='btn' onClick={HandleAdd}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&time;</span></li>
                ))}
            </ul>
        </div>
    );
}

export default Pages13;