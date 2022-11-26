import { useStore, action} from './store'

function Pages12_1() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    const handleAdd = () => {
        dispatch(action.addTodo(todoInput))
    }
    return (
        <div>
            <h3>Hello bài giảng</h3>
            <input 
                value={todoInput}
                placeholder="Enter todo ..."
                onChange={e => {
                    dispatch(action.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>ADD</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    )
}
export default Pages12_1