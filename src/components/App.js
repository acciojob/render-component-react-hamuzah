import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <p>I am learning React. My life is getting better.</p>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);