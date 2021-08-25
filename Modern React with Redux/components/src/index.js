import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today @ 4:50PM" />
      <CommentDetail author="Alex" timeAgo="Today @ 2AM" />
      <CommentDetail author="Jane" timeAgo="Yesterday @ 5PM" />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
