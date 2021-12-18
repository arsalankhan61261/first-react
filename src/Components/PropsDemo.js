import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PropsDemo = (props) => {
    // console.log(props?.message);
    const [apiArr, setApiArr] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
        .then((res) => {
            // console.log(res.data);
            setApiArr(res?.data)
        }, 5000)
    }, [])

    return (
        <div>
            <h1>Props Message</h1>
            <p>{props?.message}</p>
            <div>
                {!apiArr?.length ? <p>Loading Data...</p> :
                apiArr.map((v, i) => {
                    return (
                        <div key={i}>
                            <p>{v?.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

PropsDemo.propTypes = {
    message: PropTypes?.string?.isRequired,
}

PropsDemo.defaultProps = {
    message: 'This is Default Prop'
}

export default PropsDemo;