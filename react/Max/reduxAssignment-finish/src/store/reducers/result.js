import * as actionTypes from '../actions';

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {                          
    case actionTypes.STORE_RESULT:                                                                                 
      return {                                              
        ...state,                                                                   // concat is like push(), but push manipulates original value,
        results: state.results.concat({id: new Date(), value: action.result})       // concat returns new array, witch is the old array + arg you add to concat
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