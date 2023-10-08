import React, { useState } from 'react';

function PostForm({ onPost }) {
  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username: 'Ezz_kalash',
      title: formData.title,
      caption: formData.caption,
      imageUrl: formData.imageUrl,
    };

    onPost(newPost);

    setFormData({
      title: '',
      caption: '',
      imageUrl: '',
    });
  };

  return (
    <div className="post-form">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div >
          <label htmlFor="caption">Caption:</label>
          <textarea
            id="caption"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
          />
        </div>
        <div >
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
