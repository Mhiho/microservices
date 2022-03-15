import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateComment from './CreateComment';
import CommentList from './CommentList';

const PostList = () => {
    const [postList, setPostList] = useState({})

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4000/posts')   
        setPostList(response.data)
    }

    useEffect(() => {
        fetchPosts()
    },[])
    console.log(postList)
    return (

        <>
        <h4>Post List:</h4>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {
                Object.values(postList).map( (post,index) => (
                    <div className='card' style={{width: '30%', marginBottom: '20px'}} key={`post-${post.id}`}>
                        <div className='card-body'>
                            <h3>    
                            {post.title}
                            </h3>
                            <div>
                                <CommentList postId={post.id}/>
                            </div>
                            <h4>
                                <CreateComment postId={post.id}/>
                                </h4>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default PostList;