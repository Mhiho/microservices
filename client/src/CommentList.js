import React from 'react';
import axios from 'axios';

const CommentList = ({ comments }) => {
    return (
        <>
        <h4>Comments:</h4>
        <ul>
            {
                comments.map( (comment,index) => (
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