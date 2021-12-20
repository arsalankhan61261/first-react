import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PropsDemo = (props) => {
    console.log(props?.message);
    const [apiArr, setApiArr] = useState([])

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
            // console.log(res.data);
            setApiArr(res?.data?.slice(0, 10))
            })
        }, 2000)
    }, [])

    return (
        <div>
            <h1>Prop Message</h1>
            <p>{props?.message}</p>
            <p>Api Calls: {props?.apiCallsCount}</p>
            <div>
                {!apiArr?.length ? <p>Loading Data...</p> :
                apiArr.map((v, i) => {
                    return (
                        <div key={i}>
                            <p>{v?.title}</p>
                            <img src={v?.url} alt={v?.title} />
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