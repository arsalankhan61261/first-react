import { useEffect, useState } from 'react';
import {button} from 'antd'

const Count = (props) => {
    const [name, setName] = useState('')
    const [wordCount, setWordsCount] = useState(0)
    const [obj, setObj] = useState({})

    useEffect(() => {
        console.log(props?.todoTask);
    }, [props?.todoTask])

    function updateName (e) {
        let value = e?.target?.value
        setName(value)
        // console.log(value);
        setWordsCount(value?.trim()?.split(' ')?.length)
        // console.log(value?.trim()?.split(' '));

        let wordsArray = value?.trim()?.split(' ')

        for (var val of wordsArray) {
            val = val?.toLowerCase()
            if (!obj[val]) {
                obj[val] = 1
                // console.log(obj)
            } else {
                obj[val]++
            }   
        }
        setObj({...obj})
    }
    return (
        <div>
            <div className='logout'>
                <button type='dashed'>Logout</button>
            </div>
            <h1>{name}</h1>
            <input placeholder = 'Enter your name here...' onChange={updateName}/>
            <p>Characters Count: {name?.trim()?.length}</p>
            <p>Words Count: {wordCount}</p>

            <div>
                {Object.entries(obj)?.map((v, i) => {
                    // console.log(Object.entries(obj))
                    return <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)}: ${v[1]}`}</p>
                })}
            </div>
        </div>
    )

}

export default Count;