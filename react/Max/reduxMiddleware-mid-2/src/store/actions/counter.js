import * as actionTypes from './actionTypes';

// Action Creators to funkcja, która zwraca akcje, przyjmuje ładunek
// konwencją jest użycie tej samej nazwy co identyfikator, lecz małymi literami
export const increment = () => {
  return {
    type: actionTypes.INCREMENT // odnosi się do identyfikatora powyżej
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value,
  };
};

export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value,
  };
};