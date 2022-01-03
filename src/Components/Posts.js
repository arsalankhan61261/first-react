import React from 'react'
import PostItem from './PostItem'

export const Posts = () => {
    const posts = [
        {
            title: 'Arsalan',
            body: 'Arsalan is a good boy'
        },
        {
            title: 'Salman',
            body: 'I think Salman is also a good boy'
        },
    ];

    return (    
        <div>
            <h2>All Posts</h2>
            <ul>
                {
                    posts.map((post, index) => <PostItem key={index} post={post}/>)
                }
            </ul>
        </div>
    )
}

export default Posts;
