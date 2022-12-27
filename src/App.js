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
import { usePosts } from './Components/Hooks/usePosts';
import { useEffect } from 'react';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './Components/UI/Loader/Loader';
import { useFetching } from './Components/Hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';




function App() {


  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {

    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>

      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create user
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }}></hr>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {postError &&
        <h1>Error ${postError}</h1>
      }

      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', matginTop: 50 }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSeachedPosts} title="Post list 1" />
      }

      <div className='page__wrapper'>
        {pagesArray.map(p =>
          <span className='page'>{p}</span>
        )}
      </div>

    </div>
  );
}

export default App;
