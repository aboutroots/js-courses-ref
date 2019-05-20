import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {  // 2. Tworzę więc synchroniczny kreator akcji (bo tylko synchroniczne akcje mogą edytować store).
  return {                              // Pozostałe kreatory akcji, jak storeResult są tylko możliwe przez redux thunk i wysyłane są pomiędzy,
    type: actionTypes.STORE_RESULT,     // nigdy nie dostają się do reduktora. Używam ich jako użyteczny krok pomiędzy uruchomieniem asynchronicznego
    result: res,                        // kodu, a wysłaniem synchronicznej akcji w celu zmiany stanu w store.
  };
}

export const storeResult = (res) => {
  return dispatch => { // dostaję tu dispatch dzięki redux-thunk, BO middleware działa między wysyłaniem akcji, a dotarciem jej do reduktora

    setTimeout(() => {          // wysyłam tu akcje, lecz tu wkracza redux-thunk - blokuje on starą akcję i wysyła ją ponownie w przyszłości
      dispatch(saveResult(res));// Redux-thunk jest w stanie czekać, bo może wywołać akcję kiedy chce.
    }, 2000)                    // 1. WAŻNE: mógłbym stworzyć nieskończoną pętlę, gdybym napisał np: dispatch(storeResult); W tym wypadku zazwyczaj
  };                            // tworzy się asynchroniczny kreator akcji, który ostatecznie wysyła akcje stworzoną w synchroniczny sposób.
};                              // saveResult muszę wywołać jako funkcję i przekazuję ładunek

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};