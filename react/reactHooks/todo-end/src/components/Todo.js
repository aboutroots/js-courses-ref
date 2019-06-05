import React, { useState, useEffect, useReducer, useRef, useMemo } from 'react';
import axios from 'axios';

import List from './List';
import { useFormInput } from '../hooks/forms';

const Todo = props => { 
  const [ inputIsValid, setInputIsValid ] = useState(false);

  const todoInput = useFormInput();

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

  const todoAddHandler = () => {
    const todoName = todoInput.value;
    
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

  const inputValidationHandler = event => {
    if (event.target.value.trim() === '') {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }
  }

  return (
    <>
      <input 
        type='text' 
        placeholder='todo' 
        onChange={todoInput.onChange}
        value={todoInput.value}
        style={{ backgroundColor: todoInput.validity === true ? 'transparent' : 'red'}}
      />
      <button type='button' onClick={todoAddHandler}>Add</button>
      {useMemo(
        () => (
          <List items={todoList} onClick={todoRemoveHandler} />
        ), 
        [todoList] // Czyli lista zostanie zaktualizowana, gdy zmieni się todoList, który to wskazałem, by React śledził.
      )}
    </>
  );
};

export default Todo;