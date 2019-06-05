import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = props => { 
  const [ todoName, setTodoName ] = useState('');
  const [ todoList, setTodoList ] = useState([]);

  useEffect(() => {
    axios.get('https://todoapp-b52a4.firebaseio.com/todos.json')
      .then(res => {
        console.log(res);
        const todoData = res.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({id: key, name: todoData[key].name})
        }
        setTodoList(todos); // Aktualizuję stan, re-renderuję UI, wywołuję ponownie useEffect - stąd pętla
      });

      return () => {
        console.log('Cleanup')
      }

  }, []);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName));
    axios.post('https://todoapp-b52a4.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <>
      <input 
        type='text' 
        placeholder='todo' 
        onChange={inputChangeHandler} 
        value={todoName} 
      />
      <button type='button' onClick={todoAddHandler}>Add</button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;