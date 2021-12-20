import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PropsDemo = (props) => {
    // console.log(props?.message);
    const [apiArr, setApiArr] = useState([])
    const [allArray, setAllArray] = useState([])
    const [apiCallsCount, setApiCallsCount] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 3000)
    }, [])

    useEffect(() => {
        if (allArray?.length && currentIndex <= 5000) {
            setTimeout(() => {
            setApiArr(allArray?.slice(currentIndex, currentIndex + 10))
            setCurrentIndex(currentIndex + 50)
            setApiCallsCount(apiCallsCount + 1)
            }, 300)
        } else {
            console.log('else...');
        }
    }, [apiCallsCount])

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
            // console.log(res.data);
            setApiArr(res?.data?.slice(0, 10))
            setAllArray(res?.data)
            setCurrentIndex(10)
            setApiCallsCount(1)
        })
    }

    return (
        <div>
            <h1>Prop Message</h1>
            <p>{props?.message}</p>
            <p>Api Calls: {apiCallsCount}</p>
            <p>Current Index: {currentIndex}</p>
            <div>
                {!apiArr?.length ? <p>Loading Data...</p> :
                apiArr.map((v, i) => {
                    return (
                        <div key={i}>
                            <p>{v?.title}</p>
                            <img src={v?.thumbnailUrl} alt={v?.title} />
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