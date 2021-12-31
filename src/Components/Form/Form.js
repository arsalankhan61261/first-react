import { useState, useContext } from 'react'
// import globalContext from '../../Context/Global/globalContext'

const Form = ({addStudent}) => {
    // const { addStudent } = useContext(globalContext)

    const [state, setState] = useState({
        username: '',
        age: '',
    })

    const onchange = (e) => {
        setState({...state, [e?.target?.name]: e?.target?.value})
    }

    const submit = (e) => {
        e?.preventDefault()
        const {username, age} = state
        if (username === '' || age === '') {
            alert('Please fill inputs')
        } else {
            addStudent(state)
            // console.log(state);
            setState({
                username: '',
                age: '',
            })
        }
    }

    return (
        <form onSubmit={submit}>
            <h2>Add Students</h2>
            <div className="form-control">
                <label htmlFor="username">Username:</label>
                &nbsp;
                <input type="text" name="username" id="username" value={state.username} onChange={onchange} placeholder="Enter name here" />
            </div>
            <div className="form-control">
                <label htmlFor="age">Age:</label>
                &nbsp;
                <input type="text" name="age" id="age" value={state.age} onChange={onchange} placeholder="Enter age here" />
            </div>
            <button onClick={submit}>Add</button>
            {/* <input type="submit" value="Add" /> */}
        </form>
    )
}

export default Form;