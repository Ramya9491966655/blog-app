import React, { useState } from 'react';
import PostList from './Comp/postlist';
import CreatePost from './Comp/createpost';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog Post", content: "This is my first blog post!" },
    { id: 2, title: "Another Blog Post", content: "This is another blog post content." },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <CreatePost addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
