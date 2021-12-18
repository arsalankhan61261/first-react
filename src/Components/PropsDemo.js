import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const PropsDemo = (props) => {
    // console.log(props?.message);
    return (
        <div>
            <h1>Props Message</h1>
            <p>{props?.message}</p>
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