import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Rozwiązanie problemu z domknięciem:
// Gdy odpowiedź z serwera zajmie dużo czasu, jesli dodam dwie pozycje w krótkim czasie, druga nadpisze pierwszą.
// Po odświeżeniu strony, zobaczę dwa elementy, więc wysłałem je jako oddzielne zadania do serwera. Jednak jest coś źle z
// front endem. Problemem jest to, ze jeśli nacisnę przycisk, wchodze w funkcję todoAddHandler. I tu mam domknięcie, co oznacza,
// że wartości uzyskane z zewnątrz (jak todoName i todoList), są zamknięte w czasie wykonywania funkcji. Czyli:
// kiedy dodam drugie zadanie przed dodaniem pierwszego do stanu, mam ten sam stan początkowy i lista źle pokazuje elementy,
// ponieważ wartość jest zamknięta w funkcji na czas jej wykonywania.
// Moge to rozwiązać np dodając nowy useState.

const Todo = props => { 
  const [ todoName, setTodoName ] = useState('');
  const [ submittedTodo, setSubmittedTodo ] = useState(null);
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
        setTodoList(todos); 
      });

      return () => {
        console.log('Cleanup')
      }

  }, []);

  // tu aktualizuję listę todo
  useEffect(() => {
    if (submittedTodo) {
      setTodoList(todoList.concat(submittedTodo));
    }
  }, [submittedTodo]);

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    
    axios.post('https://todoapp-b52a4.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        setTimeout(() => {
          const todoItem = { id: res.data.name, name: todoName };  
          setSubmittedTodo(todoItem);                 
        }, 3000)
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