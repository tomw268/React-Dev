// Import React and ReactDom libs
import React from 'react';
import ReactDom from 'react-dom';

// Create a React component
const App = () => {
  const buttonText = 'Click Me!';
  const labelText = 'Enter Name';
  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
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
