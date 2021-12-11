import { useState } from "react";

const Count = () => {
    const [name, setName] = useState('')
    const [wordCount, setWordsCount] = useState(0)

    function updateName (e) {
        setName(e?.target?.value)
        setWordsCount(e?.target?.value?.trim()?.split(' ')?.length)
    }
    return (
        <div>
            <h1>{name}</h1>
            <input placeholder = 'Enter your name here' onChange={updateName}/>
            <p>Characters Count: {name?.trim()?.length}</p>
            <p>Words Count: {wordCount}</p>  
        </div>
    )

}

export default Count;