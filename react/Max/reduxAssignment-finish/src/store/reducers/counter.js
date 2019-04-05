import * as actionTypes from '../actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);         // This will clone the old object in an immutable way
      newState.counter = state.counter + 1;              // giving us a new javascript object which has all the properties 
      return newState;                                   // of the old object but is a technically different object (NOT DEEP CLONE)
    case actionTypes.DECREMENT:
      return {
        ...state,                                        // the shorter way is to simply return a javascript object
        counter: state.counter - 1,                      // and there, distribute all the properties of the old state with the spread operator
      }                                                  // This simply tells: return JS object, take all properties and values of the state argument
    case actionTypes.ADD:                                // distribute these properties with their values in this new object and then since we define an additional
      return {                                           // property, add this property to the object or overwrite (not touching results)
        ...state,
        counter: state.counter + action.val,
      }
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val,
      }                                                         
  }
  return state;
};

export default reducer;