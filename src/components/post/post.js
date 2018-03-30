import React from 'react';
import './post.css';
import { Avatar } from '../avatar';
import { Comment } from './comment.js';

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }

  handleCommentsSubmission(event) {
    event.preventDefault();
    const text = event.target[0].value;

    // create a comment
    const comment =  {
      owner: 'sweetnamese',
      text: text,
    }

    // add the comment and create a new comment
    const comments = this.state.comments;
    comments.push(comment);

    //update the state
    this.setState({
      comments: comments
    })

    event.target[0].value = '';
  }

  render() {
    return
      <div className="post">
        <div className="post__header">
          <div className="post__avatar">
            <Avatar avatarUrl={this.props.owner.avatarUrl} />
          </div>
          <div className="post__header-info">
            <div><b>{this.props.owner.name}</b></div>
            <div>{this.props.location}</div>
          </div>
        </div>
        <img className="post__img" src={this.props.imageUrl} alt='post'/>
        <div className="post__body">
          <div className="post__likes"><b>{this.props.likes} likes</b></div>
          { this.props.comments.map(comment => <Comment owner={comment.owner} text={comment.text} />) }
          <hr className="post__body-separator" />
          <input placeholder="Add a comment..." className="post__comment-input"/>
        </div>
      </div>
  }
}
