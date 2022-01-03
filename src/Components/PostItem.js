import React from 'react'

const PostItem = ({post: {title, body}}) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    )
}

export default PostItem;
