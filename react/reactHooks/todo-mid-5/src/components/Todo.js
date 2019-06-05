import React, { useState, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const Todo = props => { 
  // const [ todoName, setTodoName ] = useState(''); 

  const todoInputRef = useRef()

  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload); 
      case 'SET':
        return action.payload;  
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.payload);
      default: 
        return state;
    }
  };

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

  /* Nie potrzebuję tego, bo nie aktualizuję juz wartości z onChange.
    Zamiast tego używam wewnętrznego zarządzania stanem inputa.

    Używam ref by wyodrębnić wartość tam, gdzie potrzebuję.

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };
  */

  const todoAddHandler = () => {

    // current odnosi się do elementu html, tu - inputa. Na current mogę użyć value, bo
    // wiem, że todoInputRef wskazuje na input, a input w JavaScript mają pole wartości,
    const todoName = todoInputRef.current.value;
    
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
        ref={todoInputRef} // to zapewnia połączenie między inputem a zmienną todoInputRef
      />
      <button type='button' onClick={todoAddHandler}>Add</button>
      <ul>
        {todoList.map(todo => (  
          <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;