import React, { useState } from 'react'
import Counter from './Components/Counter';
import PostItm from './Components/PostItm';
import PostList from './Components/PostList';
import './style/App.css';
import MyButton from './Components/UI/Button/MyButton.jsx';
import MyInput from './Components/UI/Input/MyInput';
import PostForm from './Components/PostForm';



function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: "Descriptions" },
    { id: 2, title: 'JavaScript 2', body: "Descriptions" },
    { id: 3, title: 'JavaScript 3', body: "Descriptions" },
  ])

 const createPost = (newPost) => {
setPosts([...posts,newPost])
 }
 const removePost = (post) => {
    setPosts(posts.filter(p => p.id !==post.id))
 }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      {posts.length !=0
      ?<PostList remove={removePost} posts={posts} title="Post list 1" /> 
      :<h1 style={{textAlign: 'center'}}>Posts not found</h1>
      }
      
      
    </div>
  );
}

export default App;
