import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [commentList, setCommentList] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:4001/posts/${postId}/comments`)   
        setCommentList(response.data)
    }

    useEffect(() => {
        fetchData()
    },[])
    console.log(commentList)
    return (

        <>
        <h4>Comments:</h4>
        <ul>
            {
                commentList.map( (comment,index) => (
                    <li key={`comment-${comment.id}`}>
                        <div>
                            <h3>    
                            {comment.content}
                            </h3>
                            <h4>
                                </h4>
                        </div>
                    </li>
                ))
            }
        </ul>
        </>
    )
}
export default CommentList;