import React from 'react';
import PostItm from './PostItm';

const PostList = ({posts, title, remove}) => {
      return (
            <div>
                  <h1 style={{ textAlign: 'center' }}>
                        {title}
                  </h1>
                  {
                        posts.map((post,index) =>
                              <PostItm remove={remove} number={index+1} post={post} key={posts.id} />
                        )
                        
                  }
                  
            </div>
      );
};

export default PostList;