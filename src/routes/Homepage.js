import React from 'react';
import { Link } from 'react-router-dom';

//custom hook:
import { useTodosContext } from '../contexts/TodoListContext.js';


export default function Home() {
  const { todos } = useTodosContext();

  return (
    <>
      <header>
        <nav>
          <div>
            logo
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/todo-list">Todo list</Link></li>
            <li><Link to="//create-todo">New Todo</Link></li>
          </ul>
        </nav>
      </header>
      <content>
        <div className='todo-list-container'>
          {
            todos.map((todoItem) => {
              <div class="todo-item">
                TODO: {todoItem.description}
                Created At: {todoItem.createdAt}
                Color to be used to the container so it looks unique: { todoItem.color}
              </div>
            })
          }
        </div>
      </content>
    </>
  )
}