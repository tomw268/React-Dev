import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today @ 4:50PM"
        text="Nice Blog Post"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Today @ 2AM"
        text="I hated this one!!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday @ 5PM"
        text="Dude love this, best one yet"
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));
