import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const Todo = props => { 
  const [ todoName, setTodoName ] = useState('');
  // const [ submittedTodo, setSubmittedTodo ] = useState(null);
  // const [ todoList, setTodoList ] = useState([]); pod komentarzem, bo używam useReducer

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload); // akcja do dodania pojedyńczego elementu
      case 'SET':
        return action.payload;  // ustawia state na nową listę
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload);
      default: 
        return state;
    }
  };

  // poniżej tej lini mogę rozpocząć wysyłanie akcji
  const [ todoList, dispatch ] = useReducer(todoListReducer, []);

  useEffect(() => {
    axios.get('https://todoapp-b52a4.firebaseio.com/todos.json')
      .then(res => {
        console.log(res);
        const todoData = res.data;
        const todos = [];
        for (const key in todoData) {
          todos.push({id: key, name: todoData[key].name})
        }
        dispatch({ type: 'SET', payload: todos }) 
      });

      return () => {
        console.log('Cleanup')
      }

  }, []);

  /* Mogę usunąć, bo korzystam z reduktora. Z reduktorem
    zawsze otrzymuję ostatni stan, manipuluję nim i zwracam nowy stan. 

    A to, że otrzymuje ostatni stan, jest gwarantowane przez React'a, który sięga po swój
    wewnętrzny system zarządzania stanem, i daje mi ten stan.

  useEffect(() => {
    if (submittedTodo) {
      dispatch({type: 'ADD', payload: submittedTodo});
    }
  }, [submittedTodo]);
  */

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };
  

  const todoAddHandler = () => {
    
    axios.post('https://todoapp-b52a4.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        setTimeout(() => {
          const todoItem = { id: res.data.name, name: todoName };  
          dispatch({type: 'ADD', payload: todoItem});                 
        }, 3000)
      })                                                        
      .catch(error => {
        console.log(error);
      })
  };

  const todoRemoveHandler = todoId => {
    axios.delete(`https://todoapp-b52a4.firebaseio.com/todos/${todoId}.json`)
      .then(res => {
        dispatch({ type: 'REMOVE', payload: todoId });
      })
      .catch(err => console.log(err))
    dispatch({ type: 'REMOVE', payload: todoId});
  }

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
        {todoList.map(todo => (   // bind nie do obłsugi this, lecz by przekazać argument
          <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;