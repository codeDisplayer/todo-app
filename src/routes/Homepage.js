import React from 'react';

//custom hook:
import { useTodosContext } from '../contexts/TodoListContext.js';


export default function Home() {
  const { todos } = useTodosContext();

  return (
    <>
      <div>
        <div className='todo-list-container'>
          {
            todos.map((todoItem, index) => {
              return <div className="todo-item" key={`todo-${index}`}>
                TODO: {todoItem.description}
                Created At: {todoItem.createdAt}
                Color to be used to the container so it looks unique: { todoItem.color}
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}