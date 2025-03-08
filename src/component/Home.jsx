import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from "./PostForm";
import PostList from './PostList';
function Home() {
  const posts = useSelector((state) => state.posts.entries);
 
  return (
    <section className="d-flex justify-content-center align-items-center vh-100">
      <PostForm/>
      <PostList posts ={posts}/>
    </section>
  );
}

export default Home