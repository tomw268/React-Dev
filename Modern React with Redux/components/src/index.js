import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today @ 6:00 pm</span>
          </div>
          <div className="text">Nice Blog Post!!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today @ 6:00 pm</span>
          </div>
          <div className="text">Nice Blog Post!!</div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
