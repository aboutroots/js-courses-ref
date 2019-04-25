export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


// Action Creators to funkcja, która zwraca akcje, przyjmuje ładunek
// konwencją jest użycie tej samej nazwy co identyfikator, lecz małymi literami
export const increment = () => {
  return {
    type: INCREMENT // odnosi się do identyfikatora powyżej
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = (value) => {
  return {
    type: ADD,
    val: value,
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    val: value,
  };
};

export const saveResult = ( res ) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
}

export const storeResult = (res) => {
  return dispatch => { //  dostaję tu dispatch dzięki redux-thunk, BO middleware działa między wysyłaniem akcji, a dotarciem jej do reduktora

    setTimeout(() => {            // wysyłam tu akcje, lecz tu wkracza redux-thunk - blokuje on starą akcję i wysyła ją ponownie w przyszłości
      dispatch(saveResult(res));  // Redux-thunk jest w stanie czekać, bo może wywołać akcję kiedy chce.
    }, 2000)                      // WAŻNE: gdy wysyłam asynchroniczną akcję aktualizującą store, muszę wywołać saveResult jako fn
  };
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId,
  };
};