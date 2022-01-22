import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoListContextProvider from './contexts/TodoListContext';


ReactDOM.render(
  <React.StrictMode>
    <TodoListContextProvider>
      <App />
    </TodoListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);