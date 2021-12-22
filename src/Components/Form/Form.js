import { useState } from 'react'

const Form = () => {

    const submit = (e) => {
        e?.preventdefault()
        console.log('Submitted');
    }

    return (
        <form onSubmit={submit}>
            <h2>Add Players</h2>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter name here" />
            </div>
            <div className="form-control">
                <label htmlFor="age">Age</label>
                <input type="text" id="age" placeholder="Enter age here" />
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;