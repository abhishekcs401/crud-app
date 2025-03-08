import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../features/posts/postSlice';
function PostList({posts}) {
const dispatch = useDispatch()

const handleDelete = id =>{
  dispatch(remove(id))
}
  return (
    <div className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <h3 className="text-center">Submitted Posts</h3>
          {posts?.length === 0 ? (
            <p className="text-center text-muted">No posts yet.</p>
          ) : (
            <ul className="list-group">
              {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                  <h5>
                    {post.name}{" "}
                    <small className="text-muted">by {post.author}</small>
                  </h5>
                  <p>{post.desc}</p>
                  <Link to={`/editpost/${post.id}`}>
                    <button
                      className="btn btn-primary btn-sm"
                    >
                      Edit 🗑️
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete 🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostList