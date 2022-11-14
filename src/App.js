import React, { useMemo, useState } from 'react'
import Counter from './Components/Counter';
import PostItm from './Components/PostItm';
import PostList from './Components/PostList';
import './style/App.css';
import MyButton from './Components/UI/Button/MyButton.jsx';
import MyInput from './Components/UI/Input/MyInput';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/Select/MySelect';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';




function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: "aa" },
    { id: 2, title: 'bb', body: "bb" },
    { id: 3, title: 'cc', body: "cc" },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSeachedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyModal visible={true}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }}></hr>
      <PostFilter
        filter={filter} 
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts={sortedAndSeachedPosts} title="Post list 1" />
    </div>
  );
}

export default App;
