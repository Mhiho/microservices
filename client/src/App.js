import React, { useState } from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

export default () => {
    return ( 
    <>
        <CreatePost />
        <hr></hr>
        <PostList />
    </>
    )}