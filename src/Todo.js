import { useState } from 'react';

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    
    const addTodo = () => {
        // console.log(task);
        if (!task?.length) {
            alert('Please enter Task')
        } else {
            arr?.push(task)
            setArr(arr)
            // console.log(arr);
        }
        setTask('')
    }

    const deleteTodo = (index) => {
        arr?.splice(index, 1)
        setArr([...arr])
    }

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input name='task' value={task} placeholder='Type here...'
                onChange={e => setTask(e?.target?.value)}/>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ol>
                {arr?.map((v, i) => {
                    return <li key={i}><span>{v}</span>
                    &nbsp;&nbsp;
                    <button onClick={() => deleteTodo(i)}>Delete</button>
                    </li>
                })}
            </ol>
        </div>
    )
}

export default Todo;