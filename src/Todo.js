import { useState } from 'react';

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input name='task' value={task} placeholder='Type here...' onChange={e => setTask(e?.target?.value)}/>
                <button>Add Todo</button>
            </div>
        </div>
    )
}

export default Todo;