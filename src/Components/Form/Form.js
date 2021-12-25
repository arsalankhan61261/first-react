import { useState } from 'react'

const Form = () => {
    const [state, setState] = useState({
        username: '',
        age: '',
    })

    const onchange = (e) => {
        setState({...state, [e?.target?.name]: e?.target?.value})
    }

    const submit = (e) => {
        e?.preventdefault()
        console.log('Submitted');
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
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;