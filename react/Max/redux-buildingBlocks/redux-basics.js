const redux = require('redux');         // node import syntax
const createStore = redux.createStore;  // allows to create new redux store

const initialState = {
  counter: 0,
}

// Reducer 
const rootReducer = (state = initialState, action) => {  // This function receive current (old) state and the action.
  if (action.type === 'INC_COUNTER') {
    return {
      ...state,                         // copy of the old state
      counter: state.counter + 1,       // then overwrite the one property you want to adjust
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value,
    }
  }
  return state;
};

// Store
const store = createStore(rootReducer);                // The reducer is only thing that may update the state.
console.log(store.getState());                         // That's why we need to pass the reducer to this creation function.
                                                       // Therefore I actually need to create my reducer first before I create the store.

// Subscription
store.subscribe(() => {                                // subscribe takes an argument, a function which will be executed 
  console.log('[Subscription]', store.getState());     // when ever the state is updated (so whenever an action reached the reducer)
});                                                    // that subscription is set up right after the store was created 

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});                // this dispatch function takes an argument and that argument is an action
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());