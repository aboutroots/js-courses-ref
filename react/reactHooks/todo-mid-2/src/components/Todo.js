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
    
    axios.post('https://todoapp-b52a4.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        const todoItem = { id: res.data.name, name: todoName };  // Tu otrzymuję prawdziwe id z backendu. Wysyłam dane na serwer prawidłowo,
        setTodoList(todoList.concat(todoItem));                 // lecz gdy aktualizuję, nie pasuje to już do schematu danych. Musi być zgodne
      })                                                        // z tym, jak ładuję dane, czyli z tym co mam w pętli for w useEffect - stąd ten zapis.
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