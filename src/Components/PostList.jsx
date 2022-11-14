import React from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import PostItm from './PostItm';

const PostList = ({ posts, title, remove }) => {

      if (!posts.length) {
            return (
                  <h1 style={{ textAlign: 'center' }}>
                        Posts not found
                  </h1>
            )
      }

      return (
            <div>
                  <h1 style={{ textAlign: 'center' }}>
                        {title}
                  </h1>
                  <TransitionGroup>
                        {
                              posts.map((post, index) =>
                                    <CSSTransition
                                          key={post.id}
                                          timeout={500}
                                          classNames="post"
                                    >
                                          <PostItm remove={remove} number={index + 1} post={post} />
                                    </CSSTransition>

                              )}
                  </TransitionGroup>
            </div>
      );
};

export default PostList;