import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './routes/Homepage';
import TodoListPage from './routes/TodoListPage.js';
import CreateTodoPage from './routes/CreateTodoPage';
import Dashboard from './routes/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/todo-list' element={<TodoListPage />}/>
        <Route path='/create-todo' element={<CreateTodoPage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;