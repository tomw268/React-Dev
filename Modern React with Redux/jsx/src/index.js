// Import React and ReactDom libs
import React from 'react';
import ReactDom from 'react-dom';

// Create a React component
const App = () => {
  const buttonText = 'Click Me!';
  return (
    <div>
      <label for="name" className="label">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the react component and show on screen
ReactDom.render(<App />, document.querySelector('#root'));
