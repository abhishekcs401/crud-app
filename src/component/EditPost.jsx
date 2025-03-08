import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostForm from './PostForm';
function EditPost() {
    const postId = useParams().id;
    const posts = useSelector((state) => state.posts.entries);
    const selectedPost = posts.find(post=>post.id===postId)
  return (
    <div className="container">
      <PostForm selectedPost={selectedPost} />
    
    </div>
  );
}

export default EditPost