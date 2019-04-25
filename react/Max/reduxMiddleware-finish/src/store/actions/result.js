import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};