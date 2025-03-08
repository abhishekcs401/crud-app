import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create, update } from "../features/posts/postSlice";
function PostForm({ selectedPost }) {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: selectedPost?.id || "",
    name: selectedPost?.name || "",
    author: selectedPost?.author || "",
    desc: selectedPost?.desc || "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPost) {
      // If editing, dispatch update
      dispatch(update(formData));
    } else {
      // If creating a new post
      const newPost = {
        id: nanoid(),
        name: formData.name,
        author: formData.author,
        desc: formData.desc,
      };
      dispatch(create(newPost));
    }

    // Reset form after submit
    setFormData({ id: "", name: "", author: "", desc: "" });
    navigate("/");
  
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 shadow">
              <h3 className="text-center mb-3">Post Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Auther</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter your author"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="desc"
                    rows="3"
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="Enter description"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {selectedPost?"Update":"Create"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
