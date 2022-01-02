import React from 'react'
import { PostItem } from './PostItem'

export const Posts = () => {
    const posts = []

    return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {
                    posts.map((post, index) => <PostItem key={index} post={post} />)
                }
            </ul>
        </div>
    )
}

export default Posts;
