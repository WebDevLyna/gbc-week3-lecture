import React from 'react';
import { Post } from '../post';
import './timeline.css'

export const Timeline = (props) => (
  <div className="timeline">
    <div className="timeline__post-container">
      { props.posts.map(post => (
        <div className="timeline__post">
          <Post
            owner={post.owner}
            location={post.location}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
          />
        </div>) )
      }
    </div>
  </div>
);
