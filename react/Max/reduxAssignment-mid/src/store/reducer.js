import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: [],
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
    case actionTypes.STORE_RESULT:                                                                                 
      return {                                              
        ...state,                                                                   // concat is like push(), but push manipulates original value,
        results: state.results.concat({id: new Date(), value: state.counter})       // concat returns new array, witch is the old array + arg you add to concat
      }
    case actionTypes.DELETE_RESULT:
      // const id = 2;                           The first way to delete - by creating a new array. Spread operator to distribute all elements
      // const newArray = [...state.results]     in state.results into the new array. IMPORTANT - if elements in state.results were objects, 
      // newArray.splice(id, 1)                  the objects themselves are still pointing to the same objects they did before.
                                                 // So if you change a property in one of the elements themselves like this, isn't enough (removing obj is ok)     
      

                                                 // The second way - with filter - it return new array, doesn't touch the old one.
      const updatedArray = state.results.filter(result => result.id !== action.resultElId);      // it is an array, a totally new thread due to filter which returns true for all elements where the ID is not   
      return {                                                                                   // equal to the ID we pass with the action.                              
        ...state,                            
    //  results: newArray,  // copy of old array - first way
        results: updatedArray,
      }
  }
  return state;
};

export default reducer;