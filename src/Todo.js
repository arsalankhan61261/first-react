import { useState } from 'react';

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    const [isEdit, setEdit] = useState(false)
    const [updateIndex, setIndex] = useState(null)
    
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
        cancelUpdate();
    }

    const editTodo = (index) => {
        setTask(arr[index])
        setEdit(true)
        setIndex(index)
    }

    const cancelUpdate = () => {
        setEdit(false) 
        setTask('')       
    }

    const updateTodo = () => {
        arr[updateIndex] = task
        setEdit(false)
        setArr([...arr])
        setIndex(null)
        cancelUpdate()
    }

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input name='task' value={task} placeholder='Type here...'
                onChange={e => setTask(e?.target?.value)}/>&nbsp;
                {!isEdit ? <button onClick={addTodo}>Add Todo</button> : <span>
                    <button onClick={updateTodo}>Update</button>&nbsp;
                    <button onClick={cancelUpdate}>Cancel</button>
                    </span>}                                     
            </div>
            <ol>
                {arr?.map((v, i) => {
                    return <li key={i}><span>{v}</span>
                    &nbsp;&nbsp;
                    <button onClick={() => editTodo(i)}>Edit</button>
                    &nbsp;&nbsp;
                    <button onClick={() => deleteTodo(i)}>Delete</button>
                    </li>
                })}
            </ol>
        </div>
    )
}

export default Todo;