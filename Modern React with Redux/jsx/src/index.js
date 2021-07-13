// Import React and ReactDom libs
import React from 'react';
import ReactDom from 'react-dom';
// Create a React component
const App = () => {
  return <div>Hi There!</div>;
};
// Take the react component and show on screen
ReactDom.render(<App />, document.querySelector('#root'));
