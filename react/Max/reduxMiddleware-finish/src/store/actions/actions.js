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

export const storeResult = (res) => {
  return {
    type: STORE_RESULT,
    result: res,
  };
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId,
  };
};