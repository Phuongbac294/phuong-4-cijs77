import { useReducer, useRef } from 'react';
import './pages13.css';

// 1. Init state
const initState = {
    job : '',
    amount : '',
    obj : {name : this.job, amount : this.amount},
    jobs : []
}

// 2. Action
const SET_JOB = 'set_job'
const GET_AMOUNT = 'get_amount'
const ADD_OBJ = 'add_obj'
const ADD_JOB = ' add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {         // payload - dữ liệu mang theo
    return {
        type : SET_JOB,
        payload
    }
}
const getAmount = payload => {         
    return {
        type : GET_AMOUNT,
        payload
    }
}
const addObj = payload => {
    return {
        type : ADD_OBJ,
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
    
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job : action.payload
            }
        case GET_AMOUNT:
            return {
                ...state,
                amount : action.payload
            }
        case ADD_OBJ:
            return {
                ...state,
                obj : action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs : [...state.jobs, action.payload]
            }
        
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
             return {
                ...state,
                jobs : newJobs
            }
            
        default:
            throw new Error('Invalid action,')
    }
}
console.log(initState.obj);
//4. Dispatch
function Pages13() {
    
    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef()
    const { job, obj, amount, jobs} = state

    const HandleAdd = () => {
        dispatch(addJob(obj))
        
        dispatch(getAmount(''))
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
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            /><br/>
            <input 
                type='number'
                ref={inputRef}
                value={amount}
                placeholder='Enter here'
                onChange={e => {
                    dispatch(getAmount(e.target.value))
                }}
            /><br/>
            <button className='btn' onClick={HandleAdd}>ADD</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}<span onClick={() => dispatch(deleteJob(index))}> x</span></li>
                ))}
            </ul>
        </div>
    );
}

export default Pages13;